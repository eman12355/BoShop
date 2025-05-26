import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCard,
  delCard,
  updateQuantity,
} from "../redux/Action/operationsCard";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./CardPage.css";
import Banner from "../components/Banner";

const CardPage = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.HandleCard);
  const dispatch = useDispatch();

  const cartItems = cart.cartItems;

  const handleAdd = (product) => dispatch(addCard(product));
  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      dispatch(updateQuantity(product.id, product.quantity - 1));
    }
  };
  const handleRemove = (productId) => dispatch(delCard(productId));

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.salePrice || item.price) * item.quantity,
    0
  );

  return (
    <>
      <Banner title="Shopping Card" subtitle="Home / Card" />

      <div className="container card-box">
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty.</div>
        ) : (
          <>
            <div className="cart-header fw-bold text-center py-3 d-none d-md-flex">
              <div className="flex-2">Items</div>
              <div className="flex-1">Price</div>
              <div className="flex-1">Qty</div>
              <div className="flex-1">Total</div>
              <div className="flex-1">Remove</div>
            </div>

            {cartItems.map((product) => (
              <div className="cart-item" key={product.id}>
                <div className="flex-2 d-flex align-items-center gap-3 text-start">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="cart-img"
                  />
                  <div>
                    <h5>{product.title}</h5>
                    <p className="text-muted small mb-0">
                      {product.description?.slice(0, 40) || "No description"}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  ${product.salePrice || product.price}
                </div>

                <div className="flex-1 d-flex justify-content-center align-items-center">
                  <button
                    className="qty-btn"
                    onClick={() => handleDecrease(product)}
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleAdd(product)}
                  >
                    +
                  </button>
                </div>

                <div className="flex-1">
                  ${(product.salePrice || product.price) * product.quantity}
                </div>

                <div className="flex-1">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(product.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}

            <div className="text-end mt-4 fw-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>

            <div className="text-end">
              <button
                className="checkout-btn btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CardPage;
