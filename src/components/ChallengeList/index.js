import React, { useContext, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Fade from "react-reveal";
import { ChallengeContext, useChallenge } from "../ChallengeContext";
import { ChallengeCard } from "../ChallengeCard";

import ChallengeDashboard from "../ChallengeDashboard/";
import Loader from "../../assets/loader.mp4";

import "./challengeList.css";

const DesignChallengeList = (props) => {
  const { challenges, loading } = useContext(ChallengeContext);
  const [industry, setIndustry] = useState("");
  const [track, setTrack] = useState("");
  const { challengeUser } = useChallenge();
  const challengeTracks = [
    "select track",
    "Digital Design",
    "Graphic Design",
    "Product Design",
    "UI Design",
    "Illustration",
    "UX Design",
    "Visual Identity",
  ];
  const challengeIndustries = [
    "select industry",
    "Education",
    "Fintech",
    "Media",
    "Medical",
    "Recruitment",
    "Sport",
    "Transport and Logistics",
  ];

  const challengeList = challenges
    ? challenges.filter(
        (challenge) =>
          (track === "" || challenge.track.includes(track)) &&
          (industry === "" || challenge.industry.includes(industry))
      )
    : [];
  let myDate = new Date();
  let hrs = myDate.getHours();
  // console.log(challengeList);
  return (
    <ChallengeDashboard {...props}>
      <h1 className="welcome-user">
        Good{" "}
        {hrs < 12
          ? "morning"
          : hrs >= 12 && hrs <= 17
          ? "afternoon"
          : "evening"}
        , <span className="text-bold">{challengeUser.name}</span>
        👋
      </h1>
      <Fade className="">
        <Row className="my-4 mot-dsl--select">
          <Col md={6} className="my-0 my-md-4 mot-dsl--select-item">
            <div className="mot-inputs">
              <Form.Control
                className="track-type-dropdown"
                as="select"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
              >
                {challengeTracks.map((type, index) => {
                  if (type === "select track") {
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
          <Col md={6} className="my-0 my-md-4 mot-dsl--select-item">
            <div className="mot-inputs">
              <Form.Control
                className="industry-type-dropdown"
                as="select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                {challengeIndustries.map((type, index) => {
                  if (type === "select industry") {
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
        </Row>
        <Container className="mot-challenge-section--list position-relative">
          {loading ? (
            <p></p>
          ) : (
            <h5 className="brief-amount">
              Brief ({`${challenges?.length > 0 ? challenges?.length : "0"}`})
            </h5>
          )}
          <Row className="mot-challengeList p-0 m-0">
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
            ) : challengeList.length ? (
              // <Col
              //   md={12}
              //   className="d-flex flex-column justify-content-around px-0"
              // >
              <Row className="m-0 p-0">
                {challengeList.map((challenge) => {
                  const {
                    id,
                    title,
                    body,
                    attempts,
                    track,
                    industry,
                    deadline,
                    tags,
                  } = challenge;
                  return (
                    <ChallengeCard
                      key={id}
                      id={id}
                      name={title}
                      description={body}
                      attempts={attempts}
                      track={track}
                      industry={industry}
                      deadline={deadline}
                      tags={tags ? JSON.parse(tags) : null}
                    />
                  );
                })}

                {/* </Col> */}
              </Row>
            ) : (
              <p>
                No Challenges{" "}
                {track ? `for ${track}` : industry ? `for ${industry}` : ""} has
                been created yet! Wait for a few time, some challenges will be
                inputted
              </p>
            )}
          </Row>
        </Container>
      </Fade>
    </ChallengeDashboard>
  );
};

export default DesignChallengeList;
