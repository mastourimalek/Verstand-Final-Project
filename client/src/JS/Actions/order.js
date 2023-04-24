// IMPORTATION

import axios from "axios";
import {
  ADD_ORDER,
  CLEAR_ERRORSORDER,
  CLEAR_SUCCESSORDER,
  FAIL_ORDER,
  GET_ORDERS,
  LOAD_ORDER,
 
} from "../ActionType/order";

// GET ALL ORDERS
export const getOrders = () => async (dispatch) => {
  dispatch({ type: LOAD_ORDER });
  try {
    let result = await axios.get("/api/order/allOrders");
    dispatch({ type: GET_ORDERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ORDER, payload: error.response.data.errors });
  }
};

// ADD ORDER
export const addOrder = (id,newOrder) => async (dispatch) => {
  dispatch({ type: LOAD_ORDER });
  try {
    let result = await axios.post(`/api/order/postOrder/${id}`, newOrder);
    dispatch({ type: ADD_ORDER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ORDER, payload: error.response.data.errors });
  }
};

// DELETE PRODUCT
export const deleteOrder = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ORDER });
  try {
    await axios.delete(`/api/order/${id}`);
    dispatch(getOrders());
  } catch (error) {
    dispatch({ type: FAIL_ORDER, payload: error.response.data.errors });
  }
};

export const clearSuccessOrder = () => {
  return {
    type: CLEAR_SUCCESSORDER,
  };
};

export const clearErrorsOrder = () => {
  return {
    type: CLEAR_ERRORSORDER,
  };
};
