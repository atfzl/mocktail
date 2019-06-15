export interface NetworkRequest {
  url: string;
  method: string;
  body: any;
  headers: Record<string, string>;
  [k: string]: any;
}

export interface NetworkResponse {
  data: string;
  finalUrl: string;
  status: number;
  headers: Record<string, string>;
  [k: string]: any;
}

export interface NetworkRow {
  request: NetworkRequest;
  response?: NetworkResponse;
}

export interface NetworkRowMessage {
  body: NetworkRow;
  evt: string;
  src: string;
}
