import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SuccessPage.css";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="container my-5">
        <h3>No order data found.</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container card-box2">
      <div className="text-center mb-5">
        <h2 className="text-success">✅ Order Placed Successfully!</h2>
        <p className="text-muted">Thank you for your purchase, {order.name}.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Customer Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {order.name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {order.email}
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> {order.phone}
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> {order.address}, {order.city} -{" "}
              {order.zip}
            </li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4>Order Summary</h4>
          <ul className="list-group">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>${order.total.toFixed(2)}</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
