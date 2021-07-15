import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario): Observable<Object> {
    return this.http.post('http://localhost:3000/user/signup', usuario);
  }

  verificaUsuarioExistente(userName: string): Observable<any> {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
