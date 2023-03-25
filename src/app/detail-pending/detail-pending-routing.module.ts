import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPendingPage } from './detail-pending.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPendingPageRoutingModule {}
