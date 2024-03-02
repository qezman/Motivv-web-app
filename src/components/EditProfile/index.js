import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import Footer from "../Footer/index";
import axios from "axios";
import { EDIT_PROFILE_URL, SEND_OTP_URL } from "../../constants";

export default function EditProfile() {
  const history = useHistory();

  // State to manage input values
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the page from reloading.
    try {
      // Make an API request to save data to the database
      await axios.put(EDIT_PROFILE_URL, {
        email: email,
        // phoneNumber: phoneNumber,
      });

      // Call sendOtp to initiate OTP sending
      sendOtp();

      // Redirect to "/verification" after initiating the save
      history.push(`/verification?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("API request error:", error);
      // Handle error scenario for API requests
    }
  };

  // Function to send OTP
  const sendOtp = async () => {
    try {
      // Send OTP to the user's email
      const sendOtpResponse = await axios.post(SEND_OTP_URL, {
        email: email,
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

  return (
    <form onClick={handleSubmit}>
      <Link to="/">
        <div className="header">
          <img className="header-logo" src="/assets/motivv-logo.png" alt="" />
        </div>
      </Link>

      <div>
        <div className="edit-text-cont">
          <p className="edit-header">Edit your Profile</p>
        </div>

        <div style={{ marginTop: "21px" }} className="edit-input-cont">
          <input
            type="text"
            required
            placeholder="Email Address"
            className="edit-text-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: "black" }}
          />
          <p className="email-text">
            Enter the email you used to create your Profile card
          </p>
        </div>

        <div style={{ marginTop: "36px" }} className="edit-input-cont">
          <input
            type="text"
            required
            placeholder="Phone Number"
            className="edit-text-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ color: "black" }}
          />
          <p className="email-text">
            Input the number you used to create your Profile card
          </p>
          <button className="edit-submit-btn">Submit</button>
        </div>
      </div>

      <div className="edit-footer">
        <Footer />
      </div>
    </form>
  );
}
