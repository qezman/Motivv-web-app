import React from "react";
import Modal from "react-modal";
import "./style.css";

// Set the appElement for the modal to avoid accessibility issues
Modal.setAppElement("#root");

const JobPostPageNew = ({ isOpen, onClose }) => {
  return (
    <section className="new-postjob-cont">
      <article className="tell-and-btn">
        <p>Tell us about your job</p>
        <span className="button-X" onClick={onClose}>
          X
        </span>
      </article>

      <article className="center-content">
        <section>
          <p className="png-outline-bg">
            <img src="/assets/png-outline.svg" />
          </p>
          <p>Upload Company Logo (Optional)</p>
        </section>

        <form>
          <input
            type="text"
            required
            placeholder="Display Name"
            className="input-title mt-0 p-0"
            maxLength="20"
          />
          <p className="mot-form-hint w-100">A single name will do</p>
        </form>
      </article>
      
    </section>
  );
};

export default JobPostPageNew;
