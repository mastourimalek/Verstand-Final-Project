import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getProducts } from "../../JS/Actions/product";

import "./ProductList.css";

const ProductList = ({ filtredProducts }) => {
  
  const dispatch = useDispatch();
  const load = useSelector((state) => state.productReducer.load);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h2 id="prod" >OUR PRODUCTS </h2>
    <div className="alignthem">
      {load ? (
        <h2>loading...</h2>
      ) : (
        filtredProducts
          .map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
    </div>
  );
};

export default ProductList;
