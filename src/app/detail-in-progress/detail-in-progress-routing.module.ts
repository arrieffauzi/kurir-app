import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailInProgressPage } from './detail-in-progress.page';

const routes: Routes = [
  {
    path: '',
    component: DetailInProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailInProgressPageRoutingModule {}
