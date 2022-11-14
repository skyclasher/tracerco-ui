/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { TracercoApiBaseService } from '../tracerco-api-base-service';
import { TracercoApiConfiguration } from '../tracerco-api-configuration';
import { TracercoApiStrictHttpResponse } from '../tracerco-api-strict-http-response';
import { TracercoApiRequestBuilder } from '../tracerco-api-request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { TracercoApiWeatherForecast } from '../models/tracerco-api-weather-forecast';

@Injectable({
  providedIn: 'root',
})
export class TracercoApiWeatherForecastService extends TracercoApiBaseService {
  constructor(
    config: TracercoApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation weatherForecastGetWeatherForecastGet
   */
  static readonly WeatherForecastGetWeatherForecastGetPath = '/WeatherForecast/GetWeatherForecast';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weatherForecastGetWeatherForecastGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetWeatherForecastGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<TracercoApiStrictHttpResponse<Array<TracercoApiWeatherForecast>>> {

    const rb = new TracercoApiRequestBuilder(this.rootUrl, TracercoApiWeatherForecastService.WeatherForecastGetWeatherForecastGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as TracercoApiStrictHttpResponse<Array<TracercoApiWeatherForecast>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `weatherForecastGetWeatherForecastGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetWeatherForecastGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<TracercoApiWeatherForecast>> {

    return this.weatherForecastGetWeatherForecastGet$Plain$Response(params).pipe(
      map((r: TracercoApiStrictHttpResponse<Array<TracercoApiWeatherForecast>>) => r.body as Array<TracercoApiWeatherForecast>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weatherForecastGetWeatherForecastGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetWeatherForecastGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<TracercoApiStrictHttpResponse<Array<TracercoApiWeatherForecast>>> {

    const rb = new TracercoApiRequestBuilder(this.rootUrl, TracercoApiWeatherForecastService.WeatherForecastGetWeatherForecastGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as TracercoApiStrictHttpResponse<Array<TracercoApiWeatherForecast>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `weatherForecastGetWeatherForecastGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetWeatherForecastGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<TracercoApiWeatherForecast>> {

    return this.weatherForecastGetWeatherForecastGet$Json$Response(params).pipe(
      map((r: TracercoApiStrictHttpResponse<Array<TracercoApiWeatherForecast>>) => r.body as Array<TracercoApiWeatherForecast>)
    );
  }

  /**
   * Path part for operation weatherForecastGetHottestForecastGet
   */
  static readonly WeatherForecastGetHottestForecastGetPath = '/WeatherForecast/GetHottestForecast';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weatherForecastGetHottestForecastGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetHottestForecastGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<TracercoApiStrictHttpResponse<TracercoApiWeatherForecast>> {

    const rb = new TracercoApiRequestBuilder(this.rootUrl, TracercoApiWeatherForecastService.WeatherForecastGetHottestForecastGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as TracercoApiStrictHttpResponse<TracercoApiWeatherForecast>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `weatherForecastGetHottestForecastGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetHottestForecastGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<TracercoApiWeatherForecast> {

    return this.weatherForecastGetHottestForecastGet$Plain$Response(params).pipe(
      map((r: TracercoApiStrictHttpResponse<TracercoApiWeatherForecast>) => r.body as TracercoApiWeatherForecast)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weatherForecastGetHottestForecastGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetHottestForecastGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<TracercoApiStrictHttpResponse<TracercoApiWeatherForecast>> {

    const rb = new TracercoApiRequestBuilder(this.rootUrl, TracercoApiWeatherForecastService.WeatherForecastGetHottestForecastGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as TracercoApiStrictHttpResponse<TracercoApiWeatherForecast>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `weatherForecastGetHottestForecastGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weatherForecastGetHottestForecastGet$Json(params?: {
    context?: HttpContext
  }
): Observable<TracercoApiWeatherForecast> {

    return this.weatherForecastGetHottestForecastGet$Json$Response(params).pipe(
      map((r: TracercoApiStrictHttpResponse<TracercoApiWeatherForecast>) => r.body as TracercoApiWeatherForecast)
    );
  }

}
