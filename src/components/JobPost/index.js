import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import ImageSvg from "./ImageSvg";
import "./style.css";
import check from "../../assets/checked.svg";

export default function JobPost() {
  const textStyle = window >= 760 ? { width: "500px" } : {};
  return (
    <div className="mot-job-post-con" id="user">
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col className="mot-user-placeholders mb-3 rm-sd-p">
            <Fade duration={300} delay={1000}>
              <ImageSvg />
            </Fade>
          </Col>
          <Col className="mot-user-placeholders ">
            <div className="post-new-cont">
            <span className="job-post-new mb-2 d-block">New</span>
            </div>
            <Fade>
              <h1 style={textStyle} className="mot-access-header">
                Put your job in front of millions of candidates. For free!
              </h1>
            </Fade>
            <h6
              style={textStyle}
              className="tap-into-text pt-3 small-texts black-text"
            >
              Tap into our huge community of qualified candidates who are
              searching for their next role. Post jobs online, and get your job
              ads seen by millions of job seekers.
            </h6>
            <div className="mt-3">
              <div className="d-flex">
                <img className="mr-2" src={check} alt="motivv check" />
                <span>Post a job</span>
              </div>
              <div className="hire-cont d-flex mt-2">
                <img className="mr-2" src={check} alt="motivv check" />
                <span>Hire great talents </span>
              </div>
            </div>
            <div className="mot-job-post justify-content-between">
              <Link className="mr-3" to="/post-job">
                <button className="explore-btn button1">
                  <span className="font-weight-bold">Post Job</span>
                </button>
              </Link>
              <Link to="/jobs">
                <button className="explore-btn button2">
                  <span className="font-weight-bold">View jobs</span>
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
