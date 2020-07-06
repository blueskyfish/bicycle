/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class BikeBackendConfig {
  rootUrl: string = '';
}

/**
 * Parameters for `BikeBackendModule.forRoot()`
 */
export interface BikeBackendConfigParams {
  rootUrl?: string;
}
