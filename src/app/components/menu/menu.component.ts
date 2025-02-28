import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isMenuActive = model<boolean>(false);
  toggleMenu() {
    this.isMenuActive.set(!this.isMenuActive);
    if (this.isMenuActive()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
