import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./styles.css";

export default function SuccessModal({showModal, onClose}) {
  // for the modal on successful submission

  Modal.setAppElement("#root");
//   const [showModal, setShowModal] = useState(false);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

  return (
    <section>
      {/* React Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={onClose}
        contentLabel="Success Modal"
        // className="mot-modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
          content: {
            position: "static", // Keep content static
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            border: "none",
            borderRadius: "8px",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: "20px",
            maxWidth: "400px", // Set a maximum width if needed
            width: "100%",
            maxHeight: "80%", // Set a maximum height if needed
            margin: "auto", // Center horizontally
          },
        }}
      >
        {/* <p>x</p> */}

        <div className="x-close">
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_4393_842)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9996 14.1221L17.3026 19.4251C17.584 19.7065 17.9657 19.8646 18.3636 19.8646C18.7616 19.8646 19.1432 19.7065 19.4246 19.4251C19.706 19.1437 19.8641 18.7621 19.8641 18.3641C19.8641 17.9662 19.706 17.5845 19.4246 17.3031L14.1196 12.0001L19.4236 6.69711C19.5629 6.55778 19.6733 6.39238 19.7487 6.21036C19.824 6.02834 19.8628 5.83326 19.8627 5.63626C19.8627 5.43926 19.8238 5.2442 19.7484 5.06221C19.673 4.88022 19.5624 4.71488 19.4231 4.57561C19.2838 4.43634 19.1184 4.32588 18.9364 4.25054C18.7543 4.17519 18.5592 4.13644 18.3623 4.13648C18.1653 4.13653 17.9702 4.17538 17.7882 4.25081C17.6062 4.32624 17.4409 4.43678 17.3016 4.57611L11.9996 9.87911L6.6966 4.57611C6.5583 4.43278 6.39284 4.31843 6.20987 4.23973C6.0269 4.16103 5.83009 4.11956 5.63092 4.11774C5.43176 4.11591 5.23422 4.15377 5.04984 4.22911C4.86546 4.30444 4.69793 4.41574 4.55703 4.55652C4.41612 4.69729 4.30466 4.86471 4.22916 5.04902C4.15365 5.23333 4.1156 5.43083 4.11724 5.63C4.11887 5.82917 4.16016 6.02602 4.23869 6.20906C4.31721 6.3921 4.43141 6.55767 4.5746 6.69611L9.8796 12.0001L4.5756 17.3041C4.43241 17.4425 4.31821 17.6081 4.23969 17.7912C4.16116 17.9742 4.11987 18.1711 4.11824 18.3702C4.1166 18.5694 4.15465 18.7669 4.23016 18.9512C4.30566 19.1355 4.41712 19.3029 4.55803 19.4437C4.69893 19.5845 4.86646 19.6958 5.05084 19.7711C5.23522 19.8464 5.43276 19.8843 5.63192 19.8825C5.83109 19.8807 6.0279 19.8392 6.21087 19.7605C6.39384 19.6818 6.5593 19.5674 6.6976 19.4241L11.9996 14.1221Z"
                fill="#555555"
              />
            </g>
            <defs>
              <clipPath id="clip0_4393_842">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="success-icon">
          <img src="/assets/approve.png" />
        </div>

        <h1 className="success-header">Submission Successful</h1>
        <p className="para-text">
          You will receive an email in 24 hours confirming the success of your
          account creation
        </p>
      </Modal>
    </section>
  );
}
