import React from "react";
import Modal from "react-modal";
import "./LoginModal.css";

// Set the appElement for the modal to avoid accessibility issues
Modal.setAppElement("#root");

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="login-modal"
      overlayClassName="custom-modal-overlay"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      onAfterClose={() => (document.body.style.overflow = "auto")}
    >
      <section>
        <div className="whatnew-and-close">
          <p className="what-text">What's new</p>
          <div className="btn-X-cont">
            <p className="btn-X" onClick={onClose}>
              X
            </p>
          </div>
        </div>
        <p className="first-release">
          Our first release was soely connecting prospective clients to vetted
          designers. Our new update brings much more than that!
        </p>
        <section className="challenge-cont-one">
          <div className="party-and-design">
            <img src="/assets/party.svg" />
            <span className="login-subtexts">Design Challenge</span>
          </div>

          <p className="made-possible">
            We’ve made it possible for designers to get hands on real design
            briefs to leverage their skills and build a better portfolio
            show-proof.
          </p>
        </section>

        <section className="challenge-cont-one mt-3">
          <div className="party-and-design">
            <img src="/assets/baggage.svg" />
            <span className="login-subtexts">Post Jobs</span>
          </div>

          <p className="made-possible">
            Now, clients can post jobs with ease and find excellent designers.
            All without paying anything for job posting.
          </p>
        </section>
        <div className="cont-btn-got-it">
          <button className="got-it-btn" onClick={onClose}>
            Got It
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default LoginModal;
