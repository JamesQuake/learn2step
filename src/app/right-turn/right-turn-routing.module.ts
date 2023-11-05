import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightTurnPage } from './right-turn.page';

const routes: Routes = [
  {
    path: '',
    component: RightTurnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightTurnPageRoutingModule {}
