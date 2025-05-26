import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { NavLink } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="container my-5 bg-#f1eff4">
      <div className="heading-container text-center my-5">
        <h4 className="heading-title">Best Collection Arrived</h4>
        <span className="heading-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula.
        </span>
      </div>
      <div className="tab-container">
        <ul className="tabs nav nav-tabs justify-content-center " role="tablist" >
          <li className="nav-item" role="presentation">
            <NavLink
              to="/best-selling"
              className="nav-link active tab"
              role="tab"
            >
              Best Selling
            </NavLink>
          </li>
          <li className="nav-item" role="presentation">
            <NavLink to="/new-arrival" className="nav-link tab" role="tab">
              New Arrival
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
