// IMPORTATION

import {
  ADD_ORDER,
  CLEAR_ERRORSORDER,
  CLEAR_SUCCESSORDER,
  FAIL_ORDER,
  GET_ORDERS,
  LOAD_ORDER,
} from "../ActionType/order";

// INITIAL STATE
const initialState = {
  listOrders: [],
  newOrder: {},
  errors: null,
  load: false,
  success: null,
};
// PURE FUNCTION

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ORDER:
      return { ...state, load: true };
    case GET_ORDERS:
      return {
        ...state,
        load: false,
        listOrders: payload.listOrders,
        success: payload.success,
      };
    case ADD_ORDER:
      return {
        ...state,
        load: false,
        newOrder: payload.newOrder,
        success: payload.success,
      };
    case FAIL_ORDER:
      return { ...state, load: false, errors: payload };
    case CLEAR_SUCCESSORDER:
      return { ...state, success: null };
    case CLEAR_ERRORSORDER:
      return { ...state, errors: null };
    default:
      return state;
  }
};

export default orderReducer;
