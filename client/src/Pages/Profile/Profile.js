import React from "react";
import "./Profile.css";
import {  Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userico from "./user.png";
import edit from "./edit.png";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return (
    <div>
      <h2 id="pro"> PROFILE</h2>
      {isAuth ? (
        <div className="Profile1">
          <Card style={{ width: "16rem" }}>
            <Card.Img src={userico} className="userico" />
            <Card.Body>
              <h5>-Profile-</h5>
              <Card.Text>
                <span className="forms"> First Name : </span>
                {user && user.firstname}
              </Card.Text>
              <Card.Text>
                <span className="forms"> Last name : </span>
                {user && user.name}
              </Card.Text>
              <Card.Text>
                <span className="forms"> E-mail : </span>
                {user && user.email}
              </Card.Text>
              <Card.Text>
                <span className="forms"> Phone : </span>
                {user && user.phone}
              </Card.Text>
              <div className="btn">
                <Link to={`/EditInfos/${user._id}`}>
                  <img src={edit} className="editico" alt="edit" />
                </Link>
                <hr />
                <h5>Password</h5>
                <Link to={`/EditPassword/${user._id}`}>
                  <img src={edit} className="editico" alt="edit" />
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : isAuthAdmin ? (
        <div className="Profile2">
          <Card style={{ width: "16rem" }}>
          <Card.Img src={userico} className="userico" />
            <Card.Body>
            <h5>-ADMIN PROFILE-</h5>
              <Card.Text><span className="forms"> First Name : </span>{admin && admin.firstname}</Card.Text>
              <Card.Text>  <span className="forms"> Last name : </span>{admin && admin.name}</Card.Text>
              <Card.Text><span className="forms"> E-mail : </span>{admin && admin.email}</Card.Text>
              <div className="btn">
                <Link to={`/EditInfos/${admin._id}`}>
                <img src={edit} className="editico" alt="edit" />
                </Link>
                <hr />
                <h5>Password</h5>
                <Link to={`/EditPassword/${admin._id}`}>
                <img src={edit} className="editico" alt="edit" />
                </Link>
              </div>
            </Card.Body>
          </Card>
       
          
        </div>
        
      ) : null}
    </div>
  );
};

export default Profile;
