import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./suggest-template-general.css";
import Logo from "../../assets/motivv-logo.png";
import SuggestTemplateForm from "./SuggestTemplateForm/SuggestTemplateForm";
import { ReactComponent as Comments } from "../../assets/comments.svg";
import "./suggest-template-general.css";

const SugggestTemplateComponent = () => {
  const history = useHistory();
  return (
    <div className="mot-business-template">
      <div className="w-100 d-flex flex-wrap justify-content-between align-items-baseline mot-business-template-navbar">
        <div className="mb-2">
          <Link to="/">
            <img src={Logo} alt="" className="brand-logo" />
          </Link>
        </div>
      </div>
      <p className="mot-go-back-click" onClick={() => history.goBack()}>
        <span className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="#134A7C"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
            style={{ verticalAlign: "sub" }}
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
        back
      </p>
      <Container className="mot-suggest-template">
        <Row>
          <div className="mot-suggest-template__intro">
            <h1>
              <span style={{ marginRight: "11px" }}>
                <Comments />
              </span>
              Suggest a Resource
            </h1>
            <p>
              We’re always on the look out for new resources. If you know of any
              or have written a resource that is currently available, please do
              complete the form below. All submissions will be subject to
              approval by our team but we’d love to hear from you!
            </p>
          </div>
          <SuggestTemplateForm />
        </Row>
      </Container>
    </div>
  );
};

export default SugggestTemplateComponent;
