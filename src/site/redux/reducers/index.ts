import { combineReducers } from "redux";
import user, { userTypes, IUser } from "./user";
import message, { messageTypes, IMessage } from "./message";
import auth, { authTypes, IAuth } from "./auth";

export const cache = {};

export const types = {
  user: userTypes,
  message: messageTypes,
  auth: authTypes,
};

export interface IRootState {
  user: IUser;
  message: IMessage;
  auth: IAuth;
}

export default combineReducers({ user, message, auth });
