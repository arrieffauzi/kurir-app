import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPendingPageRoutingModule } from './detail-pending-routing.module';

import { DetailPendingPage } from './detail-pending.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPendingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailPendingPage]
})
export class DetailPendingPageModule {}
