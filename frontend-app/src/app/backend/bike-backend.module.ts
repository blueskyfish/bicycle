/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BikeBackendConfig, BikeBackendConfigParams } from './bike-backend-config';

import { BikeSystemService } from './services/bike-system.service';
import { BikeUserService } from './services/bike-user.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BikeSystemService,
    BikeUserService,
    BikeBackendConfig
  ],
})
export class BikeBackendModule {
  static forRoot(params: BikeBackendConfigParams): ModuleWithProviders<BikeBackendModule> {
    return {
      ngModule: BikeBackendModule,
      providers: [
        {
          provide: BikeBackendConfig,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: BikeBackendModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('BikeBackendModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
