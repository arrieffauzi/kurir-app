import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickUpPageRoutingModule } from './pick-up-routing.module';

import { PickUpPage } from './pick-up.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickUpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PickUpPage]
})
export class PickUpPageModule {}
