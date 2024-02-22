import { Routes } from '@angular/router';
import { PATH_DICTIONARY } from '@core/constants';
import { AuthGuard, ForbiddenGuard } from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: PATH_DICTIONARY.AUTH,
    loadComponent: () => import('../pages/auth').then((m) => m.AuthComponent),
    canActivate: [ForbiddenGuard],
  },
];
