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
  
  const screenWidth = window.innerWidth;
  const fontSize = screenWidth >= 800 ? "18px" : "18px";
  
  const footLinkText = {
    fontSize: fontSize,
    color: "#fff2df"
  };
  
  return (
    <div className="mot-landing-page-blue">
      <div className="mot-footer-container">
        <section className="subcont">
          <Row>
            <Col md={3}>
              <article className="logo-and-love">
              <div className="mot-logo">
                <a href="/">
                  <img src={Logo} alt="" className="logo" />
                </a>
              </div>
              <h6 className="love-aorthar pt-3">
                Designed with <img src={Heart} alt="Heart" /> by Aorthar
              </h6>
              </article>
            </Col>
            <Col md={3} className="mot-footer-links">
              <div style={footLinkText} className="mt-2">
                <HashLink
                  smooth
                  to="/jobs"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  Jobs
                </HashLink>
              </div>
              <div style={footLinkText} className="mt-2">
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
              <div style={footLinkText} className="mt-2">
                <HashLink
                  smooth
                  to="/#user"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  Partner with us
                </HashLink>
              </div>
            </Col>
            <Col md={3} className="mot-footer-links">
              <div style={footLinkText} className="mt-2">
                <a href={TheTeam} target="_blank" rel="noopener noreferrer">
                  The Team
                </a>
              </div>
              <div style={footLinkText} className="mt-2">
                <a href={Courses} target="_blank" rel="noopener noreferrer">
                  Buy a Course
                </a>
              </div>
              <div style={footLinkText} className="mt-2">
                <a href={Mailto} target="_black" rel="noopener noreferrer">
                  Contact Us
                </a>
              </div>
            </Col>
            <Col md={3} className="mot-footer-links white-text">
              <div style={footLinkText} className="mt-2">
                <a href="/">Terms and Conditions</a>
              </div>
              <div style={footLinkText} className="mt-2">
                <span className="white-text">Connect with Us –</span>
                <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
                  <img
                    style={footLinkText}
                    src={Twitter}
                    alt="social icons"
                    className="social-icon"
                  />
                </a>
                <a href={IGLink} target="_blank" rel="noopener noreferrer">
                  <img
                    style={footLinkText}
                    src={Instagram}
                    alt="social icons"
                    className="social-icon"
                  />
                </a>
              </div>
              <div style={footLinkText} className="mt-2">
                <a href={Mailto} target="_black">
                  Hire Developers!
                </a>
              </div>
            </Col>
          </Row>
        <section>
          <div
            style={footLinkText}
            className="copyright-text justify-content-center text-center copy-text"
          >
            Copyright © {new Date().getFullYear()} The Motivv Community. All
            Rights Reserved
          </div>
        </section>
        </section>

      </div>
    </div>
  );
}
