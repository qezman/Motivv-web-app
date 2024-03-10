import React from "react";
import Fade from "react-reveal";

import "./style.css";
import UserDataTexts, { userData, userData1, userData2 } from "./userData";
let man =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_old-man_szh9mp.png";
let woman =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_woman_urmbzx.png";
let boy =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_blond-haired-person_ricdfl.png";
let girl =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_girl_ufojdy.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594379270/Motivv/arrow_p0wwhj.png";

export default function index() {
  return (
    <section className="mot-section-container">
      <div className="cont-two">
        <Fade bottom delay={1000} duration={1000}>
          <div className="mot-gender-cont">
            <div>
              <img
                src={man}
                alt="placeholder card"
                className="mot-placeholder-card"
              />
              <img
                src={woman}
                alt="placeholder card"
                className="mot-placeholder-card2"
              />
            </div>
            <p className="small-text pt-2">Motivv for Clients</p>
          </div>
        </Fade>
        <article className="each-item">
          <h2 className="topic-text">
            How to use motivv <br /> as a client
          </h2>
          {userData1.map((item, index) => (
            <div className="arrow-and-text" key={index}>
              <img src={item.img.arrow} alt="Arrow" className="arrow-image" />
              <p className="text-item">{item.text}</p>
            </div>
          ))}
        </article>
      </div>

      <div className="cont-two">
        <Fade bottom delay={1000} duration={1000}>
          <div className="mot-gender-cont">
            <div>
              <img
                src={boy}
                alt="placeholder card"
                className="mot-placeholder-card"
              />
              <img
                src={girl}
                alt="placeholder card"
                className="mot-placeholder-card2"
              />
            </div>
            <p className="small-text pt-2">Motivv for Creatives</p>
          </div>
        </Fade>
        <article className="each-item">
          <h2 className="topic-text">
            How to use motivv <br /> as a designer
          </h2>
          {userData2.map((item, index) => (
            <div className="arrow-and-text" key={index}>
              <img src={item.img.arrow} alt="Arrow" className="arrow-image" />
              <p className="text-item">{item.text}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
