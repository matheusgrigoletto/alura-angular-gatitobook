import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
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
