import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

import { Usuario } from './usuario';
import { CadastroService } from './cadastro.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private cadastroService: CadastroService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario: string) =>
          this.cadastroService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste: boolean) => {
          if (usuarioExiste) {
            return {
              usuarioExistente: true,
            };
          }
          return null;
        }),
        first()
      );
    };
  }
}
