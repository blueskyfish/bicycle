/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BikeBaseService } from '../bike-base-service';
import { BikeBackendConfig } from '../bike-backend-config';
import { BikeHttpResponse } from '../bike-http-response';
import { BikeRequestBuilder } from '../bike-request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BikeAbout } from '../models/bike-about';
import { BikeAlive } from '../models/bike-alive';

@Injectable({
  providedIn: 'root',
})
export class BikeSystemService extends BikeBaseService {
  constructor(
    config: BikeBackendConfig,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getHello
   */
  static readonly GetHelloPath = '/';

  /**
   * Get hello world
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHello()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHello$Response(params?: {

    /**
     * Your Name (max 20 signs)
     */
    name?: string;

  }): Observable<BikeHttpResponse<string>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeSystemService.GetHelloPath, 'get');
    if (params) {

      rb.query('name', params.name, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<string>;
      })
    );
  }

  /**
   * Get hello world
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getHello$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHello(params?: {

    /**
     * Your Name (max 20 signs)
     */
    name?: string;

  }): Observable<string> {

    return this.getHello$Response(params).pipe(
      map((r: BikeHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation alive
   */
  static readonly AlivePath = '/alive';

  /**
   * Get alive entity from the backend
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alive()` instead.
   *
   * This method doesn't expect any request body.
   */
  alive$Response(params?: {

  }): Observable<BikeHttpResponse<BikeAlive>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeSystemService.AlivePath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<BikeAlive>;
      })
    );
  }

  /**
   * Get alive entity from the backend
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alive(params?: {

  }): Observable<BikeAlive> {

    return this.alive$Response(params).pipe(
      map((r: BikeHttpResponse<BikeAlive>) => r.body as BikeAlive)
    );
  }

  /**
   * Path part for operation getAbout
   */
  static readonly GetAboutPath = '/about';

  /**
   * Get the about information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAbout()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAbout$Response(params?: {

  }): Observable<BikeHttpResponse<BikeAbout>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeSystemService.GetAboutPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<BikeAbout>;
      })
    );
  }

  /**
   * Get the about information
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAbout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAbout(params?: {

  }): Observable<BikeAbout> {

    return this.getAbout$Response(params).pipe(
      map((r: BikeHttpResponse<BikeAbout>) => r.body as BikeAbout)
    );
  }

}
