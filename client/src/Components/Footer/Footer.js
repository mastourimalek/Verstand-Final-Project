import React from "react";
import "./Footer.css";
import facebook from "./facebook.png";
import info from "./info.png";
import product from "./product.png";
import mail from "./gmail.png";
import phone from "./telephone.png";
import adresse from "./navigation.png";

import AddMessage from "../AddMessage/AddMessage";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";

const Footer = () => {
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return (
    <div>
      {isAuthAdmin ? null : <AddMessage />}

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p>Informations</p>

              <div className="ali">
                <img src={info} className="ico" alt="img" />
                <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
              </div>
              <br />
              <div className="ali">
                <img src={product} className="ico" alt="img" />
                <Nav.Link href="/ProductList">Products</Nav.Link>
              </div>
              <br />
              <div>
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  className="path"
                  rel="noreferrer"
                >
                  <img src={facebook} className="ico" alt="img" />
                  Facebook/Verstand
                </a>
              </div>
            </div>
            {/* Column3 */}
            <div className="col">
              <p>ContactUs</p>

              <a href="tel:+216-20450104" className="path">
                <img src={phone} className="ico" alt="img" />
                Tél : (+216) 20450104
              </a>
              <br />
              <a href="mailto: Verstand.Service@gmail.com" className="path">
                <p>
                  <img src={mail} className="ico" alt="img" /> Mail:
                  Verstand.Service@gmail.com
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Ariana/@36.868858,10.1703599,13z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb4e31471bf3:0x65bc5efbce842198!8m2!3d36.8665367!4d10.1647233!16zL20vMGI0Znh0"
                className="path"
                rel="noreferrer"
              >
                <p>
                  <img src={adresse} className="ico" alt="img" />
                  Ariana , Tunisia
                </p>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Verstand | All rights reserved |
              Terms Of Service | Privacy
            </p>
            <p>Coded & Designed by : Malek Mastouri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
