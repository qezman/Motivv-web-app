import React, { useState } from "react";
import Fade from "react-reveal";
import "../styles/style.css";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import DownIcon from "../assets/arrow_downward.svg";
import NavBar from "./NavBar";
import Img1 from "../assets/Rectangle 406-1.jpg";
import Img2 from "../assets/Rectangle 406-2.jpg";
import Img3 from "../assets/Rectangle 406.jpg";
// import Img4 from "../assets/Rectangle 407-2.jpg";
import Img5 from "../assets/Rectangle 407-1.jpg";

import { DropDown } from "../../DesignSchool/components/Dropdown/Dropdown";
import { ReactComponent as DropDownSvg } from "../../assets/dropdown.svg";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: false,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Header = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  let Logo =
    "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
  return (
    <>
      <nav style={{ backgroundColor: "#134a7c" }}>
        <div className="d-flex justify-content-around align-items-center px-3 py-2 pt-4">
          <Link to="/">
            <img src={Logo} alt="" width="100px" height="auto" />
          </Link>

          <div className="navbar mot-school-nav">
            <span
              className="mot-school-link"
              onClick={() => setDropdownShow(!dropdownShow)}
              style={{ color: "white" }}
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

          <button className="btn-nav">🚀 Get Curriculum</button>
        </div>
      </nav>
      <div className="styled-header">
        <div className="font-weight-bold">
          <h6 className="text-white">DESIGN SCHOOL</h6>
          <h1>
            Fast track your
            <span style={{ color: "#F89707" }}> Self-taught Design </span>{" "}
            Career With Our Complete 4-year University-feel Curriculum!
          </h1>
          <button className="style-button">
            Scroll to learn more <img src={DownIcon} alt="" />
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#0f4374",
          width: "100vw",
          paddingLeft: "7%",
          overflowX: "hidden",
        }}
      >
        <Slider {...settings}>
          <div className="">
            <div className="">
              <img
                style={{ height: "100%", width: "100%" }}
                src={Img1}
                alt=""
              />
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                style={{ height: "100%", width: "100%" }}
                src={Img2}
                alt=""
              />
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                style={{ height: "100%", width: "100%" }}
                src={Img3}
                alt=""
              />
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                style={{ height: "100%", width: "100%" }}
                src={Img5}
                alt=""
              />
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                style={{ height: "100%", width: "100%" }}
                src={Img1}
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Header;
