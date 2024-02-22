import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  savedToken = signal<null | string>(null);
  constructor(private readonly storageService: LocalStorageService) {}

  save = () => {
    const token = 'ABSDC000';
    this.savedToken.update((_) => token);
  };

  get = () => {
    return this.savedToken();
  };

  getToken = () => {
    return this.storageService.get<string>('token');
  };

  saveToken = (token: string) => {
    this.storageService.set('token', token);
  };

  destroyToken = () => {
    this.storageService.remove('token');
  };
}
