import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
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

  const handleOtpChange = (index, value) => {
    // Copy the current array of otpValues
    const newOtpValues = [...otpValues];

    // Update the value of the specified index
    newOtpValues[index] = value;

    // Update the state with the new array
    setOtpValues(newOtpValues);
  };

  useEffect(() => {
    // Extract email parameter from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const emailFromUrl = searchParams.get("email");

    // Use the email parameter as needed
    console.log("Email from EditProfile:", emailFromUrl);

    // Store the email parameter in state
    setEmailParam(emailFromUrl);
  }, []);

  const handleOtpSubmit = async () => {
    try {
      // Extract email parameter from the URL
      const searchParams = new URLSearchParams(window.location.search);
      const emailParam = searchParams.get("email");
  
      // Use the email parameter as needed
      console.log("Verifying OTP for email:", emailParam);
  
      // Send OTP to the user's email
      const sendOtpResponse = await axios.post(SEND_OTP_URL, {
        email: emailParam,
        // Add any other necessary data for sending OTP
      });
  
      if (sendOtpResponse.status === 200) {
        console.log("OTP sent successfully");
  
        // Now you can proceed to handle OTP verification
        const enteredOtp = otpValues.join("");
  
        // Log request details
        console.log("Request payload:", {
          email: emailParam,
          authCode: enteredOtp,
        });
  
        // Verify the entered OTP
        const verifyResponse = await axios.post(VERIFY_OTP_URL, {
          email: emailParam,
          authCode: enteredOtp,
          // Add any other necessary data for OTP verification
        });
  
        // Check the verification response and handle accordingly
        if (verifyResponse.status === 200) {
          // OTP verification successful
          // Redirect to the desired page
          history.push("/");
        } else {
          // Handle OTP verification failure
          console.error("OTP verification failed");
        }
      } else {
        // Handle OTP sending failure
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error handling OTP submission:", error);
    }
  };
  

  // const handleOtpSubmit = async () => {
  //   try {
  //     const enteredOtp = otpValues.join("");
  //     console.log("Entered OTP:", enteredOtp);

  //     const searchParams = new URLSearchParams(window.location.search);
  //     const emailParam = searchParams.get("email");
  //     console.log("Verifying OTP for email:", emailParam);

  //     const verifyResponse = await axios.post(VERIFY_OTP_URL, {
  //       email: emailParam,
  //       authCode: enteredOtp,
  //     });

  //     console.log("Verification Response:", verifyResponse);

  //     if (verifyResponse.status === 200) {
  //       history.push("/dashboard");
  //     } else {
  //       console.error("OTP verification failed");
  //     }
  //   } catch (error) {
  //     console.error("Error handling OTP submission:", error);
  //   }
  // };

  const handleResendCode = async () => {
    try {
      // Send a new OTP to the user's email
      const resendResponse = await axios.post(SEND_OTP_URL, {
        // Add any other necessary data
      });

      if (resendResponse.status === 200) {
        // OTP resent successfully
        console.log("OTP resent successfully");
      } else {
        // Handle OTP resend failure
        console.error("Failed to resend OTP");
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
            <div className="otp-btn-cont">
              <button onClick={handleOtpSubmit} className="otp-btn-text">
                Submit
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
