import React, { useState } from "react";
import "./Contact.css";
import Banner from "../components/Banner";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);

  const validatePhone = (phone) => /^\+?[0-9]{7,15}$/.test(phone);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = form;

    if (!name || !email || !phone || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    setSuccess("Your message has been sent successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <Banner title="Contact Us" subtitle="Home / Contact" />

      <section className="contact-section">
        <h4>Keep in Touch With Us</h4>
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone *"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message *"
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {error && <p className="text-danger text-center">{error}</p>}
              {success && <p className="text-success text-center">{success}</p>}

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="address-box">
              <h6>Our Address</h6>
              <p>
                <FaMapMarkerAlt />
                Street No. 12, New York, USA
              </p>
              <p>
                <FaPhoneAlt />
                +1 123 456 789
              </p>
              <p>
                <FaEnvelope />
                support@boshopexample.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
