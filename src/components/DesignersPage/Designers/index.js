import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Helmet from "../../Helmet/index";
import { CREATE_CLIENT } from "../../../constants";
import "./style.css";
import Footer from "../../Footer/index";
import { information } from "./designersData";
import PaymentForm from "./PaymentForm";

// import postImg from "/assets/magic.svg";
import JobPostPage from "../../JobPostPage";
import Modal from "react-modal";

import { UserContext } from "../../UserContext";
import Cookies from "js-cookie";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

// Define your API URL
// const API_URL = "https://backend-production-fc84.up.railway.app/api/designers";
const API_URL = "https://backend-production-fc84.up.railway.app/api/client";

const Designers = () => {
  const styles = window.innerWidth >= 760 ? { color: "white" } : {};

  const [designers, setDesigners] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleItems, setVisibleItems] = useState(28);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isRecommendedSelected, setIsRecommendedSelected] = useState(false);
  const [isPremiumSelected, setIsPremiumSelected] = useState(false);

  const [emailInput, setEmailInput] = useState("");

  const { show, setShow } = useContext(UserContext);

  const [email, useEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onHide = () => {
    console.log("Hiding modal...");
    setShow(false);
    Cookies.set("show-modal", "true");
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePostJobClick = () => {
    setIsModalOpen(true);
    setIsDropdownVisible(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  document.body.style.overflow = isModalOpen ? "hidden" : "auto";

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  // useEffect(() => {
  //   const createClient = async () => {
  //     try {
  //       const existingClient = designers.find(
  //         (client) => client.email === "example@example.com"
  //       );

  //       if (existingClient) {
  //         console.log("Client already exists:", existingClient);
  //         return;
  //       }

  //       const response = await axios.post(API_URL, {
  //         email: "example@example.com",
  //       });

  //       console.log("Response from server:", response);

  //       if (response.status === 200 || response.status === 201) {
  //         console.log("Client created successfully!");
  //         setDesigners([...designers, response.data.data]);
  //         console.log("Request successful! Redirecting...");
  //       } else {
  //         console.error(
  //           "Failed to create client. Status code:",
  //           response.status
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error creating client:", error);
  //     }
  //   };

  //   createClient();
  // }, [designers]);

  // Filter designers based on the selected category

  useEffect(() => {
    const fetchUserEmailAndCreateClient = async () => {
      try {
        // Make an HTTP request to fetch the user's email
        const response = await axios.get("/api/user/email");
        const userEmail = response.data.email;

        // Update the state with the user's email
        setUserEmail(userEmail);

        // Check if a client with the same email already exists locally
        const existingClient = designers.find(
          (client) => client.email === userEmail
        );

        if (existingClient) {
          console.log("Client already exists:", existingClient);
          return;
        }

        // If the client doesn't exist locally, proceed with the POST request
        const createResponse = await axios.post(API_URL, {
          email: userEmail,
        });

        console.log("Response from server:", createResponse);

        // Check if the response status is 200 (OK) or 201 (Created)
        if (createResponse.status === 200 || createResponse.status === 201) {
          console.log("Client created successfully!");
          // Update the local state with the new client data
          setDesigners([...designers, createResponse.data.data]);
          // Redirect or perform any other action after successful creation
          console.log("Request successful! Redirecting...");
        } else {
          console.error(
            "Failed to create client. Status code:",
            createResponse.status
          );
        }
      } catch (error) {
        console.error("Error fetching user email or creating client:", error);
      }
    };

    // Call the function to fetch user email and create client when the component mounts
    fetchUserEmailAndCreateClient();
  }, []);

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

  const handleCategorySelect = (category) => {
    // Toggle the state of each category only if it's not already selected
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setIsRecommendedSelected(category === "recommended");
      setIsPremiumSelected(category === "premium");
      setIsPaymentFormVisible(category === "premium");
    }
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
            {/* nav section */}
            <section className="flex-headers">
              <div className="logo-links-and-button">
                <div>
                  <Link to="/">
                    <img src={Logo} alt="" className="logo" />
                  </Link>
                </div>
                <div className="nav-links">
                  <li>
                    <Link style={styles} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link style={styles} to="/designers">
                      Designers
                    </Link>
                  </li>

                  <li className="jobs">
                    <Link to="/jobs" style={styles}>
                      Jobs
                    </Link>
                    <img
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer",
                        transform: isDropdownVisible
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      src="/assets/dropdown.svg"
                      alt="dropdown"
                      onClick={toggleDropdown}
                    />
                    {isDropdownVisible && (
                      <div className="dropdown-texts">
                        <ul>
                          <li
                            onClick={handlePostJobClick}
                            className="menu-text-one"
                          >
                            Post a job
                          </li>
                          <div />
                          <Link to={"/jobs"}>
                            <li className="menu-text">Find jobs</li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li>
                    <Link style={styles} to="/challenges">
                      Design Challenge
                    </Link>
                  </li>
                  <li>
                    <Link style={styles} to="/resources">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link style={styles} to="/university">
                      University
                    </Link>
                  </li>
                </div>

                <button
                  className={`post-job-btn ${isHovered ? "hovered" : ""}`}
                >
                  <Link
                    // to="/post-job"
                    className="post-job-text"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handlePostJobClick}
                  >
                    <img
                      src="../../assets/magic.svg"
                      alt=""
                      className="post-job-text mr-2"
                    />{" "}
                    Post Job
                  </Link>
                </button>
              </div>

              <section className="left-and-right-cont">
                <div>
                  <p className="explore-head-text">
                    Explore profiles of designers and select your creative
                    knight.
                  </p>
                </div>

                <div className="procedures-list">
                  <p>How it works:</p>
                  <p className="arrow-and-list">
                    <span className="left-arrow">>></span>Select preferred
                    talent
                  </p>
                  <p className="arrow-and-list">
                    <span className="left-arrow">>></span>Generate talent
                    profile snapshot
                  </p>
                  <p className="arrow-and-list">
                    <span className="left-arrow">>></span>Connect to our admin
                  </p>
                  <p className="arrow-and-list">
                    <span className="left-arrow">>></span>Get talent contact
                  </p>
                  <p className="arrow-and-list">
                    <span className="left-arrow">>></span>Continue with
                    negotaition
                  </p>
                  <p className="arrow-and-list">
                    <span className="left-arrow">>></span>Hire Creative
                  </p>
                </div>
              </section>

              {/*modal content  */}
              <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="custom-modal"
                overlayClassName="custom-modal-overlay"
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                onAfterClose={() => (document.body.style.overflow = "auto")}
              >
                <article className="custom-modal-content">
                  {/* <div className="custom-modal-flex"> */}
                  <div className="custom-modal-header">
                    <h6 className="tell-us">Tell us about your job</h6>
                    <p
                      style={{
                        color: "black",
                        fontWeight: "700",
                        cursor: "pointer",
                        fontSize: "24px",
                        padding: "4px",
                      }}
                      onClick={handleCloseModal}
                    >
                      x
                    </p>
                  </div>
                  <div className="custom-modal-body">
                    <JobPostPage />
                  </div>
                  {/* </div> */}
                </article>
              </Modal>
            </section>
          </div>
        </div>

        {/* main contents */}
        <section className="main-content">
          {/* navigations */}
          <article className="navigations">
            <button
              onClick={() => handleCategorySelect("recommended")}
              className={`recommended ${
                isRecommendedSelected ? "selected" : ""
              }`}
            >
              <img
                className={`icon ${isRecommendedSelected ? "selected" : ""}`}
                src={
                  isRecommendedSelected
                    ? "/assets/star.png"
                    : "/assets/recommend-default.png"
                }
                alt=""
              />
              <p>Recommended</p>
            </button>

            <div className="premium-section">
              <button
                onClick={() => handleCategorySelect("premium")}
                className={`premium ${isPremiumSelected ? "selected" : ""}`}
              >
                <img
                  className={`icon ${isPremiumSelected ? "selected" : ""}`}
                  src={
                    isPremiumSelected
                      ? "/assets/crown-colored.png"
                      : "/assets/crown.png"
                  }
                  alt=""
                />
                <p>Premium Profile</p>
              </button>
            </div>

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

          <section className="payment-section">
            {isPaymentFormVisible && (
              <PaymentForm
                userEmail={userEmail}
                onClose={() => setIsPaymentFormVisible(false)}
              />
            )}
          </section>

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
