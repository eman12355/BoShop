import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/Action/operationsCard";
import products from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === parseInt(id));

  const addProduct = () => {
    dispatch(addCard(product));
  };

  if (!product) {
    return <h1 className="text-center mt-5">Product not found</h1>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-lg-6 col-md-12 product-detail">
          <h4 className="text-uppercase text-black-50 mb-2">
            {product.isOnSale ? "On Sale" : "Regular Price"}
          </h4>
          <h1>{product.title}</h1>

          <div className="price-block">
            {product.isOnSale ? (
              <>
                <span className="text-muted text-decoration-line-through me-2">
                  ${product.price}
                </span>
                <span>${product.salePrice}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </div>

          <p>{product.description}</p>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
            <button className="btn button" onClick={addProduct}>
              Add to Cart
            </button>
            <NavLink className="btn button" to="/card">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
