import React from "react";
import { Carousel } from "react-bootstrap";
import slide from "../Images/slider1.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 slide-image"
          src={slide}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption custom-caption">
          <span className="price">
            <small>
              <sup>$</sup>
            </small>
            2999.99
          </span>
          <h4 className="para">The Latest Winter Products for 2024</h4>
          <h1 className="para2">Look hot with 2024 style</h1>
          <button className="btn shop-btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
