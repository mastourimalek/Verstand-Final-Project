import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { current, login } from "../../JS/Actions/user";
import { currentAdmin, loginAdmin } from "../../JS/Actions/admin";
import eye from "./eye.png";
import hide from "./hide.png";

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user)) && dispatch(loginAdmin(admin));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="Log">
      <h2 id="loguser"> LOGIN </h2>
      {isAuth ? (
        navigate("/")
      ) : isAuthAdmin ? (
        navigate("/")
      ) : (
        <div className="box">
          <h5>
            <Form.Label>Email Adress</Form.Label>
          </h5>

          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
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
              onChange={handleChange}
            />
          </div>
          <br />
          <Button variant="primary" type="submit" onClick={handleUser}>
            Log In
          </Button>
          <hr />
          <Button
            className="newAcount"
            onClick={() => navigate("/Register")}
          >
            Create new account
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
