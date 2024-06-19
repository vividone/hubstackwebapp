export interface IErrorResponseType {
  response: Response;
}

export interface Response {
  data: Data;
  status: number;
  statusText: string;
  headers: ResponseHeaders;
  config: Config;
  request: Request;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  headers: ConfigHeaders;
  baseURL: string;
  timeoutErrorMessage: string;
  method: string;
  url: string;
  data: string;
}

export interface ConfigHeaders {
  Accept: string;
  Authorization: string;
  "Content-Type": string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Data {
  statusCode: number;
  message: string | string[];
  error: string;
}

export interface ResponseHeaders {
  "content-length": string;
  "content-type": string;
}
