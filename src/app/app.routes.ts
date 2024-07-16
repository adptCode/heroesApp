import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes/auth.routes').then(r => r.authRoutes)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/routes/heroes.routes').then(r => r.heroesRoutes)
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
