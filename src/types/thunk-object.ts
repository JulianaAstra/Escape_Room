import { AppDispatch, State } from './state';
import { AxiosInstance } from 'axios';

export type ThunkObjType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
