import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterOutlet,  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, CommonModule, RouterLink],
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url:'./list' },
    { label: 'Añadir', icon: 'add', url:'./new-hero' },
    { label: 'Buscar', icon: 'search', url:'./search' },
  ]

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
