import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { ImageBottomOverlay } from "./ImageBottomOverlay";
import { ReactComponent as ArrowHead } from "../../assets/arrow-head.svg";
import { ValidateEmail } from "../../constants";
import axios from "axios";
import { URL } from "../../constants";
import "./ComingSoon.css";

const url = `${URL}/processWaitList.php/`;
export const ComingSoonForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if (!email) {
      setError(true);
      setErrorValue("Please fill the email field");
    } else if (!ValidateEmail(email)) {
      setError(true);
      setErrorValue("You have entered an invalid email address!");
    } else {
      setLoading(true);
      await axios.post(url, { email }).then((res) => {
        setLoading(false);
        if (res.data.success === 1) {
          // setError(false);
          setSuccess(true);
          setErrorValue(res.data.msg);
          setEmail("");
        } else {
          setError(true);
          setErrorValue(res.data.msg);
        }
      });
    }
  };
  return (
    <div className="coming-soon--form">
      <p className="text-orange">
        be the first to know when this website is live
      </p>
      <Form.Group
        className="mb-0 w-50 coming-soon--formGroup"
        controlId="formBasicEmail"
      >
        <Form.Control
          type="email"
          className="mot-dsc-coming__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </Form.Group>
      <button
        style={{
          opactiy: loading ? "0.7" : "1",
          cursor: loading ? "not-allowed" : "pointer",
        }}
        onClick={handleSubmit}
        className="coming-soon_btn form-subscribe"
        type="submit"
      >
        Subscribe
        <ArrowHead className="coming-soon_svg" />
      </button>
      {(error || success) && (
        <div
          style={{ zIndex: 112 }}
          className="position-relative w-100 d-flex justify-content-center"
        >
          <div className="mt-2 position-absolute">
            <Alert variant={success ? "success" : "danger"}>{errorValue}</Alert>
          </div>
        </div>
      )}
      <ImageBottomOverlay />
    </div>
  );
};
