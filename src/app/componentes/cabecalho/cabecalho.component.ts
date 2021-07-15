import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/auth/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
