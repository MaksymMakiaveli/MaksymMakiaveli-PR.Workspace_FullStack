import { Injectable } from '@angular/core';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class ViewerService {
  constructor(private readonly jwtService: JwtService) {}
}
