import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { StateClass } from '@ngxs/store/internals';
import { NgxsConfig } from '@ngxs/store/src/symbols';
import { environment } from '../../environments/environment';
import { ErrorStateService } from './service/error';
import { UserStateService } from './service/user';

const storeStates: StateClass[] = [
  ErrorStateService,
  UserStateService
];

const storeOptions: Partial<NgxsConfig> = {
  developmentMode: !environment.production,
}

/**
 * The redux store with the single point of truth from data layer
 *
 * **NOTE**: This module must not be dependent on other project modules. It is referenced as a dependency in other project modules
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    NgxsModule.forRoot(storeStates, storeOptions),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      name: 'Bicycle-Store'
    }),
  ],
  exports: [
    NgxsModule,
  ],
})
export class BikeStoreModule {

}
