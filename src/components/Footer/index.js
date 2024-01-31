import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let Twitter =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594473607/Motivv/feather_twitter_mbmao2.png";
let Instagram =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594473607/Motivv/ant-design_instagram-outlined_vo6c9g.png";
let TwitterLink = "https://twitter.com/motivvco?s=20";
let IGLink = "https://www.instagram.com/motivvco/";
let TheTeam = "https://aorthar.com/theteam";
let Courses = "https://aorthar.com/courses";
let Mailto = "mailto:hello@motivv.co";
// let MailtoH = "mailto:hello@motivv.co";
let Heart =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594685437/Motivv/heart_c8ufkp.png";
export default function index() {
  return (
    <div className="mot-landing-page-blue">
      <div className="mot-footer-container">
        <Container>
          <Row>
            <Col md={3}>
              <a href="/">
                <img src={Logo} alt="" className="logo" />
              </a>
              <h6 className="white-text pt-4">
                Made with <img src={Heart} alt="Heart" /> by Aorthar
              </h6>
            </Col>
            <Col md={3} className="mot-footer-links">
              <div className="mt-2">
                <HashLink
                  smooth
                  to="/#clients"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  Clients
                </HashLink>
              </div>
              <div className="mt-2">
                <HashLink
                  smooth
                  to="/#creatives"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  Designers
                </HashLink>
              </div>
              <div className="mt-2">
                <HashLink
                  smooth
                  to="/#user"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  How it works
                </HashLink>
              </div>
              <div className="mt-4">
                <div className="mt-2">
                  <Link to="/apply">Create a Profile Card</Link>
                </div>
                <div className="mt-2">
                  <Link to="/post-job">Post a new job</Link>
                </div>
                <div className="mt-2">
                  <Link to="/jobs">View Jobs</Link>
                </div>
              </div>
            </Col>
            <Col md={3} className="mot-footer-links">
              <div className="mt-2">
                <a href={TheTeam} target="_blank" rel="noopener noreferrer">
                  The Team
                </a>
              </div>
              <div className="mt-2">
                <a href={Courses} target="_blank" rel="noopener noreferrer">
                  Buy a Course
                </a>
              </div>
              <div className="mt-2">
                <a href={Mailto} target="_black" rel="noopener noreferrer">
                  Contact us
                </a>
              </div>
              <div className="mt-4">
                <div className="mt-2">
                  <Link to="/challenges">Design Challenge</Link>
                </div>
                <div className="mt-2">
                  <Link to="#">Design School (coming soon)</Link>
                </div>
                <div className="mt-2">
                  <Link to="/business-template">Business Templates</Link>
                </div>
              </div>
            </Col>
            <Col md={3} className="mot-footer-links white-text">
              <div className="mt-2">
                <a href="/">Terms and Conditions</a>
              </div>
              <div className="mt-2">
                <span className="white-text">Connect with Us –</span>
                <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Twitter}
                    alt="social icons"
                    className="social-icon"
                  />
                </a>
                <a href={IGLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Instagram}
                    alt="social icons"
                    className="social-icon"
                  />
                </a>
              </div>
              <div className="mt-2">
                <a href={Mailto} target="_black">
                  Partner with us
                </a>
              </div>
            </Col>
          </Row>
          <div>
            <div className="justify-content-center text-center white-text copy-text">
              Copyright © {new Date().getFullYear()} The Motivv Community
              <br />
              All Rights Reserved
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
