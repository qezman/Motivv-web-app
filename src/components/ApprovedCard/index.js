import React from "react";

import { Row, Container, Col } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import { URL } from "../../constants";

let star =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594408685/Motivv/star_wllduj.svg";
const urlDelete = `${URL}/declineDesigner.php`;

export default function ApprovedCard({
  props,
  skill1,
  skill2,
  skill3,
  skill4,
  title,
  name,
  startPrice,
  endPrice,
  link,
  phone,
  avatar,
  email,
  rest,
  rating,
  date,
}) {
  const handleDelete = async () => {
    await axios.post(urlDelete, { name, rating, email, avatar }).then((res) => {
      let a = window.confirm("Are you sure you want to delete");
      if (a) {
        alert(res.data.msg);
        props.history.push("/approve");
      }
    });
  };
  return (
    <Container>
      <Row className="mot-profile-card">
        <Col md={4}>
          <Row>
            <Col md={3}>
              <img
                src={`${URL}/picture/${avatar}`}
                alt={name}
                className="mot-avatar"
              />
            </Col>
            <Col md={9}>
              <div>
                <span>
                  <img src={star} alt="" className="mr-2" />
                  <span>{rating}</span>
                </span>
                <span className="push-left">
                  <a rel="noopener noreferrer" href={link} target="_blank">
                    View Portfolio
                  </a>
                </span>
              </div>
              <div className="mot-username">{name}</div>
              <div>{title}</div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="mot-skills-section">
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Col>
        <Col md={3} className="small-texts mot-skills-section">
          <Row>
            <Col>
              <div>
                <span className="med-text">{email}</span>
              </div>
              <div>
                <span className="med-text">NGN {startPrice} </span>-
                <span className="med-text"> NGN {endPrice}</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <div>
            <span className="med-text">{date}</span>
          </div>
          <div>
            <span className="d-flex justify-content-center">
              <button onClick={handleDelete} className="btn btn-light text-red">
                Delete
              </button>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
