import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Animais } from './animais';
import { TokenService } from '../auth/token.service';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listaUsuario(nomeUsuario: string): Observable<Animais> {
    const token = this.tokenService.get();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animais>(`${API}/${nomeUsuario}/photos`, {
      headers,
    });
  }
}
