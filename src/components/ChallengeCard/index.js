import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Col, Modal, Button, Spinner } from "react-bootstrap";
import DesignImage from "../../assets/default-image.svg";

import { SuccessModal } from "../SuccessModal/";

//styles
import { ReactComponent as MotCategory } from "../../assets/mot-category.svg";
import { ReactComponent as MotAttempts } from "../../assets/mot-attempts.svg";
import { ReactComponent as MotType } from "../../assets/mot-type.svg";

import { truncate } from "../DesignChallengeCard/helpers";
import axios from "axios";
import { useChallenge } from "../ChallengeContext";
import { URL } from "../../constants";

const url = `${URL}/startDesignChallenge.php`;
export const ChallengeCard = ({
  id,
  name,
  description,
  attempts,
  track,
  industry,
  deadline,
  tags,
}) => {
  const { challengeUser } = useChallenge();
  const [show, setShow] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleStart = async () => {
    setMessage("");
    setLoading(true);
    await axios
      .post(url, {
        email: challengeUser.email,
        name: challengeUser.name,
        challengeId: id,
        day: challengeUser.day,
      })
      .then((res) => {
        if (res.data.success === 1) {
          setLoading(false);
          setMessage(res.data.msg);
          setSuccessShow(true);
        } else {
          setLoading(false);
          setMessage(res.data.msg);
        }
      });
  };
  return (
    <Col sm={9} md={12} lg={9} className="p-0">
      <div className="mot-challenge-card mb-4">
        <div className="challenge-icon">
          <img src={DesignImage} alt="paystack redesign" />
        </div>
        <div className="mot-challenge-details">
          <h2 className="challenge-details-name">{name}</h2>
          <div className="challenge-details-description">
            {ReactHtmlParser(truncate(description))}
          </div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap mt-1 align-items-center">
            <div className="mot-challenge-info d-flex">
              <span className="pr-2 d-flex mot-challenge-info-items">
                <MotAttempts />
                <p className="pl-2 mb-0">{attempts} attempts</p>
              </span>
              <span className="px-2 d-flex mot-challenge-info-items">
                <MotType />
                <p className="pl-2 mb-0">{track}</p>
              </span>
              <span className="px-2 d-flex mot-challenge-info-items">
                <MotCategory />
                <p className="pl-2 mb-0">{industry}</p>
              </span>
            </div>
            <div className="mot-challenge-link" onClick={() => setShow(true)}>
              View Brief
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90h"
      >
        <Modal.Body className="mot-challenge-edit-modal position-relative">
          <div className="py-4 mb-4 d-flex mot-preview-modal-top align-items-center">
            <div className="d-flex mot-challenge-edit-modal-top">
              <label className="mb-0">Track</label>
              <p className="ml-2 mb-0">{track}</p>
            </div>
            {/* <div className="d-flex mot-challenge-edit-modal-top">
              <label className="mb-0">Industry:</label>
              <p className="ml-2 mb-0">{industry}</p>
            </div> */}
            <div className="d-flex mot-challenge-edit-modal-top mb-5  mt-4">
              <label className="mb-0">Tags: </label>
              <div className="ml-1 d-flex">
                {tags &&
                  tags.map((t) => (
                    <span key={t} className="tag-container">
                      {t}
                    </span>
                  ))}
              </div>
            </div>
            <span
              className="mot-change-btn"
              onClick={() => {
                window.scrollTo(0, 0);
                handleClose();
              }}
            >
              change
            </span>
          </div>
          <div className="d-flex align-items-start flex-column">
            <div>{ReactHtmlParser(description)}</div>
            {/* <div className="d-flex mot-challenge-edit-modal-top mb-5 mt-4">
              <label className="mb-0">Deadline: </label>
              <p className="ml-1">{deadline}</p>
            </div> */}
          </div>
          <div className="d-flex justify-content-end position-absolute mot-preview-action-buttons">
            <Button
              variant="link"
              size="sm"
              className="mot-create-challenge-btn-white align-self-center mt-5"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <span>
              <Button
                variant="primary"
                size="sm"
                className="mot-create-challenge-btn align-self-center mt-5"
                onClick={handleStart}
              >
                Start
                {loading && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    style={{ color: "#134A7C", paddingLeft: "5px" }}
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </Button>
            </span>
          </div>
        </Modal.Body>
        <SuccessModal
          active={successShow}
          message={message}
          cb={() => setSuccessShow(false)}
        />
      </Modal>
    </Col>
  );
};
