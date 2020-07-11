
export interface ErrorMessage {
  status: number;
  group: string;
  code: string;
  message: string;
  request: {
    method: string;
    url: string;
  }
}

export interface ErrorState {
  last: Partial<ErrorMessage>;
  list: Array<Partial<ErrorMessage>>;
}
