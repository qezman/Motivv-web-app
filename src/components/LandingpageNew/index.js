import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import Fade from "react-reveal";
import postImg from "../../assets/magic.svg";
import JobPostPage from "../../pages/JobPostPage";
import Modal from "react-modal";
import LoginModal from "./LoginModal";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let Card1 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717120/Motivv/New%20folder/Group_64_ypkmq5.png";
let Card2 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717118/Motivv/New%20folder/img4_roz6ty.png";
let Card3 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717118/Motivv/New%20folder/img2_vkjnaf.png";
let Card5 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717118/Motivv/New%20folder/img_wtvc2t.png";
let Card6 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/img1_gsuywo.png";
let Card7 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/Group_63_w91syb.png";
let Card8 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/Group_61_zxvxsd.png";
let Card9 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/Group_62_wc9iii.png";
let Card10 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717116/Motivv/New%20folder/Group_60_ilanw2.png";
let Card11 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717116/Motivv/New%20folder/Group_59_bqbr6g.png";

const LandingPageNew = () => {
  const bannerSettings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: "none",
  };

  const [showLoginModal, setShowLoginModal] = useState(false);

  const [hoveredOn, setHoveredOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");

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

  
  useEffect(() => {
    // Check if the modal has been shown before
    const modalShownBefore = localStorage.getItem("modalShownBefore");
  
    if (!modalShownBefore) {
      // If not shown before, show the modal and set flag in local storage
      setShowLoginModal(true);
      localStorage.setItem("modalShownBefore", "true");
    }
  
    // Clear localStorage value when user leaves the website
    const handleUnload = () => {
      localStorage.removeItem("modalShownBefore");
    };
  
    window.addEventListener("beforeunload", handleUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  

  Modal.setAppElement("#root");

  document.body.style.overflow = isModalOpen ? "hidden" : "auto";

  return (
    <section className="bg-img-container">
      <img className="bg-img" src="/assets/bg.png" alt="Background Image" />
      <article className="">
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
                <Link to="">Jobs</Link>
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
                      <li
                        onClick={handlePostJobClick}
                        className="menu-text-one"
                      >
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

        <div className="text-and-card">
          {/* next section */}
          <section>
            <Fade bottom delay={1000} duration={1000}>
              <h1 className="h1-text">
                We connect <br /> prospective clients to <br /> vetted
                designers.
              </h1>
            </Fade>

            <p className="connect-text">
              Connect with the best designers in the industry – Engage with
              clients and Get hired by creating a profile with us
            </p>
          </section>

          {/* card section */}
          <section className="navigation-card">
            <Fade delay={5000} className="">
              <Slider {...bannerSettings}>
                <div>
                  <img
                    src={Card1}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card2}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card3}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card5}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card6}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card7}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card8}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card9}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card10}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
                <div>
                  <img
                    src={Card11}
                    alt="placeholder card"
                    className="mot-placeholder-image"
                  />
                </div>
              </Slider>
            </Fade>
          </section>
        </div>
         {/* Render LoginModal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </article>
    </section>
  );
};
export default LandingPageNew;
