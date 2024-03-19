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
import MobileScreenNav from "./MobileScreenNav";
import { debounce } from "lodash";

import "./styles.css";
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";
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

export default function LandingPage() {
  const styles = window.innerWidth >= 760 ? { color: "white" } : {};

  // const [isMobileScreen, setIsMobileScreen] = useState(
  //   window.innerWidth <= 425
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileScreen(window.innerWidth <= 425);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);


  useEffect(() => {
    const handleResize = debounce(() => {
      // Your resize handling code here
    }, 100); // Adjust debounce delay as needed

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bannerSettings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: "none",
  };

  const [hoveredOn, setHoveredOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const { show, setShow } = useContext(UserContext);

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
    <>
      <Modal
        size="md"
        contentClassName="minH-100"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Body className="p-4">
          <div className="px-3 py-4 mb-4">
            <div className="pop-up-headers ">
              <h4 className="mb-3 font-weight-bolder">What’s new</h4>
              <Modal.Header className="close-btn-container" onClick={onHide}>
                <p className="close-btn">x</p>
              </Modal.Header>
            </div>
            <p className="pop-up-para">
              Our first release was solely connecting prospective clients to
              vetted designers. Our new update brings much more than that!
            </p>
            <div className="bottom-border mt-4" />
          </div>
          <Card className="card-cus mb-3" body>
            <div className="d-flex align-items-start">
              <img className="mr-2" src={party} alt="" />
              <div>
                <h5 className="font-weight-bold">Design Challenge</h5>
                <p className="pop-up-para">
                  We’ve made it possible for designers to get hands on real
                  design briefs to leverage their skills and build a better
                  portfolio show-proof.
                </p>
              </div>
            </div>
          </Card>
          <Card className="card-cus mb-3" body>
            <div className="d-flex align-items-start">
              <img className="mr-2" src={post} alt="" />
              <div>
                <h5 className="font-weight-bold">Post Jobs</h5>
                <p className="pop-up-para">
                  Now, clients can post jobs with ease and find excellent
                  designers. All without paying anything for job posting.
                </p>
              </div>
            </div>
          </Card>
          <div className="d-flex justify-content-center">
            <span className="got-it" onClick={onHide}>
              Got It
            </span>
          </div>
        </Modal.Body>
      </Modal>
      <div className="mot-landing-page-blue">
        <div className="mot-explore-page">
          {/* nav section */}
          <section className="flex-headers">
            <div className="logo-links-and-button">
              <div>
                <Link to="/">
                  <img src={Logo} alt="" className="logo" />
                </Link>
              </div>
              <div className="nav-links">
                <li>
                  <Link style={styles} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link style={styles} to="/designers">
                    Designers
                  </Link>
                </li>

                <li className="jobs">
                  <Link to="/jobs" style={styles}>
                    Jobs
                  </Link>
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
                  <Link style={styles} to="/challenges">
                    Design Challenge
                  </Link>
                </li>
                <li>
                  <Link style={styles} to="/resources">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link style={styles} to="/university">
                    University
                  </Link>
                </li>
              </div>

              <button className={`post-job-btn ${isHovered ? "hovered" : ""}`}>
                <Link
                  // to="/post-job"
                  className="post-job-text"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handlePostJobClick}
                >
                  <img src={postImg} alt="" className="post-job-text mr-2" />{" "}
                  Post Job
                </Link>
              </button>
            </div>

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

          {/* nav section for mobile screen */}
          <section className="mobile-flex-headers">
            <div className="">
              <div className="mobile-nav-links">
                <li>
                  <Link style={styles} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link style={styles} to="/designers">
                    Designers
                  </Link>
                </li>

                <li className="jobs">
                  <Link to="/jobs" style={styles}>
                    Jobs
                  </Link>
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
                  <Link style={styles} to="/challenges">
                    Design Challenge
                  </Link>
                </li>
                <li>
                  <Link style={styles} to="/resources">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link style={styles} to="/university">
                    University
                  </Link>
                </li>
              </div>
            </div>

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

          {/* {!isMobileScreen && <MobileScreenNav />} */}

          <Container className="m-auto">
            <div className="connect-and-card">
              <Row className="pt-5">
                <Col md={8} className="mot-text-color mot-text-center">
                  <Fade delay={1000} duration={500} bottom>
                    <h1 className="mot-catch-phrase">
                      We connect <br /> prospective clients to <br /> vetted
                      designers.
                    </h1>
                  </Fade>
                  <Fade delay={1800} duration={1500} bottom>
                    <h6 className="pt-3 pb-4 white-texts small-texts mot-catch-phrase-sub">
                      Connect with the best designers in the industry – Engage
                      with clients and Get hired by creating a profile with us
                    </h6>
                  </Fade>
                </Col>
                <Col
                  md={4}
                  className="mot-card-right justify-content-center d-none d-md-block"
                >
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
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
