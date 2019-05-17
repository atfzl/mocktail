export interface NetworkRow {
  url: string;
  method: string;
  body: any;
  headers: Record<string, string>;
}

export interface NetworkRowMessage {
  body: NetworkRow;
  evt: string;
  src: string;
}
