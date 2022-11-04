/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class TracercoApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `TracercoApiModule.forRoot()`
 */
export interface TracercoApiConfigurationParams {
  rootUrl?: string;
}
