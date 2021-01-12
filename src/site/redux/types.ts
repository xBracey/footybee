import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootState } from "./reducers";

export interface IAction {
  type: string;
  data?: any;
}

export type ThunkResult<R> = ThunkAction<R, IRootState, null, IAction>;

export type ThunkNewDispatch = ThunkDispatch<IRootState, null, IAction>;

export interface IAPIResponse {
  data: any;
  time: Date;
  error: boolean;
  message?: string;
}

export interface IReducers<T> {
  [reducerName: string]: (state: T, data?: any) => T;
}
