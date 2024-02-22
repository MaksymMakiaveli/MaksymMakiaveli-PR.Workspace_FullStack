import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { JwtService } from '@core/services';
import { EMPTY } from 'rxjs';
import { routes } from './app.routes';

export function initAuth(jwtService: JwtService) {
  return () => (jwtService.getToken() ? true : EMPTY);
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [JwtService],
      multi: true,
    },
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
