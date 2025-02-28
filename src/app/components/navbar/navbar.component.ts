import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  burgerMenuActive = false;
  isMenuActive = model<boolean>(false);

  toggleMenu() {
    this.isMenuActive.set(!this.isMenuActive());
     if (this.isMenuActive()) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = '';
     }
  }
}
