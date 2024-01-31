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

const url = `${URL}/processClient.php/`;
export default function Vetted({ props }) {
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
  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        const response = await axios.post(url, { email });

        if (response.data.success === 1) {
          console.log("Worked!!");
          setError(false);
          Cookies.set("user-auth", email, { expires: 1 });
          user.setUser(Cookies.get("user-auth"));
          props.history.push("/explore");
        } else {
          setError(true);
          setErrorValue(response.data.msg);
        }
      } catch (error) {
        console.error("Error during axios.post:", error);
        setError(true);
        setErrorValue("An error occurred during the request");
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorValue("");
    }, 4000);
  }, [error]);
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
                  {!user.user && (
                    <form action="">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className=""
                      />
                      <div>
                        <button
                          disabled={loading}
                          style={{
                            opactiy: loading ? "0.7" : "1",
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                          onClick={handleSubmit}
                          type="submit"
                        >
                          Proceed to explore
                        </button>
                        {error && (
                          <div className="mt-2 w-80">
                            <Alert variant="danger">{errorValue}</Alert>
                          </div>
                        )}
                      </div>
                    </form>
                  )}
                  {user.user && (
                    <Link to="/explore">
                      <button className="explore-btn">Explore Talents</button>
                    </Link>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
