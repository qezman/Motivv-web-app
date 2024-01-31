import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal";

import "./styles.css";
let Placeholder =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594323732/Motivv/placeholder_i6ami9.png";
let Dots =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594368678/Motivv/dots_gnsfmi.png";
export default function index() {
  return (
    <div className="mot-access-wrapper" id="creatives">
      <Container className="">
        <Row className="justify-content-md-center">
          <Col md={10} className="mot-access-container">
            <Row className="justify-content-md-center">
              <Col md={6} className="mot-user-placeholders">
                <Fade>
                  <h1 className="mot-access-section-header">
                    Gain access to clients in a single click!
                  </h1>
                </Fade>
                <h6
                  className={`pt-3 small-texts black-text mot-access-section-caption ${
                    windowWidth <= 700 ? "d-none" : ""
                  }`}
                >
                  Getting hired for a project gets easy by setting your profile.
                  Input your details and start getting gigs. No login processes,
                  No long story!
                </h6>
                <div className="mot-apply-as-designer">
                  <Link to="/apply">
                    <button type="submit">Apply as a designer</button>
                  </Link>
                </div>
              </Col>
              <Col md={4} className="mot-user-placeholders rm-sd-p">
                <Fade duration={300} delay={1000}>
                  <img
                    src={Placeholder}
                    alt=""
                    className="mot-apply-placeholder"
                  />
                </Fade>
              </Col>
            </Row>
          </Col>
          <Fade bottom delay={700}>
            <img src={Dots} alt="dots" className="mot-dots" />
          </Fade>
        </Row>
      </Container>
    </div>
  );
}
