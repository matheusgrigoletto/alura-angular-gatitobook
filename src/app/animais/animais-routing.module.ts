import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaAnimaisResolver } from './lista/lista-animais.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: ':id',
    component: DetalheAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
