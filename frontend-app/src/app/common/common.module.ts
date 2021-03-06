import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BACKEND_CONFIG, BackendService } from './service/backend.service';
import { STORAGE_TOKEN } from './service/storage.service';

/**
 * The configuration interface for the {@link BikeCommonModule}
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
          provide: STORAGE_TOKEN,
          useValue: storage,
        },
        {
          provide: BACKEND_CONFIG,
          useValue: config.backendApi,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: BackendService,
          multi: true,
        }
      ]
    };
  }
}
