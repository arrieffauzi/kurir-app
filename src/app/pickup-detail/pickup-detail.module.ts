import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupDetailPageRoutingModule } from './pickup-detail-routing.module';

import { PickupDetailPage } from './pickup-detail.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PickupDetailPage]
})
export class PickupDetailPageModule {}
