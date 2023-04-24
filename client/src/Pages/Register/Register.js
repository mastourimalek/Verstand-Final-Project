import React, {  useState } from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {  register } from "../../JS/Actions/user";
import eye from "./eye.png";
import hide from "./hide.png";

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="signup">
      <h2 id="signupUser">Sign Up</h2>
      {isAuth ? (
        navigate("/")
      ) : (
        <div className="box">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>
                <Form.Label>Phone</Form.Label>
              </h5>
              <Form.Control
                type="text"
                placeholder="Enter your phone"
                name="phone"
                value={newUser.phone}
                onChange={handleChange}
              />
              <br />
              <h5>
                <Form.Label>First Name</Form.Label>
              </h5>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                value={newUser.firstname}
                onChange={handleChange}
              />
              <br />
              <h5>
                <Form.Label>Last Name</Form.Label>
              </h5>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
              />
              <br />
              <h5>
                <Form.Label>Email address</Form.Label>
              </h5>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
              />
              <p>We will never share your email with anyone else.</p>

              <h5>
                <Form.Label>Password</Form.Label>
              </h5>
              <div>
                {passwordShown ? (
                  <img
                    src={hide}
                    onClick={togglePassword}
                    className="eye"
                    alt="show"
                  />
                ) : (
                  <img
                    src={eye}
                    onClick={togglePassword}
                    className="eye"
                    alt="hide"
                  />
                )}
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            
              <Button variant="primary" type="submit" onClick={handleUser}>
                Create account
              </Button>
            
          </Form>
        </div>
      )}
    </div>
  );
};

export default Register;
