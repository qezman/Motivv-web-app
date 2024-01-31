import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Dashboard.css";
import { Row, Col, Container } from "react-bootstrap";
import logoutImg from "../../assets/logout.png";
import Cookies from "js-cookie";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
const Dashboard = (props) => {
  return (
    <div className="mot-db-overflow">
      <div className="mot-landing-page-blue">
        <div className="mot-landing-page pb-3 pt-5">
          <Row className="p-left">
            <Container>
              <div>
                <Link to="/">
                  {" "}
                  <img src={Logo} alt="" className="mt-5 logo" />{" "}
                </Link>
              </div>
              <Row className="pt-5">
                <Col md={1} />
                <Col md={10} className="d-flex">
                  <div className="bts-db-options-wrapper mr-auto white-texts">
                    <NavLink to="/dashboard" activeClassName="current">
                      <div className="bts-db-options text-center">
                        <div className="b7 blueText">Dashboard</div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/pending"
                      activeClassName="current"
                      className="line"
                    >
                      <div className="bts-db-options text-center">
                        <div className="b7 blueText">Pending</div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/approve"
                      activeClassName="current"
                      className="line"
                    >
                      <div className="bts-db-options text-center">
                        <div className="b7 blueText">Approved</div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/clients"
                      activeClassName="current"
                      className="line"
                    >
                      <div className="bts-db-options text-center">
                        <div className="b7 blueText">Clients</div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/design-challenge"
                      activeClassName="current"
                      className="line"
                    >
                      <div className="bts-db-options text-center">
                        <div className="b7 blueText">Design Challenge</div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/all-jobs"
                      activeClassName="current"
                      className="line"
                    >
                      <div className="bts-db-options text-center">
                        <div className="b7 blueText">jobs</div>
                      </div>
                    </NavLink>
                  </div>
                  <span
                    onClick={() => {
                      Cookies.remove("admin-auth");
                      props.history.push("/admin");
                    }}
                    className="pointer"
                  >
                    <p className="b7 d-inline white-text mr-2">Log out</p>
                    <img src={logoutImg} alt="log out" />
                  </span>
                </Col>
                <Col md={1} />
              </Row>
            </Container>
          </Row>
        </div>
      </div>

      <Container className="pt-4">{props.children}</Container>
    </div>
  );
};

export default Dashboard;
