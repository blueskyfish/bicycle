import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { DashboardViewComponent, HomeViewComponent } from './views';

const dashboardViews: any[] = [
  DashboardViewComponent,
  HomeViewComponent,
];

const dashboardComponents: any[] = [
  TitleBarComponent,
];

/**
 * Dashboard module:
 */
@NgModule({
  declarations: [
    ...dashboardViews,
    ...dashboardComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,

    TranslateModule,

    MatButtonModule,
    MatIconModule,
  ]
})
export class BikeDashboardModule { }
