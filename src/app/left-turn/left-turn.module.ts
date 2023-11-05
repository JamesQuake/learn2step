import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeftTurnPageRoutingModule } from './left-turn-routing.module';

import { LeftTurnPage } from './left-turn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeftTurnPageRoutingModule
  ],
  declarations: [LeftTurnPage]
})
export class LeftTurnPageModule {}
