import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import "./style.css";
import { Alert } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
import { URL } from "../../constants";
import { ValidateEmail } from "../../constants";
import { useHistory } from "react-router-dom";

import Fade from "react-reveal";

const url = `${URL}/`;
const VettedNew = ({ props }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
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
        console.log("Response from server:", response);
        console.log("Response data:", response.data);

        console.log("Designers Data:", response.data.data);

        if (response.data.data.length > 0) {
          setError(false);
          Cookies.set("user-auth", email, { expires: 1 });
          user.setUser(Cookies.get("user-auth"));
          setUserPrompt("Request successful! Redirecting...");
          setSuccess(true);

          setTimeout(() => {
            // Redirect to "/designers" after 3 seconds
            props.history.push("/designers");
          }, 3000);
        } else {
          setError(true);
          setErrorValue("No designers found for the given email");
        }
      } catch (error) {
        console.error("Error during axios.get:", error);
        setError(true);
        setErrorValue("An error occurred during the request");
      } finally {
        setLoading(false);
      }
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
            className="book-designer-input"
          />
          <div className="book-a-designer-cont">
            <button
              className="book-a-designer-btn"
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
};
export default VettedNew;
