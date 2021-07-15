import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { CadastroService } from './cadastro.service';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cadastroService: CadastroService,
    private usuarioExisteService: UsuarioExisteService
  ) {}

  initForm(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, minusculoValidator],
          [this.usuarioExisteService.usuarioJaExiste()],
        ],
        password: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar(): void {
    if (this.form.valid) {
      const usuario = this.form.getRawValue() as Usuario;
      this.cadastroService.cadastrar(usuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (erro) => {
          console.log(erro);
        }
      );
    }
  }

  ngOnInit(): void {
    this.initForm();
  }
}
