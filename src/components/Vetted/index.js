import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import Fade from "react-reveal";
import "./styles.css";
import { URL } from "../../constants";
import { ValidateEmail } from "../../constants";
import { useHistory } from "react-router-dom";

let VettedCard =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594318728/Motivv/Vetted_card_vms1pd.png";
let Card1 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717120/Motivv/New%20folder/Group_64_ypkmq5.png";
let Card2 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717118/Motivv/New%20folder/img4_roz6ty.png";
let Card3 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717118/Motivv/New%20folder/img2_vkjnaf.png";
let Card5 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717118/Motivv/New%20folder/img_wtvc2t.png";
let Card6 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/img1_gsuywo.png";
let Card7 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/Group_63_w91syb.png";
let Card8 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/Group_61_zxvxsd.png";
let Card9 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717117/Motivv/New%20folder/Group_62_wc9iii.png";
let Card10 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717116/Motivv/New%20folder/Group_60_ilanw2.png";
let Card11 =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594717116/Motivv/New%20folder/Group_59_bqbr6g.png";

// const url = `${URL}/processClient.php/`;
const url = `${URL}/`;

export default function Vetted({ props }) {
  const history = useHistory();
  const bannerSettings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: "none",
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const user = useContext(UserContext);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit called");
    setLoading(true);

    if (!email) {
      setError(true);
      setLoading(false);
      setErrorValue("Please fill the Email field");
    } else if (!ValidateEmail(email)) {
      setLoading(false);
      setError(true);
      setErrorValue("You have entered an invalid email address!");
    } else {
      try {
        const response = await axios.get(url, { params: { email: email } });
        console.log("Response from server:", response);
        console.log("Response data:", response.data);

        if (response.data.length > 0) {
          console.log("Worked!!");
          setError(false);
          Cookies.set("user-auth", email, { expires: 1 });
          user.setUser(Cookies.get("user-auth"));
          setUserPrompt("Request successful! Redirecting...");
          setSuccess(true);

          setTimeout(() => {
            props.history.push("/designers");
          }, 3000);
        } else {
          setError(true);
          setErrorValue("No designers found for the given email");
        }
      } catch (error) {
        console.error("Error during axios.get:", error);
        setError(true);
        setErrorValue("An error occurred during the request");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Request successful! Redirecting...");
      const redirectTimeout = setTimeout(() => {
        setSuccess(false);
        setUserPrompt("");
        history.push("/designers");
      }, 3000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [success, history]);

  return (
    <div className="mot-vetted-section" id="clients">
      <Container>
        <Row>
          <Col md={12}>
            <Row className="justify-content-md-center">
              <Col
                md={4}
                className="mot-text-color d-none d-sm-none d-md-block"
              >
                <img
                  src={VettedCard}
                  alt="placeholder card"
                  className="mot-placeholder-image "
                />
              </Col>
              <Col
                md={4}
                className="mot-text-color d-block d-sm-block d-md-none"
              >
                <Fade
                  delay={5000}
                  className="mot-placeholder-image"
                  id="vetted"
                >
                  <Slider {...bannerSettings}>
                    <div>
                      <img
                        src={Card1}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card2}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card3}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card5}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card6}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card7}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card8}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card9}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card10}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                    <div>
                      <img
                        src={Card11}
                        alt="placeholder card"
                        className="mot-placeholder-image"
                      />
                    </div>
                  </Slider>
                </Fade>
              </Col>

              <Col md={6} className="">
                <h1 className="mot-access-section-header">
                  Already vetted designers for your work
                </h1>
                <div className="pt-4 small-texts mot-access-section-caption">
                  We enlist and recommend designers that meet your skill
                  requirements. Check creative’s portfolio, negotiate and hire.
                </div>
                <div className="mot-explore-input-section">
                  <form action="">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Input email to book a designer"
                      className=""
                    />
                    <div>
                      <button
                        disabled={loading}
                        style={{
                          opacity: loading ? "0.7" : "1",
                          cursor: loading ? "not-allowed" : "pointer",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        onClick={handleSubmit}
                        type="submit"
                      >
                        Book a designer
                      </button>

                      {error && (
                        <div className="mt-2 w-80">
                          <Alert variant="danger">{errorValue}</Alert>
                        </div>
                      )}
                      {/* {success && (
                        <div className="mt-2 w-80">
                          <Alert variant="success">
                            Request successful! You are being redirected...
                          </Alert>
                        </div>
                      )} */}
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
