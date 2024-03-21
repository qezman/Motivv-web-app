import React, { useState } from "react";
import "./PaymentForm.css";
import PaystackPop from "@paystack/inline-js";
import CustomNotification from "./CustomNotification";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4

const PaymentForm = ({ onClose }) => {
  // const paystackKey = process.env.REACT_APP_PAYSTACK_API_KEY;
  const paystackKey = "pk_live_5544e0bbc8f95747108ca1a057c4227a65c8725a";
  // const paystackKey = "pk_test_75b9d59119c4d1d83a0c8fcfb53a386cd6c03ed9"

  // State variable to hold the transaction ID
  const [transactionId, setTransactionId] = useState(null);

  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState("holaryinka5050@gmail.com");
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

    const transactionId = uuidv4(); // Generate a UUID as transaction ID
    console.log("Generated UUID:", transactionId);

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: paystackKey,
      amount: amount * 10,
      email: email,
      onSuccess(transaction) {
        localStorage.setItem("transactionId", transactionId); // Save transaction ID to localStorage
        setTransactionId(transactionId); // Set transaction ID state
        let message = `Payment Complete Reference ${transaction.reference}`;
        alert(message);

        // Send transaction ID and other payment data to backend API
        sendPaymentDataToBackend({
          transactionId: transactionId,
          // Include other payment-related data here
        });
      },
      onCancel() {
        handleShowModal();
      },
    });
  };

  const sendPaymentDataToBackend = (data) => {
    // Send payment data to backend
    console.log("Sending payment data to backend:", data);
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

      {/* modal on submission */}
      <CustomNotification showModal={showModal} onClose={handleCloseModal} />
    </section>
  );
};

export default PaymentForm;
