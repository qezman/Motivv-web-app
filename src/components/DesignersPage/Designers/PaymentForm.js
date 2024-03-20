import React, { useState } from "react";
import "./PaymentForm.css";
import PaystackPop from "@paystack/inline-js";
import CustomNotification from "./CustomNotification";

const PaymentForm = ({ onClose }) => {
  // Implement the Paystack payment form here
  // const paystackKey = process.env.REACT_APP_PAYSTACK_API_KEY;
  const paystackKey = "pk_live_5544e0bbc8f95747108ca1a057c4227a65c8725a"

  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState("holaryinka5050@gmail.com")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Example:
  const paywithpaystatck = (e) => {
    e.preventDefault();
    console.log("Paystack API Key:", paystackKey);


    // console.log("Amount in kobo:", Math.ceil(amount * 100));

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: paystackKey,
      amount: amount * 100,
      email: email,
      onSuccess(transaction) {
        let message = `Payment Complete Reference ${transaction.reference}`;
        alert(message);
      },
      onCancel() {
        handleShowModal()
      },
    });
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
        <CustomNotification
          showModal={showModal}
          onClose={handleCloseModal}
        />
    </section>
  );
};

export default PaymentForm;