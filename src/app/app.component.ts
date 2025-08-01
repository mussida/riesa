import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'riesa';
  isMenuActive = model<boolean>(false);
}
