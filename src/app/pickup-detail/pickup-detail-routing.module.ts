import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupDetailPage } from './pickup-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PickupDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupDetailPageRoutingModule {}
