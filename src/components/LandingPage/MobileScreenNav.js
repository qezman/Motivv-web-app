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

// import "./styles.css";
import "./MobileScreenNav.css"
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";


 const MobileScreenNav = () => {
  const styles = window.innerWidth >= 760 ? { color: "white" } : {};
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
    <section className="flex-headers">
      <div className="logo-links-and-button">
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

    </section>
  );
}
export default MobileScreenNav;
