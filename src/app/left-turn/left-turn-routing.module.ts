import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftTurnPage } from './left-turn.page';

const routes: Routes = [
  {
    path: '',
    component: LeftTurnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftTurnPageRoutingModule {}
