import React, { useEffect, useState } from "react";
import "./EditProduct.css";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../../JS/Actions/product";

const EditProduct = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({});
  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getProduct(`${_id}`));
  });

  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  const navigate = useNavigate();

  const edit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newProduct.name);
    data.append("description", newProduct.description);
    data.append("price", newProduct.price);
    data.append("image", file);
    dispatch(editProduct(_id, data));
  
  };

  return (
    <div className="v1">
      <h2 id="pro">EDIT PRODUCT</h2>
      <Card style={{ width: "16rem" }} className="edit">
        <Form>
          <p style={{ color: "red" }}>*All fields are mandatory</p>
          <Form.Group>
            <Form.Label className="forms">Product Image</Form.Label>
            <Form.Control
              type="file"
              encType="multipart/form-data"
              onChange={handlePhoto}
            />
            <Form.Label className="forms">Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={`${productToGet.name}`}
              name="name"
              onChange={handleChange}
            />
            <Form.Label className="forms">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder={`${productToGet.description}`}
              name="description"
              onChange={handleChange}
            />
            <Form.Label className="forms">Price</Form.Label>
            <Form.Control
              type="text"
              placeholder={`${productToGet.price}`}
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <br />
        <div className="space">
          <Button variant="primary" type="submit" onClick={edit}>
            EDIT PRODUCT
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
  );
};

export default EditProduct;
