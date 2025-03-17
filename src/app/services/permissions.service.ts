import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean {
    if (!this.userService.currentUser.hasPermissions) {
      this.router.navigate(['/blog']);
    }
    return this.userService.currentUser.hasPermissions;
  }
}

export const AuthGuard: CanActivateFn = (): boolean => {
  return inject(PermissionsService).canActivate();
};
