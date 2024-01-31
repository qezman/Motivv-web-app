import React, { useState } from "react";
import "../styles/studyPlansCard.css";
import RegistrationForm from "./RegistrationForm";
import tooltip1 from "../assets/Vector (1).png";
import tooltip2 from "../assets/Vector(2).png";
import polygon1 from "../assets/Polygon 18.png";
import polygon2 from "../assets/Polygon 18 (1).png";

const StudyPlansCard = () => {
  const [value, setValue] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleChange = changeEvent => {
    setValue(changeEvent.target.value);
  };

  const onClick = () => setShowResults(true);

  return (
    <div className="study__plans__section__plans">
      <div className="study__plans__section__card__container">
        <div
          className="card study__plans__section__card"
          style={{
            border:
              value === "option1" ? "solid 3px #134A7C" : "solid 1px #134A7C",
          }}
        >
          <div className="study__plans__section__card__input__free">
            <span className="study__plans__section__card__input__free__tag">
              Free
            </span>
            <div className="study__plans__section__card__input">
              <input
                type="radio"
                onChange={handleChange}
                label="option1"
                checked={value === "option1"}
                value="option1"
                onClick={onClick}
              />
            </div>
            <div className="study__plans__section__sub">
              <h2>
                ₦ <span>20,000</span>.00
              </h2>
              <p>Full Curriculum</p>
            </div>
          </div>

          <div className=" study__plans__section__card__sub__section">
            <div className=" study__plans__section__card__first__sub">
              <h4>Features:</h4>

              <div className="no__name__no">
                <div className="no__name">
                  <img src={polygon1} alt="" />
                </div>
                <p>Access to course curriculum</p>
              </div>

              <div className="no__name__no">
                <div className="no__name">
                  <img src={polygon1} alt="" />
                </div>
                <p>Access to course topics</p>
              </div>

              <div className="no__name__no">
                <div className="no__name">
                  <img src={polygon1} alt="" />
                </div>
                <p>Access to reference links</p>
              </div>
            </div>

            <div className=" study__plans__section__card__second__sub">
              <div className="no__name">
                <img src={polygon1} alt="" />
              </div>
              <p>Get certificate of completion and project advisor</p>
              <div className="transaction__tooltip">
         
                <button
                  type="button"
                  className=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Hi there!"
                >
                  <div className="transaction__tooltip__image">
                    <img src={tooltip1} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card study__plans__section__card third__study__plans__card"
          style={{
            border:
              value === "option3" ? "solid 3px #134A7C" : "solid 1px #134A7C",
          }}
        >
          <div className="study__plans__section__card__input__premium">
            <span className="study__plans__section__card__input__premium__tag">
              Premium
            </span>
            <div className="study__plans__section__card__input">
              <input
                type="radio"
                onChange={handleChange}
                checked={value === "option3"}
                value="option3"
                onClick={onClick}
              />
            </div>
            <div className="study__plans__section__sub">
              <h2>
                ₦ <span>100,000</span>.00
              </h2>
              <p>Full Curriculum</p>
            </div>
          </div>

          <div className=" study__plans__section__card__sub__section">
            <div className=" study__plans__section__card__first__sub">
              <h4>Features:</h4>
              <div className="no__name__no">
                <div className="no__name">
                  <img src={polygon2} alt="" />
                </div>
                <p>
                  Access to course curriculum, courses links + resource links
                  (blogs and course) + videos
                </p>
              </div>
              <div className="no__name__no">
                <div className="no__name">
                  <img src={polygon2} alt="" />
                </div>
                <p>Access to course topics</p>
              </div>
              <div className="no__name__no">
                <div className="no__name">
                  <img src={polygon2} alt="" />
                </div>
                <p>Access to reference links</p>
              </div>
            </div>

            <div className=" study__plans__section__card__second__sub">
              <div className="no__name">
                <img src={polygon2} alt="" />
              </div>
              <p>Get certificate of completion and project advisor</p>
              <div className="transaction__tooltip">
         
                <button
                  type="button"
                  className=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Hi there!"
                >
                  <div className="transaction__tooltip__image">
                    <img src={tooltip2} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResults ? <RegistrationForm /> : ""}
    </div>
  );
};

export default StudyPlansCard;
