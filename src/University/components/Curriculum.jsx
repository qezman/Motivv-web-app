import React from "react";
import "../styles/curriculum.css";
import button from "../assets/Vector.png";
import image1 from "../assets/Group 2064.png";
import image2 from "../assets/Group 2066.png";
import image3 from "../assets/Group 2067.png";

const Curriculum = () => {
  return (
    <div className="curriculum__section">
      <div className="curriculum__button">
        <button>
          Watch this video now
          <div className="curriculum__button__image">
            <img src={button} alt="" />
          </div>
        </button>
      </div>
      <div className="curriculum__section__body">
        <div className="curriculum__section__body__title">
          <h2>What's Inside &#128071;</h2>
          <p>
            Welcome To Motivv Design School. Here’s what You Will Learn in your
            4-year study:
          </p>
        </div>
        <div className="curriculum__section__body__content">
          <div className="curriculum__section__body__content__item">
            <div className="curriculum__section__body__content__item__image">
              <img src={image1} alt="" />
            </div>
            <p className="curriculum__year">Year 1</p>
            <p className="curriculum__course__title">Introduction to design</p>
            <div className="curriculum__section__body__content__item__ul">
              <ul>
                <li>IND 101: Definition of design</li>
                <li>IND 102: Design History</li>
                <li>IND 103: Specialties in Design</li>
                <li>IND 104: Elements and principles of Design</li>
                <li>IND 105: Different Tools in Design</li>
              </ul>
            </div>
          </div>
          <div className="curriculum__section__body__content__item">
            <div className="curriculum__section__body__content__item__image">
              <img src={image2} alt="" />
            </div>
            <p className="curriculum__year">Year 2</p>
            <p className="curriculum__course__title">
              Introduction to Graphic Design
            </p>
            <div className="curriculum__section__body__content__item__ul">
              <ul>
                <li>IGD 101: Graphic Design Basics</li>
                <li>IGD 102 Graphic Design Principles</li>
                <li>IGD 103: Principles of visual hierarchy</li>
                <li>IGD 104: Careers in Graphic Design</li>
                <li>IGD 105: Designing to communicate</li>
              </ul>
            </div>
          </div>
          <div className="curriculum__section__body__content__item">
            <div className="curriculum__section__body__content__item__image">
              <img src={image3} alt="" />
            </div>
            <p className="curriculum__year">Year 3</p>
            <p className="curriculum__course__title">Design Niche</p>
            <div className="curriculum__section__body__content__item__ul">
              <ul>
                <li>Visual Identity/Branding Design</li>
                <li>UI/UX Design</li>
                <li>Marketing and Advertising Graphics</li>
                <li>Art/Illustration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="get__started__button">
          <button>
            Get Started
            <span role="img" aria-label="rocket icon">
              &#128640;
            </span>
            {/* <div className="curriculum__button__image">
            <img src={button} alt="" />
          </div> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
