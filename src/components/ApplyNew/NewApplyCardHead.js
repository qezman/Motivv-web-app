import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal";
import party from "../../assets/party.svg";
import post from "../../assets/post.svg";
import postImg from "../../assets/magic.svg";
import JobPostPage from "../../pages/JobPostPage";
import Modal from "react-modal";

import { UserContext } from "../UserContext";
import Cookies from "js-cookie";
import axios from "axios";
import Helmet from "../Helmet/index";
import "./NewApplyCardHead.css";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let upload =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594422865/upload_sncmdm.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

export default function NewApplyCardHead() {
  const [hoveredOn, setHoveredOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const { show, setShow } = useContext(UserContext);

  const styles = window.innerWidth >= 760 ? { color: "white" } : {};
  const onHide = () => {
    console.log("Hiding modal...");
    setShow(false);
    Cookies.set("show-modal", "true");
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePostJobClick = () => {
    setIsModalOpen(true);
    setIsDropdownVisible(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  return (
    <section className="applycard-container">
      <img className="applycard-bg-img" src="/assets/bg.png" alt="Background Image" />
      
      {/* nav section */}
      <section className="">
        <article className="head-contents">
          <div>
            <Link to={"/"}>
              <img
                className="logo-img"
                src="/assets/motivv-logo.png"
                alt="Motivv Logo"
              />
            </Link>
          </div>
          <div className="mot-navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/designers">Designers</Link>
            </li>

            <li className="jobs">
              <Link to="/jobs">Jobs</Link>
              <img
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  transform: isDropdownVisible
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
                src="/assets/dropdown.svg"
                alt="dropdown"
                onClick={toggleDropdown}
              />
              {isDropdownVisible && (
                <div className="dropdown-texts">
                  <ul>
                    <li onClick={handlePostJobClick} className="menu-text-one">
                      Post a job
                    </li>
                    <div />
                    <Link to={"/jobs"}>
                      <li className="menu-text">Find jobs</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link to="/challenges">Design Challenge</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/university">University</Link>
            </li>
          </div>

          {/* here is the Post Job button */}
          <button className="btn-post-job">
            <img src="/assets/magic-wand.png" />
            <Link
              // to="/post-job"
              className="post-job-text"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handlePostJobClick}
            >
              Post Job
            </Link>
          </button>
        </article>

        {/*modal content  */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay"
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          onAfterClose={() => (document.body.style.overflow = "auto")}
        >
          <article className="custom-modal-content">
            {/* <div className="custom-modal-flex"> */}
            <div className="custom-modal-header">
              <h6 className="tell-us">Tell us about your job</h6>
              <p
                style={{
                  color: "black",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "24px",
                  padding: "4px",
                }}
                onClick={handleCloseModal}
              >
                x
              </p>
            </div>
            <div className="custom-modal-body">
              <JobPostPage />
            </div>
            {/* </div> */}
          </article>
        </Modal>
      </section>

      <Container className="head-content">
        <div className="create-text-and-btn">
          <Fade delay={1000} duration={500} bottom>
            <h1 className="mot-catch-phrase">
              Create a striking <br /> profile and get vetted <br /> for your
              design cause
            </h1>
          </Fade>
          <button className="create-profile-btn">Create profile</button>
        </div>

        <section className="right-section-cont">
          <p className="how-it-works">How it works:</p>

          <article className="list-items-cont">
            <div className="list-items">
              <img className="arrow-double" src="/assets/onboard-arrows.png" />
              <p>Input your name and Job Headline</p>
            </div>

            <div className="list-items">
              <img className="arrow-double" src="/assets/onboard-arrows.png" />
              <p>Upload your avatar</p>
            </div>

            <div className="list-items">
              <img className="arrow-double" src="/assets/onboard-arrows.png" />
              <p>Include your portfolio link</p>
            </div>

            <div className="list-items">
              <img className="arrow-double" src="/assets/onboard-arrows.png" />
              <p>Add the applications you are confident at</p>
            </div>

            <div className="list-items">
              <img className="arrow-double" src="/assets/onboard-arrows.png" />
              <p>Gain approval</p>
            </div>
          </article>
        </section>
      </Container>
    </section>
  );
}
