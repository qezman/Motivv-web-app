import React, { useState } from "react";
import { Form, Col, Modal } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import { URL } from "../../constants";

const url = `${URL}/processApprove.php`;
const urlDelete = `${URL}/declineDesigner.php`;
let star =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594408685/Motivv/star_wllduj.svg";

export default function PendingCard({
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
}) {
  const [rating, setRating] = useState("1.0");
  const [reason, setReason] = useState("");
  const [show, setShow] = useState(false);

  const handleApprove = async () => {
    await axios.post(url, { name, rating, email }).then((res) => {
      let a = window.confirm("Are you sure");
      if (a) {
        alert(res.data.msg);
        props.history.push("/pending");
      }
    });
  };

  const handleDelete = async () => {
    await axios
      .post(urlDelete, { name, rating, email, avatar, reason })
      .then((res) => {
        let a = window.confirm("Are you sure you want to delete");
        if (a) {
          alert(res.data.msg);
          props.history.push("/pending");
          setReason("");
        }
      });
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Col md={3} {...rest} className="mot-profile-card-wrapper mb-3">
      <div className="">
        <div className="mot-profile-card">
          <div className="d-flex flex-column align-items-end">
            <div>
              <img src={star} alt="" className="mr-2" />
              <span>{rating}</span>
            </div>
            <Form.Control
              className="rate-dropdown"
              as="select"
              value="Rate now"
              onChange={(e) => setRating(e.target.value)}
              defaultValue="Rate now"
            >
              <option value="1.0">Rate now</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
              <option value="3.0">3.0</option>
              <option value="3.5">3.5</option>
              <option value="4.0">4.0</option>
              <option value="4.5">4.5</option>
              <option value="5.0">5.0</option>
            </Form.Control>
          </div>
          <div className="pt-2 text-center">
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
              <h6>{title}</h6>
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
              NGN {startPrice} - NGN {endPrice}
            </span>
          </div>
        </div>
        <span className="block">
          <button onClick={handleApprove}>Approve</button>
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block portfolio-link"
        >
          View Portfolio
        </a>
        <span className="d-flex justify-content-center">
          <button
            onClick={() => setShow(true)}
            className="btn btn-light text-red"
          >
            Delete
          </button>
        </span>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter a reason</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              required
              placeholder="Reason"
              className="form-control"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleDelete}
              disabled={!reason ? true : false}
              className="btn btn-light text-red"
            >
              Delete
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
}
