import {
    HttpContext, HttpHeaders, HttpParams
} from '@angular/common/http';

export interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  withCredentials?: boolean;
}
export type HttpParamsHeaders =
  | string
  | {
      [name: string]: string | string[];
    };
export interface HttpBasicOptions {
  params?: HttpParamsRequest;
  headers?: HttpParamsHeaders;
}
export interface HttpGetRequest {
  url: string;
  options?: HttpBasicOptions;
}
export interface HttpPostRequest extends HttpGetRequest {
  body: any;
}
export interface HttpPutRequest extends HttpPostRequest {};

export type ObjectModel= {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
};

export type HttpParamsRequest =ObjectModel;
