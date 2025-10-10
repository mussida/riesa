import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { QuotesService, WinesService } from '../../api';

interface WineSelection {
  id: number;
  name: string;
  denomination: string;
  grape: string;
  imageUrl: string;
  background: string;
  textColor: string;
  quantity: number;
}

interface FormData {
  wines: WineSelection[];
  customerType: 'private' | 'business';
  email: string;
  notes: string;
  vatNumber?: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.css'
})
export class QuoteFormComponent implements OnInit, OnDestroy {
  wines: WineSelection[] = [];
  customerType: 'private' | 'business' = 'private';
  email: string = '';
  notes: string = '';
  vatNumber: string = '';
  
  // Nuovi campi indirizzo
  address: string = '';
  city: string = '';
  province: string = '';
  postalCode: string = '';
  country: string = 'Italia';
  
  isSubmitting: boolean = false;
  showSuccess: boolean = false;
  errorMessage: string = '';
  
  // Configurazione limiti
  readonly MIN_BOTTLES_PER_WINE = 1;
  readonly MAX_BOTTLES_PER_WINE = 999;
  readonly MAX_TOTAL_BOTTLES = 1000;
  
  private readonly STORAGE_KEY = 'quote_form_draft';
  private autoSaveInterval: any;

  constructor(
    private quoteService: QuotesService,
    private winesService: WinesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadWines();
    this.loadDraft();
    this.startAutoSave();
  }

  ngOnDestroy(): void {
    this.stopAutoSave();
  }

  loadWines(): void {
    this.winesService.configApiListWines().subscribe({
      next: (wines) => {
        // Se abbiamo una bozza, mantieni le quantità
        const draft = this.getDraft();
        
        this.wines = wines.map(wine => {
          const draftWine = draft?.wines?.find(w => w.id === wine.id);
          return {
            id: wine.id,
            name: wine.name,
            denomination: wine.denomination || '',
            grape: wine.grape || '',
            imageUrl: wine.image_url,
            background: wine.background,
            textColor: wine.text_color || '#000',
            quantity: draftWine?.quantity || 0
          };
        });
      },
      error: (error) => {
        console.error('Errore caricamento vini:', error);
        this.errorMessage = 'Errore nel caricamento dei vini';
      }
    });
  }

  incrementQuantity(wine: WineSelection): void {
    if (wine.quantity < this.MAX_BOTTLES_PER_WINE) {
      const totalAfterIncrement = this.getTotalBottles() + 1;
      if (totalAfterIncrement <= this.MAX_TOTAL_BOTTLES) {
        wine.quantity++;
      } else {
        this.showTemporaryError(`Limite massimo di ${this.MAX_TOTAL_BOTTLES} bottiglie raggiunto`);
      }
    }
  }

  decrementQuantity(wine: WineSelection): void {
    if (wine.quantity > 0) {
      wine.quantity--;
    }
  }

  setQuantity(wine: WineSelection, value: string): void {
    const numValue = parseInt(value) || 0;
    const clampedValue = Math.max(0, Math.min(numValue, this.MAX_BOTTLES_PER_WINE));
    
    const currentTotal = this.getTotalBottles();
    const difference = clampedValue - wine.quantity;
    
    if (currentTotal + difference <= this.MAX_TOTAL_BOTTLES) {
      wine.quantity = clampedValue;
    } else {
      wine.quantity = Math.max(0, this.MAX_TOTAL_BOTTLES - (currentTotal - wine.quantity));
      this.showTemporaryError(`Limite massimo di ${this.MAX_TOTAL_BOTTLES} bottiglie raggiunto`);
    }
  }

  getSelectedWines(): WineSelection[] {
    return this.wines.filter(w => w.quantity > 0);
  }

  getTotalBottles(): number {
    return this.wines.reduce((sum, wine) => sum + wine.quantity, 0);
  }

  isFormValid(): boolean {
    const hasWines = this.getSelectedWines().length > 0;
    const hasEmail = this.email.trim().length > 0 && this.isValidEmail(this.email);
    const hasValidVat = this.customerType === 'private' || this.isValidVatNumber(this.vatNumber);
    const hasAddress = this.address.trim().length > 0;
    const hasCity = this.city.trim().length > 0;
    const hasProvince = this.province.trim().length === 2;
    const hasPostalCode = this.postalCode.trim().length > 0;
    
    return hasWines && hasEmail && hasValidVat && hasAddress && hasCity && hasProvince && hasPostalCode;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidVatNumber(vat: string): boolean {
    // Validazione base P.IVA italiana (11 cifre)
    if (this.customerType === 'private') return true;
    if (!vat) return false;
    return /^\d{11}$/.test(vat.replace(/\s/g, ''));
  }

  isValidProvince(province: string): boolean {
    return province.length === 2 && /^[A-Z]{2}$/.test(province.toUpperCase());
  }

  async submitQuote(): Promise<void> {
    if (!this.isFormValid() || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const payload = {
      customer_type: this.customerType,
      email: this.email.trim(),
      notes: this.buildNotesWithVat(),
      address: this.address.trim(),
      city: this.city.trim(),
      province: this.province.trim().toUpperCase(),
      postal_code: this.postalCode.trim(),
      country: this.country.trim(),
      items: this.getSelectedWines().map(wine => ({
        wine_id: wine.id,
        quantity: wine.quantity
      }))
    };

    this.quoteService.configApiCreateQuoteRequest(payload).subscribe({
      next: (result) => {
        if (result.success) {
          this.showSuccess = true;
          this.clearDraft(); // Rimuovi la bozza salvata
          
          // Reindirizza dopo 3 secondi
          setTimeout(() => {
            this.router.navigate(['/wines']);
          }, 3000);
        } else {
          this.errorMessage = result.message || 'Errore nell\'invio del preventivo';
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Errore:', error);
        this.errorMessage = 'Si è verificato un errore. Riprova più tardi.';
        this.isSubmitting = false;
      }
    });
  }

  private buildNotesWithVat(): string {
    let fullNotes = this.notes.trim();
    if (this.customerType === 'business' && this.vatNumber) {
      fullNotes = `P.IVA: ${this.vatNumber}\n${fullNotes}`;
    }
    return fullNotes || '';
  }

  resetForm(): void {
    this.wines.forEach(wine => wine.quantity = 0);
    this.email = '';
    this.notes = '';
    this.vatNumber = '';
    this.address = '';
    this.city = '';
    this.province = '';
    this.postalCode = '';
    this.country = 'Italia';
    this.customerType = 'private';
    this.showSuccess = false;
    this.errorMessage = '';
    this.clearDraft();
  }

  // ========== Auto-save Draft ==========

  private startAutoSave(): void {
    // Salva ogni 3 secondi
    this.autoSaveInterval = setInterval(() => {
      this.saveDraft();
    }, 3000);
  }

  private stopAutoSave(): void {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
  }

  private saveDraft(): void {
    // Salva solo se ci sono dati
    if (this.getTotalBottles() > 0 || this.email || this.notes || this.address) {
      const draft: FormData = {
        wines: this.wines.filter(w => w.quantity > 0),
        customerType: this.customerType,
        email: this.email,
        notes: this.notes,
        vatNumber: this.vatNumber,
        address: this.address,
        city: this.city,
        province: this.province,
        postalCode: this.postalCode,
        country: this.country
      };
      
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(draft));
      } catch (e) {
        console.warn('Impossibile salvare la bozza', e);
      }
    }
  }

  private loadDraft(): void {
    const draft = this.getDraft();
    if (draft) {
      this.customerType = draft.customerType;
      this.email = draft.email;
      this.notes = draft.notes;
      this.vatNumber = draft.vatNumber || '';
      this.address = draft.address || '';
      this.city = draft.city || '';
      this.province = draft.province || '';
      this.postalCode = draft.postalCode || '';
      this.country = draft.country || 'Italia';
      // Le quantità dei vini verranno applicate in loadWines()
    }
  }

  private getDraft(): FormData | null {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.warn('Impossibile caricare la bozza', e);
      return null;
    }
  }

  private clearDraft(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
      console.warn('Impossibile eliminare la bozza', e);
    }
  }

  hasDraft(): boolean {
    return this.getDraft() !== null;
  }

  // ========== UI Helpers ==========

  private showTemporaryError(message: string): void {
    this.errorMessage = message;
    setTimeout(() => {
      if (this.errorMessage === message) {
        this.errorMessage = '';
      }
    }, 3000);
  }

  clearError(): void {
    this.errorMessage = '';
  }
}