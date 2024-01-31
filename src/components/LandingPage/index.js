import React, { useContext } from "react";
import { Container, Row, Col, Modal, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal";
import party from "../../assets/party.svg";
import post from "../../assets/post.svg";
import postImg from "../../assets/magic.svg";

import "./styles.css";
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";
let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
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

export default function LandingPage() {
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

  const { show, setShow } = useContext(UserContext);

  const onHide = () => {
    setShow(false);
    Cookies.set("show-modal", "true");
  };
  return (
    <>
      <Modal
        size="md"
        contentClassName="minH-100"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Body className="p-4">
          <div className="px-3 py-4 mb-4">
            <h4 className="mb-3 font-weight-bolder">What’s new</h4>
            <p>
              Our first release was solely connecting prospective clients to
              vetted designers. Our new update brings much more than that!
            </p>
            <div className="bottom-border mt-4" />
          </div>
          <Card className="card-cus mb-3" body>
            <div className="d-flex align-items-start">
              <img className="mr-2" src={party} alt="" />
              <div>
                <h5 className="font-weight-bold">Design Challenge</h5>
                <p>
                  We’ve made it possible for designers to get hands on real
                  design briefs to leverage their skills and build a better
                  portfolio show-proof.
                </p>
              </div>
            </div>
          </Card>
          <Card className="card-cus mb-3" body>
            <div className="d-flex align-items-start">
              <img className="mr-2" src={post} alt="" />
              <div>
                <h5 className="font-weight-bold">Post Jobs</h5>
                <p>
                  Now, clients can post jobs with ease and find excellent
                  designers. All without paying anything for job posting.
                </p>
              </div>
            </div>
          </Card>
          <div className="d-flex justify-content-center">
            <span className="got-it" onClick={onHide}>
              Got It
            </span>
          </div>
        </Modal.Body>
      </Modal>
      <div className="mot-landing-page-blue">
        <div className="mot-explore-page">
          <Container className="m-auto">
            <Row className="justify-content-center position-relative">
              <Col md={10}>
                <div>
                  <Link to="/">
                    <img src={Logo} alt="" className="logo" />
                  </Link>
                </div>
                <Row className="pt-5">
                  <Col md={8} className="mot-text-color mot-text-center">
                    <Fade delay={1000} duration={500} bottom>
                      <h1 className="mot-catch-phrase">
                        We connect prospective clients to vetted designers.
                      </h1>
                    </Fade>
                    <Fade delay={1800} duration={1500} bottom>
                      <h6 className="pt-3 pb-4 white-texts small-texts mot-catch-phrase-sub">
                        Connect with the best designers in the industry – Engage
                        with clients and Get hired by creating a profile with us
                      </h6>
                    </Fade>
                    <Fade bottom>
                      <div>
                        <Link to="/apply" className="mot-apply-button">
                          Create a Profile Card
                        </Link>
                      </div>
                    </Fade>
                  </Col>
                  <Col
                    md={4}
                    className="justify-content-center d-none d-md-block"
                  >
                    <Fade delay={5000} className="">
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
                </Row>
              </Col>
              <div className="post-job">
                <Link to="/post-job" className="mot-post-button">
                  <img src={postImg} alt="" className="mr-2" /> Post Job
                </Link>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
