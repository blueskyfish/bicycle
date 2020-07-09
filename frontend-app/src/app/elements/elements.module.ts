import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureBicycleComponent } from './components';

const elementComponents: any[] = [
  PictureBicycleComponent,
]


@NgModule({
  declarations: [
    ...elementComponents,
  ],
  exports: [
    PictureBicycleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BikeElementsModule { }
