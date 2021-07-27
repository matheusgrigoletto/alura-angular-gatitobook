import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Animais, Animal } from './animais';
import { TokenService } from '../auth/token.service';

const API = environment.apiUrl;

enum HttpStatusCode {
  Ok = 200,
  NotModified = 304,
}

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listaUsuario(nomeUsuario: string): Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeUsuario}/photos`);
  }

  buscaPorId(id: string): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }

  excluirAnimal(id: string): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: string): Observable<boolean> {
    return this.httpClient
      .post(
        `${API}/photos/${id}/like`,
        {},
        {
          observe: 'response',
        }
      )
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === HttpStatusCode.NotModified
            ? of(false)
            : throwError(error);
        })
      );
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const data = new FormData();
    data.append('description', descricao);
    data.append('allowComments', permiteComentario ? 'true' : 'false');
    data.append('imageFile', arquivo);

    return this.httpClient.post(`${API}/photos/upload`, data, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
