import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Alert, Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Logo from "../../assets/motivv-logo.png";
// import postImg from "../../assets/magic.svg";
import { ReactComponent as Lines } from "../../assets/lines.svg";
import "./index.css";
import WandIcon from "./WandIcon";
import axios from "axios";
import Cookies from "js-cookie";
import { useChallenge } from "../ChallengeContext";
import { ValidateEmail } from "../../constants";
import { URL } from "../../constants";

const url = `${URL}/processChallengeUser.php`;
export const DesignChallengeHero = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
  });
  const location = useLocation();
  const emaill = new URLSearchParams(location.search).get("email");
  const namee = new URLSearchParams(location.search).get("name");
  const history = useHistory();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const { name, email } = formDetails;
  const { updateChallengeUser, challengeUser } = useChallenge();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !name) {
      setError(true);
      setLoading(false);
      setErrorValue("Please fill the required field");
    } else if (!ValidateEmail(email)) {
      setLoading(false);
      setError(true);
      setErrorValue("You have entered an invalid email address!");
    } else {
      await axios.post(url, { email, name }).then((res) => {
        if (res.data.success === 1) {
          setError(false);
          Cookies.set("challenge-user", res.data.user, {
            expires: 1,
          });
          updateChallengeUser(JSON.parse(Cookies.get("challenge-user")));
          history.push("/challenges/dashboard");
        } else {
          setLoading(false);
          setError(true);
          setErrorValue(res.data.msg);
        }
      });
    }
  };

  useEffect(() => {
    const postData = async () => {
      await axios.post(url, { email: emaill, name: namee }).then((res) => {
        if (res.data.success === 1) {
          setError(false);
          Cookies.set("challenge-user", res.data.user, {
            expires: 1,
          });
          updateChallengeUser(JSON.parse(Cookies.get("challenge-user")));
        } else {
          setLoading(false);
          setError(true);
          setErrorValue(res.data.msg);
        }
      });
    };
    if (emaill && namee && !challengeUser && ValidateEmail(emaill)) {
      setLoading(true);
      postData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emaill, namee]);

  return (
    <Container className="mot-designChallenge-section overflow-hidden pb7rem">
      <Row className="justify-content-center align-items-center position-relative">
        <Col
          md={11}
          className="d-flex flex-column my-auto justify-content-center align-items-center px-0"
        >
          <div className="w-100 d-flex flex-wrap justify-content-between align-items-baseline">
            <div className="mb-2">
              <Link to="/">
                <img src={Logo} alt="" className="logo" />
              </Link>
            </div>
            <div className="mot-dsc-hero__btn ml-auto">
              <div className="design-job">
                <Link to="/jobs" className="mot-design-jobs-button">
                  <WandIcon className="mr-2" /> Design Jobs
                </Link>
              </div>
            </div>
          </div>
          <div className="mot-dsc-hero__text d-flex flex-column align-items-center mx-auto">
            <Fade top>
              <h1 className="text-center text-capitalize mot-design-hero-header blue-text">
                Become a more professional <br />
                Designer in 4 months
              </h1>
            </Fade>
            <Fade bottom>
              <p className="mot-dsc-hero__subheader text-center">
                Single page designs don't make a professional. Start
                participating in weekly real Design Challenges sent to your
                email to scale your porfolio !
              </p>
            </Fade>
          </div>
          {challengeUser && challengeUser.name ? (
            // <p className="text-center py-3">Welcome, {challengeUser.name}</p>
            <div className="d-flex justify-content-center">
              <Link to="/challenges/dashboard">
                <button
                  className="design-job mot-design-jobs-button form-submit"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  Continue as {challengeUser.name}
                  <Lines className="design-job-lines" />
                </button>
              </Link>
            </div>
          ) : (
            <Col
              md={9}
              className="align-self-center mot-dsc-hero__challengeForm"
            >
              <Form className="d-flex align-items-center mot-dsc-form justify-content-between">
                <Col
                  md={4}
                  className="d-flex justify-content-center w-100 px-0"
                >
                  <Form.Group className="mb-0 w-100" controlId="formBasicEmail">
                    <Form.Control
                      type="name"
                      className="mot-dsc-hero__input"
                      value={name}
                      onChange={(e) =>
                        setFormDetails({ ...formDetails, name: e.target.value })
                      }
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col
                  md={4}
                  className="d-flex justify-content-center w-100 px-0"
                >
                  <Form.Group
                    className="mb-0 w-100"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="email"
                      className="mot-dsc-hero__input"
                      value={email}
                      required
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          email: e.target.value,
                        })
                      }
                      placeholder="Email Address"
                    />
                  </Form.Group>
                </Col>

                <Col
                  md={4}
                  className="d-flex w-100 px-0 justify-content-center position-relative"
                >
                  <button
                    className="design-job mot-design-jobs-button form-submit"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Get Started Right Away
                    <Lines className="design-job-lines" />
                  </button>
                  {loading && (
                    <div className="d-flex ml-1 align-items-center">
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        style={{ color: "#134A7C" }}
                        role="status"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </Col>
              </Form>
            </Col>
          )}
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center position-absolute">
              {error && (
                <div className="mt-2 w-100">
                  <Alert variant="danger">{errorValue}</Alert>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
