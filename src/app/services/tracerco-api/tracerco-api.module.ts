/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TracercoApiConfiguration, TracercoApiConfigurationParams } from './tracerco-api-configuration';

import { TracercoApiWeatherForecastService } from './services/tracerco-api-weather-forecast.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    TracercoApiWeatherForecastService,
    TracercoApiConfiguration
  ],
})
export class TracercoApiModule {
  static forRoot(params: TracercoApiConfigurationParams): ModuleWithProviders<TracercoApiModule> {
    return {
      ngModule: TracercoApiModule,
      providers: [
        {
          provide: TracercoApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: TracercoApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('TracercoApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
