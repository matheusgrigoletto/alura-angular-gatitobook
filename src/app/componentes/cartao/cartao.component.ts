import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
})
export class CartaoComponent implements OnInit {
  @Input() titulo = '';

  constructor() {}

  ngOnInit(): void {}
}
