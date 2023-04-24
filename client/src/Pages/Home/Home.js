import React from "react";

import ProductList from "../../Pages/ProductList/ProductList";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";

const Home = ({ filtredProducts }) => {
  return (
    <div>
      <AboutUs/>
    
      <ProductList filtredProducts={filtredProducts}  />
      
      <ContactUs/>
    </div>
  );
};

export default Home;
