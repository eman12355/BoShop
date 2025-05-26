import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/Action/operationsCard";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.HandleCard.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();

    // Basic validation
    for (let key in form) {
      if (!form[key]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    setError("");
    const orderDetails = {
      ...form,
      items: cartItems,
      total: totalAmount,
    };

    dispatch(clearCart());
    navigate("/success", { state: { order: orderDetails } });
  };

  return (
    <div className="checkout-page">
      <Banner title="Checkout your order" subtitle="Home / Card / Checkout" />

      <div className="container card-box1">
        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">Your cart is empty.</p>
        ) : (
          <form onSubmit={handleCheckout}>
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4">
                <h4 className="section-title">Billing Information</h4>

                <div className="form-group mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="03XXXXXXXXX"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Street address"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="City"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Postal code"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 mb-4">
                <h4 className="section-title">Payment Information</h4>

                <div className="form-group mb-3">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="MM/YY"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="123"
                  />
                </div>

                <h5 className="mt-4">Cart Summary</h5>
                <ul className="list-group mb-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <div>
                        {item.title} x {item.quantity}
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>${totalAmount.toFixed(2)}</strong>
                  </li>
                </ul>

                {error && <p className="text-danger">{error}</p>}

                <button type="submit" className="btn confirmorder-btn">
                  Confirm Order
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
