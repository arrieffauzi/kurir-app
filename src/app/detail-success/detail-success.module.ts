import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSuccessPageRoutingModule } from './detail-success-routing.module';

import { DetailSuccessPage } from './detail-success.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSuccessPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailSuccessPage]
})
export class DetailSuccessPageModule {}
