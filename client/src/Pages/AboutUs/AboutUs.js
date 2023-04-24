import React from "react";
import "./AboutUs.css";
import VERS from "./VERS.png";
import carous1 from "./carous1.jpg";
import carous2 from "./carous2.jpg";
import carous3 from "./carous3.jpg";
import { Carousel } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="All">
      <div>
        <img
          className="logo"
          src={VERS}
          alt="Verstand"
          width="70"
          height="70"
        />
        <h1 id="welcome">WELCOME TO VERSTAND BOOKSTORE LIBRARY </h1>
      </div>
      <div className="carouselle">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carous1} alt="First slide" />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carous2} alt="Second slide" />

            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carous3} alt="Third slide" />

            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h2 id="welcome">WHO WE ARE </h2>
        <div className="parag">
          <div className="p1">
          <p>
            Welcome to our online bookstore! We offer a vast selection of books
            and reading-related products. Shop with us for high-quality products
            and exceptional customer service. Explore our collection of books
            and access our online library for free resources. Happy reading!
            <br />
            We take pride in providing high-quality products . Our user-friendly
            website allows you to easily browse and purchase books from the
            comfort of your own home.
          </p>
          </div>
          <div className="p2">
          <p>
            In addition to our bookstore, we are also committed to promoting
            literacy and education through our library. Our online library
            provides free access to a range of resources, including e-books,
            audiobooks, and more.
            <br />
            Whether you're a casual reader or a book enthusiast, we are your
            one-stop-shop for all things reading. Shop with us today and explore
            our collection of books and reading-related products!
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
