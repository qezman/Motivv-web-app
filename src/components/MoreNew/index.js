import React from "react";
import "./style.css";
import Fade from "react-reveal"

const MoreNew = () => {
  return (
    <section className="aorthar-cont">
      <Fade bottom delay={1000} duration={1000}>
        <p className="aorthar-text">
          Our creator, Aorthar, is a full-service design agency. We have work
          brands to communicate their unique value proposition to target
          audiences in a perfectly relatable and compelling manner in branding,
          software development, user experience design and content developement.
        </p>
      </Fade>
      <button className="btn-find-out">Find out more</button>
    </section>
  );
};
export default MoreNew;
