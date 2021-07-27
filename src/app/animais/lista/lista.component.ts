import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/auth/usuario/usuario.service';

import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  animais!: Animais;

  constructor(private aRoute: ActivatedRoute) {}

  ngOnInit() {
    this.aRoute.params.subscribe((params) => {
      this.animais = this.aRoute.snapshot.data['animais'];
    });
  }
}
