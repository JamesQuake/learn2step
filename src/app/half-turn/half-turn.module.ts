import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalfTurnPageRoutingModule } from './half-turn-routing.module';

import { HalfTurnPage } from './half-turn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalfTurnPageRoutingModule
  ],
  declarations: [HalfTurnPage]
})
export class HalfTurnPageModule {}
