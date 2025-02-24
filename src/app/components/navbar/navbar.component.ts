import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  burgerMenuActive = false;
  isMenuActive = model<boolean>(false);

  toggleMenu() {
    this.isMenuActive.set(!this.isMenuActive());
  }
}
