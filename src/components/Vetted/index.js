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
import { useHistory } from "react-router-dom";
import PaymentForm from "../DesignersPage/Designers/PaymentForm";

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

const url = `${URL}/`;

export default function Vetted({ props }) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState(""); // State to hold the Paystack owner's email
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const user = useContext(UserContext);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit called");
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
        const response = await axios.get(url, { params: { email: email } });

        if (response.data.data.length > 0) {
          setError(false);
          Cookies.set("user-auth", email, { expires: 1 });
          user.setUser(Cookies.get("user-auth"));
          setUserPrompt("Request successful! Redirecting...");
          setSuccess(true);

          // Assuming you set userEmail upon successful data fetching
          // setUserEmail("holaryinka5050@gmail.com");

          setTimeout(() => {
            // Redirect to "/designers" after 3 seconds
            props.history.push("/designers", { email: email });
          }, 3000);
        } else {
          setError(true);
          setErrorValue("No designers found for the given email");

          // Set userEmail state to empty string for unsuccessful user
          setUserEmail("");
        }
      } catch (error) {
        console.error("Error during axios.get:", error);
        setError(true);
        setErrorValue("An error occurred during the request");
      } finally {
        setLoading(false);
      }

      // Set userEmail state for successful user
      setUserEmail(email);
      // Log the email entered into the console
      console.log("Email entered:", email);
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Request successful! Redirecting...");
      const redirectTimeout = setTimeout(() => {
        setSuccess(false);
        setUserPrompt("");
        history.push("/designers");
      }, 3000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [success, history]);

  // Pass userEmail prop to PaymentForm whenever email changes
  useEffect(() => {
    console.log("Email entered:", email);
  }, [email]);

  return (
    <section className="vetted-cont">
      {/* vetted card container */}
      <div className="vetted-card-components">
        <article className="vetted-card">
          <img src="/assets/folawiyo.png" />
          <p className="designer-name">Folawiyo Oluwasegun</p>
          <div className="role-and-icon">
            <span className="designer-role">Product Designer</span>
            <img className="icon-verify" src="assets/verified.png" />
          </div>

          <div className="skil-verified">
            <span className="skil">Figma</span>
            <span className="skil">Sketch</span>
            <span className="skil">Miro</span>
            {/* <p>Figma</p>
            <p>Sketch</p>
            <p>Miro</p> */}
          </div>

          <p className="skill-desc">
            Segun is a skilled product designer who has worked at CloudX for 3
            years
          </p>

          <p className="skil-rate">
            <span>Rate: </span>
            <span>NGN 500/hr</span>
          </p>

          <button className="skil-button">View Portfolio</button>
        </article>
      </div>

      {/* Already vetted text */}
      <div>
        <Fade bottom delay={1000} duration={1000}>
          <p className="already-text">
            Already vetted <br /> designers for <br /> your work
          </p>
        </Fade>
        <p className="enlist-text">
          We enlist and recommend designers that meet your skill requrements.
          Check creative’s portfolio, negotiate and hire.
        </p>
        <form className="form-input" action="">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input email to book a designer"
            className="input-book-designer"
          />
          <div className="book-a-designer-cont">
            <button
              className="btn-book-designer"
              disabled={loading}
              style={{
                opacity: loading ? "0.7" : "1",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
              onClick={handleSubmit}
              type="submit"
            >
              Book a designer
            </button>
            {loading && (
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}

            {error && (
              <div className="error-cont">
                <Alert className="error-text" variant="danger">
                  {errorValue}
                </Alert>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
