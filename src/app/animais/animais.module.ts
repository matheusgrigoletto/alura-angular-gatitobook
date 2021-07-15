import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, AnimaisRoutingModule],
})
export class AnimaisModule {}
