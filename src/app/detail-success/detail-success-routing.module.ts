import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSuccessPage } from './detail-success.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSuccessPageRoutingModule {}
