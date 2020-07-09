import { BikeErrorBody } from '../../../backend';

export interface ErrorItem {
  status: number;
  group: string;
  code: string;
  message?: string;
}

export interface ErrorStateModel {
  list: ErrorItem[];
}

export const initialErrorState: ErrorStateModel = {
  list: [],
};
