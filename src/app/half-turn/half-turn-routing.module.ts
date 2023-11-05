import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalfTurnPage } from './half-turn.page';

const routes: Routes = [
  {
    path: '',
    component: HalfTurnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalfTurnPageRoutingModule {}
