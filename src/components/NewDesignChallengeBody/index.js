import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/motivv-logo.png";
// import pattern from "../../assets/pattern.png";
import { URL } from "../../constants";
import "./styles.css";
import Loader from "../../assets/loader.mp4";

const url = `${URL}/fetchChallenge.php`;

const NewDesignChallengeBody = () => {
  const [challenges, setChallenge] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      Axios.get(url)
        .then((res) => {
          setLoading(false);
          let chs = res.data.challenges;
          setChallenge(chs ? chs : []);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <Container className="mot-designChallenge-section">
      <Row className="justify-content-center align-items-center position-relative">
        <Col
          md={11}
          className="d-flex flex-column my-auto justify-content-center align-items-center px-0"
        >
          <div className="w-100 d-flex align-items-baseline">
            <div className="mb-2">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={11} className="d-flex flex-column my-auto px-0">
          <h3 className="challenge-h3">
            Good afternoon, <span className="user">User</span>
            <span aria-label="" role="img">
              👋
            </span>
          </h3>
          <Row>
            {loading ? (
              <div className="d-flex w-100 align-items-center justify-content-center">
                <video
                  src={Loader}
                  autoPlay
                  muted
                  loop
                  height="200px"
                  width="200px"
                />
              </div>
            ) : challenges.length > 0 ? (
              challenges.map((ch, i) => (
                <Col key={i} md="4" sm="12">
                  <img
                    src={`${URL}/upload/${ch.image}`}
                    className="mb-4 challengePic"
                    alt="ch.title"
                  />
                </Col>
              ))
            ) : (
              <p className="text-center d-block mt-4">
                No Challenges has been created yet!
              </p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NewDesignChallengeBody;
