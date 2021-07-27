import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAnimaisResolver } from './lista/lista-animais.resolver';
import { ListaComponent } from './lista/lista.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: 'novo',
    pathMatch: 'full',
    component: NovoAnimalComponent,
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
