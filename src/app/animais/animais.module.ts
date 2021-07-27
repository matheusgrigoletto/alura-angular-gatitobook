import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [ListaComponent, AnimalComponent],
  imports: [CommonModule, AnimaisRoutingModule],
})
export class AnimaisModule {}
