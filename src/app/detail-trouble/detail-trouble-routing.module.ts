import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTroublePage } from './detail-trouble.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTroublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTroublePageRoutingModule {}
