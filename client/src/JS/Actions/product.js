// IMPORTATION

import axios from "axios";

import {
  ADD_PRODUCT,
  CLEAR_SUCCESSPRODUCT,
  EDIT_PRODUCT,
  FAIL_PRODUCT,
  GET_PRODUCTS,
  LOAD_PRODUCT,
  ONE_PRODUCT,
} from "../ActionType/product";

// GET ALL PRODUCT
export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get("/api/product/getAll");
    dispatch({ type: GET_PRODUCTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
  }
};

// ADD PRODUCT
export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.post("/api/product/add", newProduct);
    dispatch({ type: ADD_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
  }
};

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    await axios.delete(`/api/product/${id}`);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// EDIT  PRODUCT
export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    let result = await axios.put(`/api/product/${id}`, newProduct);
    dispatch({ type: EDIT_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
  }
};

// GET ONE PRODUCT
export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(`/api/product/${id}`);
    dispatch({ type: ONE_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

export const clearSuccessProduct = () => {
  return {
    type: CLEAR_SUCCESSPRODUCT,
  };
};
