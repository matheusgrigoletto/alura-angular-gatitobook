import { Component, OnInit, Input } from '@angular/core';

import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  @Input() descricao: string = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.#urlOriginal = url;
    } else {
      this.#urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.#urlOriginal;
  }

  #urlOriginal: string = '';

  constructor() {}

  ngOnInit() {}
}
