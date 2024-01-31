import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col, Container } from "react-bootstrap";
import "./main.css";
import Fade from "react-reveal/Fade";

export const DesignChallengeAdvertise = () => {
  return (
    <Fade>
      <Container className="mot-designChallenge-section mot-dsc-advertise">
        <Row className="mot-dsc-advertise-contents justify-content-center position-relative">
          <Col md={11} className="d-flex align-items-center flex-column">
            <span className="challenge-label green mb-2 d-block">Coming Soon</span>
            <h3 className="my-4">
              Fast track your Self-taught Design Career With Our
              <br /> Complete 4-year University-feel Curriculum!{" "}
            </h3>
            <p>
              Become a professional designer by taking the standard 4-year Design Course{" "}
            </p>
            <Link to="/school">
              <button className="advertise-coming-btn mt-2">
                <span className="font-weight-bold">Learn More</span>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};
