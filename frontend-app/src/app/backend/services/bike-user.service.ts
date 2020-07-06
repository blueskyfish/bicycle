/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BikeBaseService } from '../bike-base-service';
import { BikeBackendConfig } from '../bike-backend-config';
import { BikeHttpResponse } from '../bike-http-response';
import { BikeRequestBuilder } from '../bike-request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BikeChangePasswordPayload } from '../models/bike-change-password-payload';
import { BikeLoginPayload } from '../models/bike-login-payload';
import { BikeLoginUser } from '../models/bike-login-user';
import { BikeRegisterPayload } from '../models/bike-register-payload';
import { BikeUserInfo } from '../models/bike-user-info';

@Injectable({
  providedIn: 'root',
})
export class BikeUserService extends BikeBaseService {
  constructor(
    config: BikeBackendConfig,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/login';

  /**
   * The login of an user. In case of success the result is the user information and his authentication token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: {
      body: BikeLoginPayload
  }): Observable<BikeHttpResponse<BikeLoginUser>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeUserService.LoginPath, 'put');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<BikeLoginUser>;
      })
    );
  }

  /**
   * The login of an user. In case of success the result is the user information and his authentication token
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: {
      body: BikeLoginPayload
  }): Observable<BikeLoginUser> {

    return this.login$Response(params).pipe(
      map((r: BikeHttpResponse<BikeLoginUser>) => r.body as BikeLoginUser)
    );
  }

  /**
   * Path part for operation register
   */
  static readonly RegisterPath = '/register';

  /**
   * A user try to register. In case of success the result is the user information and his authentication token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: {
      body: BikeRegisterPayload
  }): Observable<BikeHttpResponse<BikeLoginUser>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeUserService.RegisterPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<BikeLoginUser>;
      })
    );
  }

  /**
   * A user try to register. In case of success the result is the user information and his authentication token
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: {
      body: BikeRegisterPayload
  }): Observable<BikeLoginUser> {

    return this.register$Response(params).pipe(
      map((r: BikeHttpResponse<BikeLoginUser>) => r.body as BikeLoginUser)
    );
  }

  /**
   * Path part for operation getInfo
   */
  static readonly GetInfoPath = '/user/info';

  /**
   * Get the information of the current user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInfo$Response(params?: {

  }): Observable<BikeHttpResponse<BikeUserInfo>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeUserService.GetInfoPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<BikeUserInfo>;
      })
    );
  }

  /**
   * Get the information of the current user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInfo(params?: {

  }): Observable<BikeUserInfo> {

    return this.getInfo$Response(params).pipe(
      map((r: BikeHttpResponse<BikeUserInfo>) => r.body as BikeUserInfo)
    );
  }

  /**
   * Path part for operation changePassword
   */
  static readonly ChangePasswordPath = '/user/password';

  /**
   * Chnage the password of the current user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: {
      body: BikeChangePasswordPayload
  }): Observable<BikeHttpResponse<BikeUserInfo>> {

    const rb = new BikeRequestBuilder(this.rootUrl, BikeUserService.ChangePasswordPath, 'put');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as BikeHttpResponse<BikeUserInfo>;
      })
    );
  }

  /**
   * Chnage the password of the current user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: {
      body: BikeChangePasswordPayload
  }): Observable<BikeUserInfo> {

    return this.changePassword$Response(params).pipe(
      map((r: BikeHttpResponse<BikeUserInfo>) => r.body as BikeUserInfo)
    );
  }

}
