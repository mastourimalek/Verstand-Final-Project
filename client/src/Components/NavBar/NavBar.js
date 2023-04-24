import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Dropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentAdmin, logoutAdmin } from "../../JS/Actions/admin";
import { current, logout } from "../../JS/Actions/user";
import "./NavBar.css";
import logo from "./VERSTAND.png";
import userico from "./user.png";
import out from "./arrow.png";
const NavBar = ({ inputSearch, setInputSearch }) => {
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);

  return (
    <header>
      <Navbar className="All" collapseOnSelect expand="lg" bg="white" variant="white" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Verstand"
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          {/* First Nav */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="/ProductList">Products</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="mx-2"
                  aria-label="Search"
                  value={inputSearch}
                  onChange={handleChange}
                />
                
              </Form>
            </Nav>
            {/* Second Nav */}
            <Nav>
              {isAuth ? (
                <div className="logout">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        {" "}
                        <img
                          src={userico}
                          height="15px"
                          className="userico"
                          alt="img"
                        />
                        <span className="username">
                        {user && user.name}
                        </span>
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/Profile/${user._id}`)}
                      >
                        Your Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="/ProductList">
                        Our Products
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logout())}
                      >
                        {" "}
                        <img
                          src={out}
                          height="20px"
                          className="userico"
                          alt="img"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : isAuthAdmin && isAdmin ? (
                <div className="logout">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        {" "}
                        <img
                          src={userico}
                          height="15px"
                          className="userico"
                          alt="img"
                        />
                        <span className="username">
                        {admin && admin.name}
                        </span>
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/Profile/${admin._id}`)}
                      >
                        Your Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="/AddProduct">
                        Add Product
                      </Dropdown.Item>
                      <Dropdown.Item href="/OrderList">
                        Your Orders
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="/UserList">Your Users</Dropdown.Item>
                      <Dropdown.Item href="/MessageList">
                        Your Messages
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logoutAdmin())}
                      >
                        {" "}
                        <img
                          src={out}
                          height="20px"
                          className="userico"
                          alt="img"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <Nav>
                  <Nav.Link href="/Login">Login </Nav.Link>
                  <Nav.Link eventKey={2} href="/Register">
                    Register
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
            {/* End Second Nav */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
