import { combineReducers } from "redux";
import user, { userTypes, IUser } from "./user";
import message, { messageTypes, IMessage } from "./message";
import auth, { authTypes, IAuth } from "./auth";
import groups, { groupsTypes, IGroups } from "./groups";

export const cache = {};

export const types = {
  user: userTypes,
  message: messageTypes,
  auth: authTypes,
  groups: groupsTypes,
};

export interface IRootState {
  user: IUser;
  message: IMessage;
  auth: IAuth;
  groups: IGroups;
}

export default combineReducers({ user, message, auth, groups });
