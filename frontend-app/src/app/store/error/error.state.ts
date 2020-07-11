
export interface ErrorMessage {
  /**
   * The error id
   */
  id: number;
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
