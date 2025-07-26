import { CommonModule } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  burgerMenuActive = false;
  isMenuActive = model<boolean>(false);
  isWineDetailRoute = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isWineDetailRoute = this.router.url.startsWith('/wines/');
      });
  }

  toggleMenu() {
    this.isMenuActive.set(!this.isMenuActive());
    if (this.isMenuActive()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  get isGalleryRoute(): boolean {
    return this.router.url.includes('/gallery');
  }
}
