import React from "react";
import { Col } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import Cookies from "js-cookie";
import { URL } from "../../constants";

let star =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594408685/Motivv/star_wllduj.svg";
const url = `${URL}/processRealClient.php/`;

export default function Card({
  hide,
  avatar,
  name,
  headline,
  skill1,
  skill2,
  skill3,
  skill4,
  start,
  end,
  link,
  phone,
  rest,
  rating,
}) {
  const onContact = () => {
    if (Cookies.get("user-auth"))
      axios
        .post(url, { email: Cookies.get("user-auth"), designer: name })
        .then((res) => console.log(res));
  };
  return (
    <Col md={3} {...rest} className="mot-profile-card-wrapper">
      <div className="">
        <div className="mot-profile-card">
          <span className="float-right">
            <img src={star} alt="" className="mr-2" />
            <span>{rating}</span>
          </span>
          <div className="pt-5 text-center">
            <div>
              <img
                src={`${URL}/picture/${avatar}`}
                alt={name}
                className="mot-avatar"
              />
            </div>
            <div className="pt-3">
              <h5 className="display-name">{name}</h5>
            </div>
            <div className="">
              <h6>{headline}</h6>
            </div>
            <div className="pt-2">
              <span
                style={{ opacity: skill1 ? 1 : 0 }}
                className="skill smaller-texts"
              >
                {skill1}
              </span>
              <span
                style={{ opacity: skill2 ? 1 : 0 }}
                className="skill smaller-texts"
              >
                {skill2}
              </span>
            </div>
            <div className="mt-3 pb-2">
              <span
                style={{ opacity: skill3 ? 1 : 0 }}
                className="skill smaller-texts"
              >
                {skill3}
              </span>
              <span
                style={{ opacity: skill4 ? 1 : 0 }}
                className="skill smaller-texts"
              >
                {skill4}
              </span>
            </div>
            <hr />
            <span className="amount">
              NGN {start} - NGN {end}
            </span>
          </div>
        </div>
        <span className={hide ? "fd" : ""}>
          {!hide ? (
            <a
              rel="noopener noreferrer"
              href={`https://Wa.me/${phone}`}
              target="_blank"
              className="block"
            >
              <button onClick={onContact}>Contact</button>
            </a>
          ) : (
            <span className="block">
              <button
                className="disabled-btn"
                style={{ cursor: "not-allowed" }}
              >
                Contact
              </button>
            </span>
          )}
          {!hide ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block portfolio-link"
            >
              View Portfolio
            </a>
          ) : (
            <span className="block">
              <button
                style={{ cursor: "not-allowed" }}
                className="disabled-btn"
              >
                View Portfolio
              </button>
            </span>
          )}
        </span>
      </div>
    </Col>
  );
}
