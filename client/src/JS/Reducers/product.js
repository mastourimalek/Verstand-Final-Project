// IMPORTATION

import {
  ADD_PRODUCT,
  CLEAR_SUCCESSPRODUCT,
  EDIT_PRODUCT,
  FAIL_PRODUCT,
  GET_PRODUCTS,
  LOAD_PRODUCT,
  ONE_PRODUCT,
} from "../ActionType/product";

// INITIAL STATE
const initialState = {
  listProducts: [],
  errors: null,
  load: false,
  productToGet: {},
  success: null,
};
// PURE FUNCTION

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return { ...state, load: true };
    case GET_PRODUCTS:
      return {
        ...state,
        load: false,
        listProducts: payload.listProducts,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        load: false,
        newProduct: payload.newProduct,
        success: payload.success,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        load: false,
        newProduct: payload.newProduct,
        success: payload.success,
      };
    case ONE_PRODUCT:
      return {
        ...state,
        productToGet: payload.productToGet,
        load: false,
      };
    case FAIL_PRODUCT:
      return { ...state, load: false, errors: payload };
    case CLEAR_SUCCESSPRODUCT:
      return { ...state, success: null };
    default:
      return state;
  }
};

export default productReducer;
