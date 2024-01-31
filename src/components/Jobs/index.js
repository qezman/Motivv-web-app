import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./style.css";
// import { jobs } from "./statis-data.json";
import JobsCard from "../JobsCard/index";
import CreateProfile from "../CreateProfile";
import useFetch from "../../hooks/useFetch";
import Loader from "../../assets/loader.mp4";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const jobsType = [
    "choose job type",
    "Full Time",
    "Remote",
    "Part Time",
    "Contract",
  ];
  const { response, loading } = useFetch("fetchJobs.php");
  const jobsList =
    response && response.data && response.data.jobs
      ? response.data.jobs.filter(
          (item) =>
            (search === "" ||
              item.title.toLowerCase().includes(search.toLowerCase())) &&
            (location === "" ||
              item.location.toLowerCase().includes(location.toLowerCase())) &&
            (jobType === "" || item.type.includes(jobType))
        )
      : [];
  return (
    <div className="mot-landing-page-blue">
      <div className="mot-landing-page">
        <Container className="m-auto">
          <Row className="justify-content-center">
            <Col md={10}>
              <Row className="justify-content-between align-items-center px-3 mot-apply-top">
                <span>
                  <Link to="/">
                    <img src={Logo} alt="" className="logo" />
                  </Link>
                </span>
              </Row>
              <Row className="pt-5">
                <Col md={8} className="mot-text-color">
                  <div className="mot-catch-phrase">
                    Recommended Jobs <br />
                    that match your <br />
                    criteria and skill
                  </div>
                </Col>
                <Col md={4} className="mot-apply-instruction">
                  <h6 className="white-text small-texts">Suggested Tips:</h6>
                  <div className="white-text pt-2 d-flex">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="pl-3">
                      Tidy your portfolio and social profile
                    </div>
                  </div>
                  <div className="white-text pt-2 d-flex">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="pl-3">
                      Start your application with a good subject
                    </div>
                  </div>
                  <div className="white-text pt-2 d-flex">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="pl-3">
                      Apply with a brief cover letter
                    </div>
                  </div>
                  <div className="white-text pt-2 d-flex">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="pl-3">Be precise, direct and honest</div>
                  </div>
                  <div className="white-text pt-2 d-flex">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="pl-3">Crosscheck for errors</div>
                  </div>
                  <div className="white-text pt-2 d-flex">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="pl-3">Goodluck!</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mot-jobs-list">
        <Container>
          <Row className="align-items-baseline px-4">
            <Col md={3}>
              <div className="mot-inputs">
                <input
                  type="text"
                  placeholder="Enter a location"
                  className="mot-keyword-search"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </Col>
            <Col md={3}>
              <div className="mot-inputs">
                <Form.Control
                  className="job-type-dropdown"
                  as="select"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  {jobsType.map((type, index) => {
                    if (type === "choose job type") {
                      return (
                        <option key={index} value="">
                          {type}
                        </option>
                      );
                    }
                    return (
                      <option value={type} key={index}>
                        {type}
                      </option>
                    );
                  })}
                </Form.Control>
              </div>
            </Col>
            <Col md={6}>
              <div className="mot-inputs">
                <input
                  type="text"
                  placeholder="Enter a title"
                  className="mot-keyword-search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            {loading ? (
              <div className="w-100 d-flex align-items-center justify-content-center">
                <video
                  src={Loader}
                  autoPlay
                  muted
                  loop
                  height="200px"
                  width="200px"
                />
              </div>
            ) : jobsList.length > 0 ? (
              jobsList.map((job, i) => {
                const {
                  date,
                  name,
                  logo,
                  type,
                  title,
                  location,
                  instructions,
                  email,
                } = job;
                return (
                  <JobsCard
                    key={i}
                    dateposted={date}
                    companyName={name}
                    jobLogo={logo}
                    jobLocation={location}
                    jobType={type}
                    jobName={title}
                    jobApplyLink={instructions}
                    email={email}
                  />
                );
              })
            ) : (
              <p className="d-block mx-auto">No Job Post Available</p>
            )}
          </Row>
        </Container>
      </div>
      <CreateProfile />
      <Footer />
    </div>
  );
};

export default Jobs;
