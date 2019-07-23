interface XHRRequest<T = any> {
  async: boolean;
  body: T;
  headerNames: Record<string, string>;
  headers: Record<string, string>;
  method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
  pass: undefined;
  status: number; // XMLHTTPRequest status, will be 0 in before hook
  upload: XMLHttpRequestUpload;
  url: string;
  user: undefined;
  xhr: XMLHttpRequest;
}

export type NetworkRequest = XHRRequest | Request;

interface XHRResponse {
  data: string;
  finalUrl: string;
  headers: Record<string, string>;
  status: number;
  statusText: '';
  text: string; // this is same as data
  xml: null;
}

export type NetworkResponse = XHRResponse | Response;

export interface NetworkRow {
  request: NetworkRequest;
  response?: NetworkResponse;
}

export interface NetworkRowMessage {
  body: NetworkRow;
  evt: string;
  src: string;
}
