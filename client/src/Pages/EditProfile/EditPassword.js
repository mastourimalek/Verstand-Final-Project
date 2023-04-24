import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editAdminPassword, getAdmin } from "../../JS/Actions/admin";
import { editUserPassword, getUser } from "../../JS/Actions/user";

const EditPassword = () => {
  const { _id } = useParams();

  const [newAdmin, setNewAdmin] = useState({});
  const [newUser, setNewUser] = useState({});
  const user = useSelector((state) => state.userReducer.user);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const dispatch = useDispatch();
  const handleChangeAdmin = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  const handleChangeUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthAdmin) {
      dispatch(getAdmin(`${_id}`));
    }
  });

  useEffect(() => {
    if (isAuth) {
      dispatch(getUser(`${_id}`));
    }
  });

  const editAdmin = () => {
    dispatch(editAdminPassword(_id, newAdmin));
  };
  const editUser = () => {
    dispatch(editUserPassword(_id, newUser));
  };
  return (
    <div>
      <h2 id="pro"> PASSWORD SETTINGS</h2>
      {isAuth ? (
        <div className="EditProfile">
          <Card style={{ width: "16rem" }} className="editCard">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <br />
                <h5>Old Password</h5>
                <Form.Control
                  type="text"
                  placeholder="Old Password"
                  name="oldPassword"
                  value={newUser.oldPassword}
                  onChange={handleChangeUser}
                />
                <br />
                <h5>New Password</h5>
                <Form.Control
                  type="text"
                  placeholder="New Password"
                  name="password"
                  value={newUser.password}
                  onChange={handleChangeUser}
                />
              </Form.Group>
              <div className="space">
                <Link to={`/Profile/${user._id}`}>
                  <Button variant="primary" type="submit" onClick={editUser}>
                    Update
                  </Button>
                </Link>
                <Link to={`/Profile/${user._id}`}>
                  <Button variant="primary" type="submit">
                    Cancel
                  </Button>
                </Link>
              </div>
            </Form>
          </Card>
        </div>
      ) : isAuthAdmin ? (
        <div className="EditProfile">
          <Card style={{ width: "16rem" }} className="editCard">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <br />
                <h5>Old Password</h5>
                <Form.Control
                  type="text"
                  placeholder="Old Password"
                  name="oldPassword"
                  value={newAdmin.oldPassword}
                  onChange={handleChangeAdmin}
                />
                <br />
                <h5>New Password</h5>
                <Form.Control
                  type="text"
                  placeholder="New Password"
                  name="password"
                  value={newAdmin.password}
                  onChange={handleChangeAdmin}
                />
              </Form.Group>
              <div className="space">
                <Link to={`/Profile/${admin._id}`}>
                  <Button variant="primary" type="submit" onClick={editAdmin}>
                    Update
                  </Button>
                </Link>
                <Link to={`/Profile/${admin._id}`}>
                  <Button variant="primary" type="submit">
                    Cancel
                  </Button>
                </Link>
              </div>
            </Form>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default EditPassword;
