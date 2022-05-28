import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { apiConst } from '../../app/const';
import {
  HttpBasicOptions,
  HttpGetRequest,
  HttpOptions,
  HttpPostRequest
} from '../models/http-model';

@Injectable()
export class Api {
  url: string = apiConst.url;

  constructor(public http: HttpClient) {}

  get(request: HttpGetRequest) {
    let seq = this.http
      .get(this.url + request.url, this.getBasicHttpOptions(request.options))
      .pipe(
        tap((data: any) => {
          return data;
        }),
        catchError((error) => {
          return error;
        })
      );
    return seq;
  }

  post(request: HttpPostRequest) {
    let seq = this.http
      .post(
        this.url + request.url,
        request.body,
        this.getBasicHttpOptions(request.options)
      )
      .pipe(
        tap((data: any) => {}),
        catchError((error) => {
          return error;
        })
      );
    return seq;
  }

  put(request: HttpPostRequest) {
    let seq = this.http
      .put(
        this.url + request.url,
        request.body,
        this.getBasicHttpOptions(request.options)
      )
      .pipe(
        tap((data: any) => {}),
        catchError((error) => {
          return error;
        })
      );
    return seq;
  }

  getBasicHttpOptions(options?: HttpBasicOptions): HttpOptions {
    return {
      params: new HttpParams({fromObject:options?.params}),
      headers: new HttpHeaders(options?.headers),
    };
  }
}
