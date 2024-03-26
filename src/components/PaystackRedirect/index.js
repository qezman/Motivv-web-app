import React, { useState, useEffect } from "react";
import "./style.css";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

const PaystackRedirect = () => {
  return (
    <section>
      <img className="verify-mot-logo" src="/assets/motivv-logo-blue.png" />
      <div className="redirect-container">
        <p className="redirect-text">
          You are being redirected, please wait... <br/> If you haven't been
          redirected in 30 seconds, please click <span className="here-text">here.</span>
        </p>
      </div>
    </section>
  );
};

export default PaystackRedirect;
