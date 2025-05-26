import React from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/Action/operationsCard";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCard(product));
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="position-relative product-image-container">
          <img
            src={product.image}
            className="card-img-top product-card"
            alt={product.title}
          />
          {product.isOnSale && (
            <span className="badge bg-warning position-absolute top-0 start-0 m-2">
              Sale
            </span>
          )}
          <div className="product-overlay d-flex flex-column justify-content-between align-items-center">
            <Link
              to={`/products/${product.id}`}
              className="btn btn1 btn-dark rounded-circle mb-2"
            >
              <i className="bi bi-eye text-light"></i>
            </Link>
            <button
              className="btn btn2 btn-outline-light w-100 mx-2"
              onClick={handleAddToCart}
            >
              <i className="bi bi-cart3 me-2"></i> Add to Cart
            </button>
          </div>
        </div>

        <div className="card-body text-center">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text text-muted mb-1">
            {product.salePrice ? (
              <>
                <del>${product.price.toFixed(2)}</del>{" "}
                <strong className="text-dark">
                  ${product.salePrice.toFixed(2)}
                </strong>
              </>
            ) : (
              <strong className="text-dark">${product.price.toFixed(2)}</strong>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
