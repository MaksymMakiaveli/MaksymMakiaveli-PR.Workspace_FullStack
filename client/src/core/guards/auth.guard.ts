import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PATH_DICTIONARY } from '@core/constants';
import { JwtService } from '@core/services';

export const AuthGuard: CanActivateFn = () => {
  const jwtService = inject(JwtService);
  const router = inject(Router);

  if (jwtService.getToken()) {
    return true;
  }

  router.navigateByUrl(PATH_DICTIONARY.AUTH);
  return false;
};

export const ForbiddenGuard: CanActivateFn = () =>
  !inject(JwtService).getToken();
