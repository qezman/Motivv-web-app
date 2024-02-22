import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Helmet from "../../Helmet/index";
import { URL } from "../../../constants/index";
import "./style.css";
import Footer from "../../Footer/index";
import { information } from "./designersData";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

const Designers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRotated, setIsRotated] = useState(false);

  const filteredInformation = information.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tools.some((tool) =>
        tool.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      item.paragraph.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rate.toString().includes(searchQuery)
  );

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <>
      <Helmet
        page="edit"
        title="Edit your Profile Card"
        description="Customize your card,  Input your name and Job Headline, Upload your avatar, Include your portfolio link, Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Edit profile"
      />
      <div>
        <div className="mot-landing-page-blue">
          <div className="mot-landing-page">
            <Container className="m-auto">
              <Row className="justify-content-center">
                <Col md={10}>
                  <div>
                    <Link to="/">
                      <img src={Logo} alt="" className="logo" />
                    </Link>
                  </div>
                  <Row className="pt-5">
                    <Col md={8} className="mot-text-color">
                      <div className="mot-catch-phrase">
                        Explore profiles of <br />
                        designers and select <br />
                        your creative knight.
                      </div>
                    </Col>
                    <Col md={4} className="mot-apply-instruction">
                      <h6 className="white-text small-texts">How it works:</h6>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">
                          Select preferred talent
                        </div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Generate talent profile snapshot</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Connet to our admin</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Get talent contact</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Continue with negotiation</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Hire creative</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* main contents */}
        <section className="main-content">
          {/* navigations */}
          <article className="navigations">
            <div className="recommended">
              <img className="icon" src="/assets/star.png" />
              <p>Recommended</p>
            </div>

            <div className="premium">
              <img className="icon" src="/assets/crown.png" />
              <p>Premium Profile</p>
            </div>

            <div className="search">
              <img className="icon" src="/assets/Vector.svg" />
              <input
                className="search-bar"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </article>

          {/* body section */}
          <article className="card-grid">
            {filteredInformation.map((item, index) => (
              <div className="info-cont" key={index}>
                <img className="info-image" src={item.Image} alt={item.name} />
                <h5 className="info-name">{item.name}</h5>
                <p className="info-role">{item.role}</p>
                <div className="info-tools">
                  {item.tools.map((tool, toolIndex) => (
                    <p className="tool" key={`${item.id}-${toolIndex}`}>
                      {tool}
                    </p>
                  ))}
                </div>
                <p className="info-para">{item.paragraph}</p>
                <p className="info-rate">Rate: NGN {item.rate}</p>
                <p className="view-btn">View Portfolio</p>
              </div>
            ))}
          </article>

          <article className="view-and-arrow">
            <p className="view-more-btn">View more</p>
            <p
              className={`double-arrow ${isRotated ? "rotated" : ""}`}
              onClick={toggleRotation}
            >
              >>
            </p>
          </article>
        </section>

        <Footer />
      </div>
    </>
  );
};
export default Designers;
