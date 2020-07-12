import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageBoxComponent, PictureBicycleComponent } from './components';

const elementComponents: any[] = [
  MessageBoxComponent,
  PictureBicycleComponent,
]


@NgModule({
  declarations: [
    ...elementComponents,
  ],
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,
  ]
})
export class BikeElementsModule { }
