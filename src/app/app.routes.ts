import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes/auth.routes').then(r => r.authRoutes),
    canActivate: [PublicGuard]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/routes/heroes.routes').then(r => r.heroesRoutes),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
