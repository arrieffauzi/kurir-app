import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickUpPage } from './pick-up.page';

const routes: Routes = [
  {
    path: '',
    component: PickUpPage,
    children: [
      {
        path: 'pending',
        children: [
          {
            path: '',
            loadChildren: () => import('../detail-pending/detail-pending.module').then(m => m.DetailPendingPageModule)
          }
        ]
      },
      {
        path: 'inprogress',
        children: [
          {
            path: '',
            loadChildren: () => import('../detail-in-progress/detail-in-progress.module').then(m => m.DetailInProgressPageModule)
          }
        ]
      },
      {
        path: 'success',
        children: [
          {
            path: '',
            loadChildren: () => import('../detail-success/detail-success.module').then(m => m.DetailSuccessPageModule)
          }
        ]
      },
      {
        path: 'trouble',
        children: [
          {
            path: '',
            loadChildren: () => import('../detail-trouble/detail-trouble.module').then(m => m.DetailTroublePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'pending',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'pending',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickUpPageRoutingModule {}
