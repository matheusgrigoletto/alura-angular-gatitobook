import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario): Observable<Object> {
    return this.http.post(`${API}/user/signup`, usuario);
  }

  verificaUsuarioExistente(userName: string): Observable<any> {
    return this.http.get(`${API}/user/exists/${userName}`);
  }
}
