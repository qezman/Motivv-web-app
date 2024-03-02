import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Helmet from "../Helmet/index";

import { SEND_OTP_URL } from "../../constants";
import { VERIFY_OTP_URL } from "../../constants";
import "./Verification.css";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

export default function Edit() {
  const history = useHistory();
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [emailParam, setEmailParam] = useState("");
  const location = useLocation();
  const [otpSent, setOtpSent] = useState(false);

  const handleOtpChange = (index, value) => {
    // Copy the current array of otpValues
    const newOtpValues = [...otpValues];

    // Update the value of the specified index
    newOtpValues[index] = value;

    // Update the state with the new array
    setOtpValues(newOtpValues);
  };

  const sendOtp = async () => {
    try {
      const sendOtpResponse = await axios.post(SEND_OTP_URL, {
        email: emailParam,
        // Add any other necessary data for sending OTP
      });

      if (sendOtpResponse.status === 200) {
        console.log("OTP sent successfully");
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  useEffect(() => {
    // Extract email parameter from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const emailFromUrl = searchParams.get("email");

    // Use the email parameter as needed
    console.log("Email from EditProfile:", emailFromUrl);

    // Store the email parameter in state
    setEmailParam(emailFromUrl);

    // Check if email is not empty before sending OTP
    if (emailFromUrl) {
      // Simulate sending OTP immediately after loading
      sendOtp();
    } else {
      console.error("Email is empty. Cannot send OTP.");
    }
  }, []);

  const handleOtpSubmit = async () => {
    try {
      const enteredOtp = otpValues.join("");
      console.log("Entered OTP:", enteredOtp);

      const verifyResponse = await axios.post(VERIFY_OTP_URL, {
        email: emailParam,
        authCode: enteredOtp,
        // Add any other necessary data for OTP verification
      });

      console.log("Verification Response:", verifyResponse);

      if (verifyResponse.status === 200) {
        // Redirect to the desired page after successful OTP verification
        history.push("/");
      } else {
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error handling OTP submission:", error);
    }
  };

  const handleResendCode = async () => {
    try {
      // Check if emailParam is not empty
      if (emailParam) {
        // Send a new OTP to the user's email
        const resendResponse = await axios.post(SEND_OTP_URL, {
          email: emailParam,
          // Add any other necessary data
        });

        if (resendResponse.status === 200) {
          // OTP resent successfully
          console.log("OTP resent successfully");
        } else {
          // Handle OTP resend failure
          console.error("Failed to resend OTP");
        }
      } else {
        // Handle the case where emailParam is empty
        console.error("Email is required for resending OTP");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

  return (
    <>
      <div>
        <img className="verify-mot-logo" src="/assets/motivv-logo-blue.png" />
        <article className="otp-container">
          <h1 className="verify-email">Verify your email</h1>
          <div className="left-margin">
            <p className="otp-bottom-text">
              An OTP has been sent to <strong>“{emailParam}”</strong> Input the
              code to login to your account
            </p>

            <div className="otp-input-cont">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="0"
                  value={value}
                  required
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength="1"
                  className="otp-input"
                />
              ))}
            </div>
            {/* <div className="otp-btn-cont">
              <button onClick={handleOtpSubmit} className="otp-btn-text">
                Submit
              </button>
            </div> */}

            <div className="otp-btn-cont">
              <button
                onClick={handleOtpSubmit}
                className={`otp-btn-text ${otpSent ? "otp-sent" : ""}`}
                disabled={otpSent} // Disable button after OTP is sent
              >
                {otpSent ? "OTP Sent" : "Submit"}
              </button>
            </div>

            <p className="cannot-find-text">
              Can't find the code?{" "}
              <span className="resend-text" onClick={handleResendCode}>
                Resend Code
              </span>
            </p>
          </div>
        </article>

        {/* <Footer /> */}
      </div>
    </>
  );
}
