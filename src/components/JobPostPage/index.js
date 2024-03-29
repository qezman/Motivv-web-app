import React, { useState, useRef } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { URL } from "../../constants";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let upload =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594422865/upload_sncmdm.png";

const url = `${URL}post-job.php/`;
export default function JobPostPage() {
  const styles =
    window.innerWidth >= 760 ? { fontSize: "20px", paddingBottom: "5px" } : {};
  const smallTexts = window.innerWidth >= 760 ? { fontSize: "12px" } : {};
  const padBottm = window.innerWidth >= 760 ? { paddingBottom: "2px" } : {};

  const [input, setInput] = useState({
    companyName: "",
    title: "",
    email: "",
    location: "",
    jobType: "",
    image: null,
    instructions: "",
    websiteUrl: "",
  });
  const imageRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(upload);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setErrorValue("Please fill all required fields");
    setLoading(true);
    if (
      !input.companyName ||
      !input.title ||
      !input.email ||
      !input.location ||
      !input.jobType ||
      !input.instructions ||
      !input.websiteUrl
    ) {
      setError(true);
      setErrorValue("Please fill all required fields");
      setLoading(false);
    } else {
      let formData = new FormData();
      formData.append("companyName", input.companyName);
      formData.append("title", input.title);
      formData.append("email", input.email);
      formData.append("location", input.location);
      formData.append("type", input.jobType);
      formData.append("company", input.image);
      formData.append("instructions", input.instructions);
      formData.append("websiteUrl", input.websiteUrl);
      axios
        .post(url, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success === 1) {
            setError(true);
            setErrorValue(res.data.msg);
            setInput({
              companyName: "",
              title: "",
              email: "",
              location: "",
              jobType: "",
              image: null,
              instructions: "",
            });
            setLoading(false);
            setImageUrl(upload);
          } else {
            setError(true);
            setErrorValue(res.data.msg);
            setLoading(false);
          }
        });
    }
  };
  return (
    <div className="container-modal">

      <div className="modal-cont my-5">
        <Row className="py-3">
          <Row className="img-and-parameters mt-4">
            <Col md={3}>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <input
                  required
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();
                      reader.onload = (e) => {
                        setImageUrl(e.target.result);
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                    setInput({ ...input, image: e.target.files[0] });
                  }}
                  type="file"
                  ref={imageRef}
                  name="file"
                  id=""
                  hidden="hidden"
                />
                <img
                  id="target"
                  height="72px"
                  width="72px"
                  style={{ borderRadius: "72px" }}
                  src={imageUrl}
                  alt="motivv upload"
                  onClick={() => imageRef.current.click()}
                  className="mot-upload-image cursor"
                />
                <p className="mot-form-hint w-100 text-center">
                  Upload Company Logo
                </p>
                <p className="mot-form-hint w-100 text-center">(Optional)</p>
              </div>
            </Col>
            <Col md={9} className="form-inputs">
              <form className="mot-apply-form">
                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Company Name"
                      className="mt-0 p-0"
                      value={input.companyName}
                      onChange={(e) =>
                        setInput({ ...input, companyName: e.target.value })
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Use real company name: Employer or recruiting agency
                    </p>
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Job Title"
                      className="mt-0 p-0"
                      value={input.title}
                      onChange={(e) =>
                        setInput({ ...input, title: e.target.value })
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      A distinctive Job Title will make jobseekers find you
                    </p>
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Location"
                      className="mt-0 p-0"
                      value={input.location}
                      onChange={(e) =>
                        setInput({ ...input, location: e.target.value })
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Enter a valid location for the job
                    </p>
                  </div>
                </div>
                <div className="mb-2 mt-3">
                  <div className="px-3">
                    {/* <input
                        type="text"
                        required
                        placeholder="Job Type"
                        className="mt-0 p-0"
                        value={input.jobType}
                        onChange={(e) =>
                          setInput({ ...input, jobType: e.target.value })
                        }
                      /> */}
                    <select
                      style={styles}
                      placeholder="Job Type"
                      value={input.jobType}
                      onChange={(e) =>
                        setInput({ ...input, jobType: e.target.value })
                      }
                    >
                      <option value="">Job Type</option>
                      <option value="Remote">Remote</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Remote, Full Time, Part Time
                    </p>
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="email"
                      required
                      placeholder="Contact Email Address"
                      className="mt-0 p-0"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, email: e.target.value })
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Enter a valid email address
                    </p>
                  </div>
                </div>
                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Instructions"
                      className="mt-0 p-0"
                      value={input.instructions}
                      onChange={(e) =>
                        setInput({ ...input, instructions: e.target.value })
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Any other info to be taken note of.
                    </p>
                  </div>
                </div>
                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Webiste url"
                      className="mt-0 p-0"
                      value={input.websiteUrl}
                      onChange={(e) =>
                        setInput({ ...input, websiteUrl: e.target.value })
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                    </p>
                  </div>
                </div>
                <span className="block text-left px-3">
                  <button
                    disabled={loading}
                    className={loading ? "disabled-btn" : ""}
                    onClick={handleSubmit}
                    type="submit"
                    style={styles}
                  >
                    Submit
                  </button>{" "}
                  {loading && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      style={{ color: "#134A7C" }}
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                </span>
                {error && (
                  <div className="mt-2 w-100">
                    <Alert
                      variant={
                        errorValue === "Your Job post was successful"
                          ? "success"
                          : "danger"
                      }
                    >
                      {errorValue}
                    </Alert>
                  </div>
                )}
              </form>
            </Col>
          </Row>
        </Row>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
