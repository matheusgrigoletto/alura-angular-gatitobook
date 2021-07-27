import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;

  comentarios$!: Observable<Comentarios>;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private comentariosService: ComentariosService
  ) {}

  ngOnInit() {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);

    this.form = this.fb.group({
      comentario: ['', [Validators.maxLength(300)]],
    });
  }

  salvar() {
    const comentario = this.form.get('comentario')?.value ?? '';

    this.comentarios$ = this.comentariosService
      .adicionaComentario(this.id, comentario)
      .pipe(
        switchMap(() => this.comentariosService.buscaComentario(this.id)),
        tap(() => this.form.reset())
      );
  }
}
