import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PublicGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): Observable<boolean> {
    return this.authService.chekauthentication()
      .pipe(
        tap(isAuthenticated => {
          if(isAuthenticated) {
            this.router.navigate(['./'])
          }
        }),
        map(isAuthenticated => !isAuthenticated)
      )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.checkAuthStatus()
  }

}
