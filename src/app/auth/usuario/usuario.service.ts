import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { Usuario } from './usuario';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  #usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.has()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.get();
    const usuario = jwt_decode(token) as Usuario;
    this.#usuarioSubject.next(usuario);
  }

  retornaUsuario(): Observable<Usuario> {
    return this.#usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.set(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.remove();
    this.#usuarioSubject.next({});
  }

  estaLogado(): boolean {
    return this.tokenService.has();
  }
}
