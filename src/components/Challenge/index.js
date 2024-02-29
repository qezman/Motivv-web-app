import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import ImageSvg from "./ImageSvg";
import "./style.css";

let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594379270/Motivv/arrow_p0wwhj.png";

export default function Challenge() {
  return (
    <section className="mot-challenge-con" id="user">
      <article className="content-container">
        <div>
          <Col className="challenge-new-cont mb-3">
            <span className="challenge-new mb-2 d-block">New</span>
            <Fade>
              <h1 className="mot-access-section-header">
                Become a better designer in 4-weeks!
              </h1>
            </Fade>
            <h6 className="pt-3 small-texts black-text mot-access-section-caption">
              Level up your design skills by working on real design challenge
              sent to your inbox every week.
            </h6>
            <div className="mot-challenge">
              <Link to="/challenges">
                <button className="explore-btn">Get started</button>
              </Link>
              {/* <button className="explore-btn disabled">Coming Soon</button> */}
            </div>
          </Col>
          <Col>
            <div className="both-topics">
              <div className="d-flex">
                <div className="">
                  <img src={arrow} alt="" />
                </div>
                <div className="pl-3">
                  <h4
                    style={{ fontSize: "18px" }}
                    className="user-text font-weight-bold"
                  >
                    Extensive Design Brief Set
                  </h4>
                  <h6 className="user-text">
                    Eliminate one-page design with detailed design brief of give
                    you the actual modern industral feel.
                  </h6>
                </div>
              </div>

              <div className="share-and-build d-flex">
                <div className="">
                  <img src={arrow} alt="" />
                </div>
                <div className="pl-3">
                  <h4
                    style={{ fontSize: "18px" }}
                    className="user-text font-weight-bold"
                  >
                    Share and build your portfolio
                  </h4>
                  <h6 className="user-text">
                    Improve your performance with collated feedback from the
                    design community and build your portfolio
                  </h6>
                </div>
              </div>
            </div>
          </Col>
        </div>

        <div>
          {/* <Fade duration={300} delay={1000}>
            <ImageSvg style={{ width: "500px", height: "500px" }} />
          </Fade> */}

          <Fade duration={300} delay={1000}>
            <img className="display-img" src="/assets/three-cards.svg" />
          </Fade>
        </div>
      </article>
    </section>
  );
}
