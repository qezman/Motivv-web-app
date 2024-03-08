import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Helmet from "../../Helmet/index";
import { CREATE_CLIENT } from "../../../constants";
import "./style.css";
import Footer from "../../Footer/index";
import { information } from "./designersData";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

// Define your API URL
const API_URL = "https://backend-production-fc84.up.railway.app/api/designers";

const Designers = () => {
  const [designers, setDesigners] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleItems, setVisibleItems] = useState(28);

  useEffect(() => {
    // Function to fetch designers from the API
    const fetchDesigners = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        console.log("Designers fetched:", response.data);
        setDesigners(response.data.data);
      } catch (error) {
        console.error("Error fetching designers:", error);
      }
    };

    fetchDesigners();
  }, []);

  // Filter designers based on the selected category
  const filteredDesigners = React.useMemo(() => {
    // First filter by the selected category
    let newDesigners = designers.filter((item) => {
      if (!selectedCategory) return true;

      if (item.rating === selectedCategory) return true;
      return false;

      // // Customize the condition based on your category logic
      // if (selectedCategory === "Recommended") {
      //   return item.isRecommended;
      // } else if (selectedCategory === "Premium Profile") {
      //   return item.isPremium;
      // }

      // return true;
    });

    // if searchQuery
    if (searchQuery && searchQuery.trim() !== "") {
      newDesigners = newDesigners.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.skill1.some((tool) =>
            tool.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          item.paragraph?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.rate?.toString().includes(searchQuery)
      );
    }

    return newDesigners;
  }, [selectedCategory, designers, searchQuery]);

  console.log({ filteredDesigners });

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    console.log("Selected category:", category);
  };

  // const filteredInformation = information.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.tools.some((tool) => tool.toLowerCase().includes(searchQuery.toLowerCase())) ||
  //     item.paragraph.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.rate.toString().includes(searchQuery)
  // );

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  const handleViewMore = () => {
    // Increment the number of visible items
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 28);
  };
  return (
    <>
      <Helmet
        page="edit"
        title="Edit your Profile Card"
        description="Customize your card,  Input your name and Job Headline, Upload your avatar, Include your portfolio link, Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Edit profile"
      />
      <div>
        <div className="mot-landing-page-blue">
          <div className="mot-landing-page">
            <Container className="m-auto">
              <Row className="justify-content-center">
                <Col md={10}>
                  <div>
                    <Link to="/">
                      <img src={Logo} alt="" className="logo" />
                    </Link>
                  </div>
                  <Row className="pt-5">
                    <Col md={8} className="mot-text-color">
                      <div className="mot-catch-phrase">
                        Explore profiles of <br />
                        designers and select <br />
                        your creative knight.
                      </div>
                    </Col>
                    <Col md={4} className="mot-apply-instruction">
                      <h6 className="white-text small-texts">How it works:</h6>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Select preferred talent</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">
                          Generate talent profile snapshot
                        </div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Connet to our admin</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Get talent contact</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Continue with negotiation</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Hire creative</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* main contents */}
        <section className="main-content">
          {/* navigations */}
          <article className="navigations">
            <button
              onClick={() => handleCategorySelect("recommended")}
              className="recommended"
            >
              <img className="icon" src="/assets/star.png" alt="" />
              <p>Recommended</p>
            </button>

            <button
              onClick={() => handleCategorySelect("premium")}
              className="premium"
            >
              <img className="icon" src="/assets/crown.png" alt="" />
              <p>Premium Profile</p>
            </button>

            <div className="search">
              <img className="icon" src="/assets/Vector.svg" alt="" />
              <input
                className="search-bar"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </article>

          {/* body section */}
          <article className="card-grid">
            {filteredDesigners.slice(0, visibleItems).map((item, index) => (
              <div className="info-cont" key={index}>
                <img
                  className="info-image"
                  src={item.avatar?.url || "/assets/pending-img.png"}
                  alt={item.name}
                />
                <h5 className="info-name">{item.name}</h5>
                <p className="info-role">{item.role}</p>
                <div className="info-tools">
                  {item.skill1.map((tool, toolIndex) => (
                    <p className="tool" key={`${item.id}-${toolIndex}`}>
                      {tool}
                    </p>
                  ))}
                </div>
                <p className="info-para">{item.paragraph}</p>
                <p className="info-rate">Rate: NGN {item.rate}</p>
                <p className="view-btn">View Portfolio</p>
              </div>
            ))}
          </article>

          <article className="view-and-arrow">
            {visibleItems < filteredDesigners.length && (
              <div className="view-more-btn" onClick={handleViewMore}>
                View more <p className="double-arrow">>></p>
              </div>
            )}
          </article>

            <p
              className={`double-arrow ${isRotated ? "rotated" : ""}`}
              onClick={toggleRotation}
            ></p>
        </section>

        <Footer />
      </div>
    </>
  );
};
export default Designers;
