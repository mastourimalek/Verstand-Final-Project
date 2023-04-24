import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editAdminInfos, getAdmin } from "../../JS/Actions/admin";
import { editUserInfos, getUser } from "../../JS/Actions/user";

const EditInfos = () => {
  const { _id } = useParams();

  const [newAdmin, setNewAdmin] = useState({});
  const [newUser, setNewUser] = useState({});

  const adminToGet = useSelector((state) => state.adminReducer.adminToGet);
  const userToGet = useSelector((state) => state.userReducer.userToGet);
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
    dispatch(editAdminInfos(_id, newAdmin));
  };
  const editUser = () => {
    dispatch(editUserInfos(_id, newUser));
  };
  return (
    <div>
      <h2 id="pro"> ACCOUNT SETTINGS</h2>
      {isAuth ? (
        <div className="EditProfile">
          <Card style={{ width: "16rem" }} className="editCard">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <br />
                <h5>First Name</h5>
                <Form.Control
                  type="text"
                  placeholder={`${userToGet.firstname}`}
                  name="firstname"
                  value={newUser.firstname}
                  onChange={handleChangeUser}
                />
                <br />
                <h5>Last Name</h5>
                <Form.Control
                  type="text"
                  placeholder={`${userToGet.name}`}
                  name="name"
                  value={newUser.name}
                  onChange={handleChangeUser}
                />
                <br />
                <h5>E-mail</h5>
                <Form.Control
                  type="email"
                  placeholder={`${userToGet.email}`}
                  name="email"
                  value={newUser.email}
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
                <h5>First Name</h5>
                <Form.Control
                  type="text"
                  placeholder={`${adminToGet.firstname}`}
                  name="firstname"
                  value={newAdmin.firstname}
                  onChange={handleChangeAdmin}
                />
                <br />
                <h5>Last Name</h5>
                <Form.Control
                  type="text"
                  placeholder={`${adminToGet.name}`}
                  name="name"
                  value={newAdmin.name}
                  onChange={handleChangeAdmin}
                />
                <br />
                <h5>E-mail</h5>
                <Form.Control
                  type="email"
                  placeholder={`${adminToGet.email}`}
                  name="email"
                  value={newAdmin.email}
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

export default EditInfos;
