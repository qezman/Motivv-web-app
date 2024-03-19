import React, { useState } from "react";
import "./PaymentForm.css";
import PaystackPop from "@paystack/inline-js";

const PaymentForm = ({ onClose, userEmail }) => {
  // Implement the Paystack payment form here
 
  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState(userEmail)

  const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;


  // Example:
  const paywithpaystatck = (e) => {
    e.preventDefault();

    console.log("User email:", userEmail);

    // console.log("Amount in kobo:", Math.ceil(amount * 100));

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: paystackPublicKey,
      amount: amount * 100,
      email: userEmail,
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
