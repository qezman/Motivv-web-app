import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import Fade from "react-reveal";
import Footer from "../Footer";
import Card from "./Card";
import "./styles.css";
import usePaystackPayment from "../../hooks/usePaystack";
import useFetch from "../../hooks/useFetch";
import Cookies from "js-cookie";
import axios from "axios";
import Loader from "../../assets/loader.mp4";
import Sticky from "react-stickynode";
import { URL } from "../../constants";

const urlUpdate = `${URL}/upgradeClient.php/`;
export default function ExploreList() {
  const { response, loading } = useFetch("fetchDesigners.php");
  const [recommended, setRecommended] = useState(true);
  const [hide, setHide] = useState(true);
  const [search, setSearch] = useState("");
  const [premium, setPremium] = useState(false);
  const [recommendedList, setRecommendedList] = useState([]);
  const [premiumList, setPremiumList] = useState([]);
  const divRef = useRef(null);

  useEffect(() => {
    if (!loading && response.data.applicants) {
      let filteredRecommended = response.data.applicants
        .filter((item) => item.status === "approved")
        .filter((item) => parseInt(item.startprice.replace(/,/g, "")) < 45000);
      let filteredPremium = response.data.applicants
        .filter((item) => item.status === "approved")
        .filter((item) => parseInt(item.startprice.replace(/,/g, "")) >= 45000);
      setPremiumList(
        filteredPremium.length > 8
          ? filteredPremium.slice(0, 8)
          : filteredPremium
      );
      setRecommendedList(filteredRecommended);
    }
  }, [loading, response, hide]);

  useEffect(() => {
    if (Cookies.get("approved")) {
      let obj = JSON.parse(Cookies.get("approved"));
      if (
        obj.reference &&
        obj.trans &&
        obj.status === "success" &&
        obj.message === "Approved"
      ) {
        setHide(false);
      }
    }
  }, []);

  const config = {
    key: "pk_live_449b9d42a092e9f558cf0d2c4562f7c49efb54ba",
    email: Cookies.get("user-auth"),
    amount: 1000 * 100,
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Email",
          variable_name: "name",
          value: Cookies.get("user-auth"),
        },
      ],
    },
  };
  const initializePayment = usePaystackPayment(config);
  const onSuccess = (res) => {
    axios
      .post(urlUpdate, {
        refID: res.reference,
        email: Cookies.get("user-auth"),
        package: "premium",
      })
      .then(() => {
        Cookies.set("approved", res, {
          expires: 1,
        });
        setHide(false);
      });
  };
  const handlePayment = () => {
    initializePayment(onSuccess);
  };
  return (
    <div>
      <Container className="px-0">
        <Row className="justify-content-center mot-explore-list-container">
          <Col id="content" md={10}>
            <Sticky
              style={{ backgroundColor: "#fff", zIndex: "2232" }}
              bottomBoundary="#content"
              enabled={true}
              top={0}
            >
              <div>
                <div ref={divRef} className="mot-explore-categories">
                  <span
                    onClick={() => {
                      setRecommended(true);
                      setPremium(false);
                    }}
                    className={recommended ? "d-style active" : "d-style"}
                  >
                    Recommended
                  </span>

                  <span
                    onClick={() => {
                      setRecommended(false);
                      setPremium(true);
                    }}
                    className={premium ? "d-style active" : "d-style"}
                  >
                    Premium
                  </span>
                </div>
              </div>
            </Sticky>
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8">
                <input
                  className="search-input"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search title or skill"
                />
              </div>
              <div className="col-md-2" />
            </div>
            {recommended && (
              <Fade>
                <Row className="px-0">
                  {loading ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <video
                        src={Loader}
                        autoPlay
                        muted
                        loop
                        height="200px"
                        width="200px"
                      />
                    </div>
                  ) : recommendedList.length > 0 ? (
                    recommendedList
                      .sort(() => Math.random() - 0.5)
                      .filter(
                        (item) =>
                          search === "" ||
                          item.headline
                            .toLowerCase()
                            .includes(search.toLowerCase())
                      )
                      .map((item, i) => (
                        <Card
                          rating={item.rating}
                          key={i}
                          avatar={item.avatar}
                          name={item.name}
                          headline={item.headline}
                          skill1={item.skill1}
                          skill2={item.skill2}
                          skill3={item.skill3}
                          skill4={item.skill4}
                          start={item.startprice}
                          end={item.endprice}
                          link={item.link}
                          phone={item.phone}
                        />
                      ))
                  ) : (
                    <p className="d-block mx-auto">
                      {" "}
                      No Recommended Designers Available
                    </p>
                  )}
                </Row>
              </Fade>
            )}
            {premium && (
              <Fade>
                <Row className="px-0 position-relative">
                  {hide && (
                    <div className=" position-absolute bottom-0 w-100 dFade" />
                  )}
                  {loading ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <video
                        src={Loader}
                        autoPlay
                        muted
                        loop
                        height="200px"
                        width="200px"
                      />
                    </div>
                  ) : premiumList.length > 0 ? (
                    premiumList
                      .filter(
                        (item) =>
                          search === "" ||
                          item.headline
                            .toLowerCase()
                            .includes(search.toLowerCase())
                      )
                      .sort(() => Math.random() - 0.5)
                      .map((item, i) => (
                        <Card
                          rating={item.rating}
                          key={i}
                          avatar={item.avatar}
                          name={item.name}
                          headline={item.headline}
                          skill1={item.skill1}
                          skill2={item.skill2}
                          skill3={item.skill3}
                          skill4={item.skill4}
                          start={item.startprice}
                          end={item.endprice}
                          link={item.link}
                          phone={item.phone}
                          hide={hide}
                        />
                      ))
                  ) : (
                    <p className="d-block mx-auto">
                      {" "}
                      No Premium Designers Available
                    </p>
                  )}
                </Row>
                <div
                  style={{ display: !hide ? "none" : "block" }}
                  className="black-texts text-center pt-5"
                >
                  <h3 className="mot-upgrade-text pb-1">
                    Upgrade to Pro for <br />
                    full access
                  </h3>
                  <h6 className="pb-4 mot-ccount-instructions">
                    Unlock one-time access to view profile and hire elite
                    creatives.
                  </h6>
                  <Fade delay={500} duration={1000}>
                    <button
                      onClick={handlePayment}
                      className="mot-unlock-button"
                    >
                      Unlock for <b>NGN 1,000</b>
                    </button>
                  </Fade>
                </div>
              </Fade>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
