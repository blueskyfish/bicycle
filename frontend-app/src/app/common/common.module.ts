import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BACKEND_CONFIG } from './service/backend.service';

/**
 * Teh configuration interface for the {@link BikeCommonModule}
 */
export interface BikeCommonConfig {

  /**
   * The backend api url
   */
  backendApi: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class BikeCommonModule {

  static forRoot(storage: Storage, config: BikeCommonConfig): ModuleWithProviders<BikeCommonModule> {
    return {
      ngModule: BikeCommonModule,
      providers: [
        {
          provide: Storage,
          useValue: storage,
        },
        {
          provide: BACKEND_CONFIG,
          useValue: config.backendApi,
        },
      ]
    };
  }
}
