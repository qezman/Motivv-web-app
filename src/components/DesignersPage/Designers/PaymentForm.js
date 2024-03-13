import React, { useState } from "react";
import "./PaymentForm.css";
import PaystackPop from "@paystack/inline-js";

const PaymentForm = ({ onClose }) => {
  // Implement the Paystack payment form here

  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState("email@example.com")

  // Example:
  const paywithpaystatck = (e) => {
    e.preventDefault();

    // console.log("Amount in kobo:", Math.ceil(amount * 100));

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_75b9d59119c4d1d83a0c8fcfb53a386cd6c03ed9",
      amount: amount * 100,
      email: email,
      onSuccess(transaction) {
        let message = `Payment Complete Reference ${transaction.reference}`;
        alert(message);
      },
      onCancel() {
        alert("You have canceled the transaction");
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
    </section>
  );
};

export default PaymentForm;
