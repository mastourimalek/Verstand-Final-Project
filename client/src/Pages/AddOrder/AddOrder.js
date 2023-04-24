import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addOrder } from "../../JS/Actions/order";
import { getProduct } from "../../JS/Actions/product";
import "./AddOrder.css";
import cart from "./cart.png";

const AddOrder = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();

  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const [newOrder, setNewOrder] = useState({
    productname: `${productToGet.name}`,
    email: "",
    adress: "",
    phone: "",
  });

  useEffect(() => {
    dispatch(getProduct(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };
  const add = (e) => {
    e.preventDefault();
    dispatch(addOrder(_id, newOrder));
  };

  return (
    <div>
      <h2 id="SEND"> SEND YOUR ORDER NOW </h2>

      <div>
        <Card style={{ width: "16rem" }} className="addorder">
          <Card.Img variant="top" src={productToGet.image} width="20%" />
          <Card.Body>
            <Card.Title>{productToGet.name}</Card.Title>
            <Card.Title>
              {productToGet.price} <span>DT</span>
            </Card.Title>
            <Card.Text>{productToGet.description}</Card.Text>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              value={newOrder.email}
            />
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type="text"
              name="adress"
              onChange={handleChange}
              value={newOrder.adress}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={handleChange}
              value={newOrder.phone}
            />
            <hr />
            <div class="buy" onClick={add}>
              Buy now <img src={cart} className="cart1" alt="img" width="15%" />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddOrder;
