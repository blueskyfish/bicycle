import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BikeElementsModule } from '../elements/elements.module';
import { LoginViewComponent } from './view/login-view.component';


/**
 * Login module
 */
@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    TranslateModule,

    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    BikeElementsModule,
  ],
})
export class BikeLoginModule { }
