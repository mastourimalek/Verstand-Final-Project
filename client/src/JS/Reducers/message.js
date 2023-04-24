// IMPORTATION

import {
  CLEAR_SUCCESSMESSAGE,
  FAIL_MESSAGE,
  LOAD_MESSAGE,
  SUCC_MESSAGE,
} from "../ActionType/message";

// INITIAL STATE
const initialState = {
  listMessages: [],
  erros: null,
  load: false,
  success: null,
};

// PURE FUNCTION

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_MESSAGE:
      return { ...state, load: true };
    case SUCC_MESSAGE:
      return {
        ...state,
        load: false,
        listMessages: payload.listMessages,
        success: payload.success,
      };
    case FAIL_MESSAGE:
      return { ...state, load: false, erros: payload };
    case CLEAR_SUCCESSMESSAGE:
      return { ...state, success: null };
    default:
      return state;
  }
};

export default messageReducer;
