import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailInProgressPageRoutingModule } from './detail-in-progress-routing.module';

import { DetailInProgressPage } from './detail-in-progress.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailInProgressPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailInProgressPage]
})
export class DetailInProgressPageModule {}
