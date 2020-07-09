import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './views/home-view/home-view.component';

const dashboardViews: any[] = [
  HomeViewComponent,
]

/**
 * Dashboard module:
 */
@NgModule({
  declarations: [
    ...dashboardViews,
  ],
  imports: [
    CommonModule
  ]
})
export class BikeDashboardModule { }
