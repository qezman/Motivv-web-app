import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import "./style.css";

import SchoolsCard from '../../assets/curriculum-cards.png'
import SchoolsFeedback from '../../assets/mentorship.png'
import SchoolsCertificate from '../../assets/schools-certificate.png';

export default function CheckSchool() {
  return (
    <div className="mot-check-school">
      <Container>
        <Row>
          <Col md={12}>
            <Row className="justify-content-md-center align-items-center d-flex flex-column">
                <span className="mb-2 d-block challenge-label l-green">Coming Soon</span>
                <Fade>
                  <h2 className="mot-check-school__hword">
                    Fast track your Self-taught Design Career With Our Complete 4-year University-feel Curriculum!
                  </h2>
                </Fade>
                <Fade delay={1000}>
                  <p className="mot-check-school__htext">Become a professional designer by taking the standard 4-year Design course</p>
                </Fade>
                <Link className="mr-3" to="/school">
                  <button className="explore-btn button1 mot-cs-btn">
                    <span className="font-weight-bold">Coming Soon</span>
                  </button>
                </Link>
                <Row className="mot-check-school__features">
                    <Col md={4} className='mot-check-school__snipppets'>
                      <Fade delay={1000} duration={500} bottom>
                        <figure className="mot-check-school__imageHolder">
                          <img src={SchoolsCard} alt="deck of all curriculum cards" />
                        </figure>
                        <div className="mot-check-school__writings">
                          <h4 className="mot-check-school__header">Curated Design Curriculum</h4>
                          <p className="mot-check-school__text">
                            New to Design or confused on what to start learning? Our curated curriculum will take you through the basics of design to being a pro at it with the right resources.
                          </p>
                        </div>
                      </Fade>
                    </Col>
                    <Col md={4} className='mot-check-school__snipppets'>
                      <Fade delay={1800} duration={500} bottom>
                        <figure className="mot-check-school__imageHolder">
                          <img src={SchoolsFeedback} alt="one on one mentorship" />
                        </figure>
                        <div className="mot-check-school__writings">
                          <h4 className="mot-check-school__header">Intensive Mentoring Session</h4>
                          <p className="mot-check-school__text">
                            We provide an amazing mentoring session that gives you a massive push to help you bring about the change you want in your design career.
                          </p>
                        </div>
                      </Fade>
                    </Col>
                  <Col md={4} className='mot-check-school__snipppets'>
                    <Fade delay={2600} duration={500} bottom>
                        <figure className="mot-check-school__imageHolder">
                          <img src={SchoolsCertificate} alt='motivv school certificate of completion' />
                        </figure>
                        <div className="mot-check-school__writings">
                          <h4 className="mot-check-school__header">certificate upon completion</h4>
                          <p className="mot-check-school__text">Upon successful completion of the curriculum, students will be issued an e-certificate signed by Motivv</p>
                        </div>
                      </Fade>
                  </Col>
                </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
