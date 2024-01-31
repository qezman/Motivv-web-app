import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ComingSoonForm } from "./ComingSoonForm";
import { DropDown } from "./Dropdown/Dropdown";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { ReactComponent as DropDownSvg } from "../../assets/dropdown.svg";

import "./ComingSoon.css";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";

export const ComingSoon = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  return (
    <Container fluid className="px-0 mot-coming-container">
      <div className="w-100 d-flex flex-wrap justify-content-between align-items-baseline mot-school-navbar">
        <div className="mb-2">
          <Link to="/">
            <img src={Logo} alt="" className="brand-logo" />
          </Link>
        </div>
        <div className="navbar mot-school-nav">
          <span
            className="mot-school-link"
            onClick={() => setDropdownShow(!dropdownShow)}
          >
            Motivv Products
            <DropDownSvg />
          </span>
          <DropDown state={dropdownShow} />
        </div>
        <div
          className="sm-mot-school-nav"
          onClick={() => setDropdownShow(!dropdownShow)}
        >
          <DropDownSvg />
          <DropDown state={dropdownShow} />
        </div>
        <div className="mot-school-coming__btn">
          <Link to="#" className="mot-school-btn_get">
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Get curriculum
          </Link>
        </div>
      </div>
      <Col className="mot-school-hero">
        <Fade left>
          <h3>design school</h3>
        </Fade>
        <Fade right>
          <p>
            Fast track your{" "}
            <span className="text-orange">Self-taught Design</span> Career With
            Our Complete 4-year University-feel Curriculum!
          </p>
        </Fade>
      </Col>
      <Zoom>
        <ComingSoonForm />
      </Zoom>
    </Container>
  );
};
