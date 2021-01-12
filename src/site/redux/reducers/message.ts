import { IAction, IReducers } from "../types";

export interface IMessage {
  message: string;
}

const initialState: IMessage = {
  message: null,
};

export const messageTypes = {
  MESSAGE_SET_MESSAGE: "setMessage",
  MESSAGE_RESET_MESSAGE: "resetMessage",
};

/**
 * MESSAGE REDUCERS - START
 */

const setMessage = (state, { message }) => ({
  ...state,
  message,
});

const resetMessage = () => initialState;

/**
 * MESSAGE REDUCERS - END
 */

const reducers: IReducers<IMessage> = {
  setMessage,
  resetMessage,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
