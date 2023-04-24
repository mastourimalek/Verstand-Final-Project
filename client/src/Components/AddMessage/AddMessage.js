import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMessage } from "../../JS/Actions/message";
import "./AddMessage.css";
import send from "./paper-plane.png";

const AddMessage = () => {
  const [newMessage, setNewMessage] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const add = () => {
    dispatch(addMessage(newMessage));
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      <div className="container543">
        <Form>
          <h2 style={{ color: "white" }}>CONTACT US</h2>
          <div className="containers">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="containers1">
                <div>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  <Form.Control
                    type="email"
                    placeholder="Mail"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="containers2">
                <Form.Control
                  as="textarea"
                  rows={9}
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                />
                </div>
              </Form.Group>
            
          </div>
        </Form>
        <Button className="v33" variant="light" onClick={add}>
          <span className="v3">
            SEND YOUR MESSAGE <img src={send} className="send" alt="send" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AddMessage;
