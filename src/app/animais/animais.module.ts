import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoModule } from '../componentes/cartao/cartao.module';
import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';

@NgModule({
  declarations: [ListaComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalheAnimalComponent],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule],
})
export class AnimaisModule {}
