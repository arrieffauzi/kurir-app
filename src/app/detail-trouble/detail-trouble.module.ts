import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTroublePageRoutingModule } from './detail-trouble-routing.module';

import { DetailTroublePage } from './detail-trouble.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTroublePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailTroublePage]
})
export class DetailTroublePageModule {}
