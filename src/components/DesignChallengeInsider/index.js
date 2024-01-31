import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as LotsMore } from "../../assets/lots-more.svg";
import "./main.css";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import HeroInsider from "./HeroInsider";

export const DesignChallengeInsider = () => {
  return (
    <Container className="mot-designChallenge-section mot-dsc-insider">
      <Row className="justify-content-center position-relative">
        <Col
          md={11}
          className="d-flex mot-dsc-insider__flex justify-content-center align-items-top"
        >
          <Col md={6} className="mot-dsc-insider__one py-4 px-3">
            <h3 className="mot-access-section-header position-relative">
              What's inside
            </h3>
            <div className="position-absolute lots-more_cont">
              <Roll top>
                <LotsMore className="lots-more_svg" />
              </Roll>
            </div>
            <Fade>
              <div className="mot-dsc-insider__one-text px-1 mt-4">
                <p className="my-3">
                  You get access to over 300+ design briefs to practice with and
                  build a better portfolio show-proof.
                </p>
                <p className="my-3">
                  Our brief is designed for every designer to access a guiding
                  instrument in an actual product with the modern industry
                  design need feel.
                </p>
                <p className="my-3">
                  Perfect for those who want to start or advance their design
                  career.
                </p>
              </div>
            </Fade>
          </Col>
          <Col md={6} className="mot-dsc-insider__two">
            <HeroInsider />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
