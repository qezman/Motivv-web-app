import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import "./styles.css";

let Placeholder =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594323732/Motivv/placeholder_i6ami9.png";
let Dots =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594368678/Motivv/dots_gnsfmi.png";

export default function Index() {
  return (
    <article className="mot-background-cont">
      <section className="mot-section">
        <article className="mot-left-cont">
          <Fade bottom delay={1000} duration={1000}>
            <h1 className="header-text">
              Gain access to clients <br /> in a single click!
            </h1>
          </Fade>
          <p className="sub-text">
            Getting hired for project gets easy by setting up your profile.
            Input your details and start getting gigs. No login processes, No
            long story!
          </p>
          {/* <div className="apply-btn"> */}
          <Link to="/newapply">
            <button className="app-btn">Apply as a designer</button>
          </Link>
          {/* </div> */}
        </article>

        <section className="placeholder-and-dot">
          <article className="img-place-cont">
            <img
              className="image-placeholder"
              src={Placeholder}
              alt="placeholder"
            />
          </article>

          <article className="dot-cont">
            <img src={Dots} className="dots-image" alt="dots" />
          </article>
        </section>
      </section>
    </article>
  );
}
