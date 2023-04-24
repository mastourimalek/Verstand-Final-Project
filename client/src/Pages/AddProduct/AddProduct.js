import React, { useState } from "react";
import "./AddProduct.css";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../JS/Actions/product";
import SucessNotification from "../../Components/Notification/SucessNotification";

const AddProduct = () => {

  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newProduct.name);
    data.append("description", newProduct.description);
    data.append("price", newProduct.price);
    data.append("image", file);
    dispatch(addProduct(data));
    
  };
  const productsuccess = useSelector((state) => state.productReducer.success);
  const load = useSelector((state) => state.productReducer.load);

  return (
    <div>
      {load ? (
        <h2>loading...</h2>
      ) : (
       
      <div>
      {productsuccess &&
          productsuccess.map((el) => <SucessNotification success={el} />)}
      <h2 id="pro"> ADD PRODUCT</h2>
      <Card style={{ width: "16rem" }} className="addProdCard">
        <p style={{ color: "red" }} >*All fields are mandatory</p>
        <Form>
          <Form.Group>
            
            <Form.Label className="forms">Product Image</Form.Label>
            <Form.Control
              type="file"
              encType="multipart/form-data"
              onChange={handlePhoto}
            />
            <br />
            <Form.Label className="forms">Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="product name"
              name="name"
              onChange={handleChange}
            />
            <br />
            <Form.Label className="forms">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              name="description"
              onChange={handleChange}
            />
            <br />
            <Form.Label className="forms">Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="price"
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <br />
        <div className="space">
          <Button variant="primary" type="submit" onClick={add}>
            ADD PRODUCT
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => navigate(`/ProductList`)}
          >
            Cancel
          </Button>
        </div>
      </Card>
      </div>
      )}
    </div>
  );
};

export default AddProduct;
