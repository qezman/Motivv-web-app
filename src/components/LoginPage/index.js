import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import "./styles.css";
import { UserContext } from "../UserContext";
import axios from "axios";
import Cookies from "js-cookie";
import { URL } from "../../constants";

const url = `${URL}/processLogin.php`;
export default function LandingPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username && !password) {
      setError(true);
      setErrorValue("Please fill all required field");
      setLoading(false);
    } else {
      await axios.post(url, { email: username, password }).then((res) => {
        if (res.data.success === 1) {
          Cookies.set("admin-auth", username, {
            expires: 1,
          });
          user.setUser(Cookies.get("admin-auth"));
          setLoading(false);
          setError(true);
          setErrorValue(res.data.msg);
          props.history.push("/dashboard");
        } else {
          setError(true);
          setErrorValue(res.data.msg);
          setLoading(false);
        }
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorValue("");
    }, 4000);
  }, [error]);
  return (
    <div className="mot-landing-page-bblue">
      <div className="w-100">
        <Container>
          <Row>
            <Col md={1} />
            <Col md={10} className="d-flex justify-content-center">
              <Row className="justify-content-center w-100 d-flex align-items-center">
                <Col md={7} className="mot-text-color mb-3">
                  <div>
                    <h2 className="mot-catch-phrase pt-4">
                      Welcome <br />
                      Admin,
                    </h2>
                    <h6 className="pt-3 pb-4 white-texts">
                      Hope you have eaten ?
                    </h6>
                    <div className="d-flex align-items-center">
                      <span className="mot-apply-button mr-2">Yes</span>
                      <h6 className="white-texts">Hmmmm</h6>
                    </div>
                  </div>
                </Col>
                <Col md={5} className="p-0 mb-3 mh-50">
                  <Card className="minh">
                    <Card.Body className="align-items-center d-flex justify-content-center">
                      <div className="mot-explore-input-section px-3 w-100">
                        <form>
                          <div className="mb-3">
                            <input
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Admin username"
                              className="w-100"
                            />
                            <h6 className="white-texts">
                              Input admin username
                            </h6>
                          </div>
                          <div className="mb-3">
                            <input
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              placeholder="Password"
                              className="w-100"
                            />
                          </div>
                          <button
                            disabled={loading}
                            style={{
                              cursor: loading ? "not-allowed" : "initial",
                            }}
                            onClick={handleSubmit}
                            type="submit"
                          >
                            Explore Now
                          </button>
                          {error && (
                            <div className="mt-2 w-100">
                              <Alert variant="danger">{errorValue}</Alert>
                            </div>
                          )}
                        </form>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md={1} />
          </Row>
        </Container>
      </div>
    </div>
  );
}
