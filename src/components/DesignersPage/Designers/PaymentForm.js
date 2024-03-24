import React, { useState, useEffect } from "react";
import "./PaymentForm.css";
import PaystackPop from "@paystack/inline-js";
import CustomNotification from "./CustomNotification";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4
import { useLocation } from "react-router-dom";

const PaymentForm = ({ onClose, userEmail }) => {
  const location = useLocation();
  const emailFromLocation = location.state && location.state.email;
  // const paystackKey = process.env.REACT_APP_PAYSTACK_API_KEY;
  const paystackKey = "pk_live_5544e0bbc8f95747108ca1a057c4227a65c8725a";
  // const paystackKey = "pk_test_75b9d59119c4d1d83a0c8fcfb53a386cd6c03ed9";

  // State variable to hold the transaction ID
  const [transactionId, setTransactionId] = useState(null);

  const [amount, setAmount] = useState(1000);
  // const [email, setEmail] = useState("holaryinka5050@gmail.com");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const paywithpaystatck = (e) => {
    e.preventDefault();
    console.log("Paystack API Key:", paystackKey);

    const transactionId = uuidv4();
    console.log("Generated UUID:", transactionId);

    const selectedEmail = emailFromLocation;

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: paystackKey,
      amount: amount,
      email: selectedEmail,
      onSuccess(transaction) {
        localStorage.setItem("transactionId", transactionId);
        setTransactionId(transactionId); // Set transaction ID state
        let message = `Payment Complete Reference ${transaction.reference}`;
        alert(message);

        // Determine payment status
        const paymentSuccessful = true;

        // Send transaction ID and other payment data to backend API
        sendPaymentDataToBackend({
          transactionId: transactionId,
          email: selectedEmail,
          paymentSuccessful: paymentSuccessful,
          // Include other payment-related data here
        });
      },
      onCancel() {
        handleShowModal();

        // Determine payment status
        const paymentSuccessful = false; // Set this to false for cancelled payments

        // Send transaction ID, email, and payment status to backend API
        sendPaymentDataToBackend({
          transactionId: transactionId,
          email: selectedEmail,
          paymentSuccessful: paymentSuccessful,
          // Include other payment-related data here
        });
      },
    });
  };

  const sendPaymentDataToBackend = (data) => {
    // Send payment data to backend
    console.log("Sending payment data to backend:", data);

    // Check if userEmail is not empty, indicating a successful user
    if (data.userEmail) {
      // Send data of successful user to backend
      console.log("Sending data of successful user to backend:", data);
    } else {
      // Send data of unsuccessful user to backend
      console.log("Sending data of unsuccessful user to backend:", data);
    }
  };

  return (
    <section className="paymentform-section">
      <article>
        <p className="upgrade-text">Upgrade to pro for full access</p>
        <p className="unlock-text">
          Unlock profiles for one-time profile view and hire creatives.
        </p>
      </article>
      <article className="payment-btns">
        <button className="paid-btn">I have paid</button>
        {/* Paystack form and UI elements */}

        <button type="submit" onClick={paywithpaystatck} className="unlock-btn">
          Unlock for NGN 1,000
        </button>
      </article>
    </section>
  );
};

export default PaymentForm;
