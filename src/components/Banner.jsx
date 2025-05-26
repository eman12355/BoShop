import React from "react";
import slider4 from "../Images/slider-banner.avif";
import "./Banner.css";

const Banner = ({ title, subtitle }) => {
  return (
    <>
      <div
        className="cart-banner d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${slider4})`,
        }}
      >
        <div className="position-relative z-1">
          <h2 className="fw-bold display-6">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
