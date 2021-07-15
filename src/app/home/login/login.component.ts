import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.usuario && this.senha) {
      this.authService.login(this.usuario, this.senha).subscribe(
        (response: any) => {
          this.router.navigateByUrl('/animais');
        },
        (err: any) => {
          alert('Usuário não encontrado');
          console.log(err);
        }
      );
    }
  }

  ngOnInit(): void {}
}
