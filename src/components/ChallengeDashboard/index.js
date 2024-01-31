import React, { useState } from "react";
import { Link } from "react-router-dom";
//import './Dashboard.css'
import { Col, Row } from "react-bootstrap";
//import Cookies from 'js-cookie'

import Logo from "../../assets/motivv-logo.png";
import { PostImg } from "./PostImg";

import "./challengeDashboard.css";
import { ChallengeDropDown } from "../ChallengeDropdown";
import { AdContainer } from "../AdContainer";
import { useChallenge } from "../ChallengeContext";

const ChallengeDashboard = (props) => {
  const [dropdown, setDropdown] = useState(true);
  const { challengeUser } = useChallenge();
  return (
    <div className="mot-dsc--overflow">
      <div className="w-100 mot-dsc--navbar pb-3 pt-2 d-flex justify-content-between align-items-baseline">
        <div>
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <Row className="flex-container align-items-center w-auto">
          <div className="mot-dsc--jobs-btn">
            <div className="dsc--jobs-btn">
              <Link to="/jobs" className="mot-dsc--jobs-button">
                <PostImg className="mr-2" /> Design Jobs
              </Link>
            </div>
          </div>
          <div
            className="mot-dsc--user-rounded text-capitalize"
            onClick={() => setDropdown(!dropdown)}
          >
            <p>{challengeUser ? challengeUser.name.charAt(0) : "M"}</p>
          </div>
        </Row>
      </div>
      <ChallengeDropDown state={dropdown} />
      <Row className="mot-dsc--content">
        <Col md={9} className="mot-dsc--container mx-sm-3">
          {props.children}
        </Col>
        <Col md={3} className="mot-dsc-ad-container d-flex h-100">
          <AdContainer />
        </Col>
      </Row>
    </div>
  );
};

export default ChallengeDashboard;
