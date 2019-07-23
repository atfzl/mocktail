export interface XHRRequest<T = any> {
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

export type NetworkRequest = XHRRequest | Request | { url: Request };

interface XHRResponse<T = any> {
  data: T;
  finalUrl: string;
  headers: Record<string, string>;
  status: number;
  statusText: '';
  text: string; // this is same as data
  xml: null;
}

export type MockedNetworkResponse = Partial<XHRResponse> | Response;

export type NetworkResponse = XHRResponse | Response;

export interface NetworkRow {
  request: {
    url: string;
    method: string;
    body: any;
    headers: Record<string, string>;
  };
  response?: NetworkResponse;
}

export interface MockedNetworkRow extends NetworkRow {
  delay: number;
  active: boolean;
}

export interface NetworkRowMessage {
  body: NetworkRow;
  evt: string;
  src: string;
}
