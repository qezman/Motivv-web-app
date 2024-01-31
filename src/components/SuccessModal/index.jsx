import React from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import { ReactComponent as PaperPlane } from "../../assets/paper-plane.svg";

import "./sucess-modal.css";

export const SuccessModal = ({ active, message, cb }) => {
  const history = useHistory();
  const setClose = () => {
    cb();
    history.push("/challenges/dashboard");
  };
  return (
    <Modal
      size="lg"
      centered
      show={active}
      onHide={setClose}
      dialogClassName="modal-95h"
    >
      <Modal.Body className="mot-challenge-success-modal position-relative">
        <div className="success-svg-placholder">
          <PaperPlane />
        </div>
        <div className="success-modal-two">
          <h2>Woo hoo !</h2>
          <p>
            Your challenge was successfully sent to your mail. <br /> Bask in
            the glory and create something great
          </p>
          <button
            variant="primary"
            size="md"
            className="mot-create-challenge-btn text-white align-self-center mt-5"
            onClick={setClose}
          >
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
