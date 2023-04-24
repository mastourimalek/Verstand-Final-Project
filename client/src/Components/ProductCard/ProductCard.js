import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import cart from "./cart.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../JS/Actions/product";

const ProductCard = ({ product }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <div>
      <Card style={{ width: "16rem", height: "30rem" }} className="prodCard">
        <Card.Img
          style={{ width: "14rem", height: "11rem" }}
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="txt">{product.description}</Card.Text>
          <div className="toBut">
            <Card.Title>
              {product.price} <span>DT</span>
            </Card.Title>

            {isAuthAdmin ? null : (
            <Nav.Link >
            <div
              className="buy"
              onClick={isAuth? (() => navigate(`/AddOrder/${product._id}`)):()=>navigate('/Login')}
            >
              Buy now <img src={cart} width="15%" alt="img" />
            </div>
            </Nav.Link>
           )}
        
            
          <div className="editDelet">
            {isAuthAdmin && isAdmin ? (
              <>
                <div>             
                  <Button
                    id="butt1"
                    onClick={() => navigate(`/EditProduct/${product._id}`)}
                  >
                    Edit
                  </Button>
                 
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteProduct(product._id))}
                  >
                    Delete
                  </Button>
                </div>
              </>
              
            ) : null}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
