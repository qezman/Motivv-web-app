import axios from "axios";
import React, { useState, useRef } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import Footer from "../Footer/index";
import Helmet from "../Helmet/index";
import SuccessModal from "./SuccessModal";
import { URL } from "../../constants";
import { useGlobalContext } from "../../store/contexts";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let upload =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594422865/upload_sncmdm.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";

const url = `${URL}`;
export default function NewApplyCard() {
  const history = useHistory();

  const imageRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(upload);
  const [loading, setLoading] = useState(false);

  const [editActive, setEditActive] = useState(true);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Function to handle input change
  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  // const [showModalOnSuccess, setShowModalOnSuccess] = useState(false);

  const { setApplyCardInfo } = useGlobalContext();

  const handleShowModal = () => {
    setShowModal(true); // Set showModal to true first
  };

  // Form is going to store all the form data
  const [form, setForm] = React.useState({});

  const clearSkills = () => {
    setSelectedSkills([]);
  };

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const maxSkills = 4;

  const handleSkillChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    // Check if adding new skills exceeds the maximum allowed
    if (selectedSkills.length + selectedOptions.length > maxSkills) {
      setAlertMessage(`You can select up to ${maxSkills} skills.`);
      setTimeout(() => setAlertMessage(""), 3000); // Clear alert after 3 seconds
      return;
    }

    // Combine new selection with existing selected skills
    const updatedSelectedSkills = [...selectedSkills, ...selectedOptions];

    // Log the selected skills
    console.log("Selected Skills:", updatedSelectedSkills);

    setSelectedSkills(updatedSelectedSkills);
  };

  const existingStyles =
    window.innerWidth >= 760 ? { fontSize: "24px", paddingBottom: "10px" } : {};
  const smallTexts = window.innerWidth >= 760 ? { fontSize: "18px" } : {};
  const padBottm = window.innerWidth >= 760 ? { paddingBottom: "10px" } : {};

  // const inputWidth = window.innerWidth >= 760 ? { width: "1000px" } : {};

  const styles = {
    ...existingStyles,
    "@media screen and (min-width: 760px)": {
      width: "1000px",
    },
  };

  const [formErrors, setFormErrors] = useState({
    displayName: "",
    jobHeadline: "",
    email: "",
    phoneCode: "",
    phone: "",
    portfolio: "",
    avatar: null,
    skills: [],
    countryCode: "",
    price: "",
  });

  const validateForm = React.useCallback(
    (formData) => {
      const newFormErrors = {};

      if (!formData.displayName) {
        newFormErrors.displayName = "Please enter your name";
      }

      if (!formData.jobHeadline) {
        newFormErrors.jobHeadline = "Please enter your Job Title";
      }

      if (!formData.email) {
        newFormErrors.email = "Please enter your Email Address";
      }

      // if (!formData.phoneCode) {
      //   newFormErrors.phoneCode = "Required.";
      // }

      if (!formData.phone) {
        newFormErrors.phone = "Please enter your phone number";
      }

      if (!formData.portfolio) {
        newFormErrors.portfolio =
          "Please enter your portfolio link or previous work";
      }
      if (!selectedSkills || selectedSkills.length === 0) {
        newFormErrors.skills = "Please enter your skills";
      }
      if (!formData.avatar) {
        newFormErrors.avatar = "Please enter a display image";
      }
      if (!formData.price) {
        newFormErrors.price = "Please enter a price";
      }

      console.log("FORM ERRORS:", newFormErrors);

      setFormErrors(newFormErrors);

      return Object.values(newFormErrors).length <= 0;
    },
    [selectedSkills]
  );

  const handleInputChange = React.useCallback((name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const uploadImage = React.useCallback(
    async (imageFile) => {
      // Check if image is selected
      if (!imageFile) {
        console.error("No image selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "dghwzyoj");

      try {
        console.log("Uploading image");
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dr0tgora5/image/upload",
          formData
        );
        const data = response.data;

        handleInputChange("avatar", {
          url: data.secure_url,
          cloudinaryId: data.public_id,
        });
      } catch (error) {
        console.error("Error uploading image:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          if (error.response.data.error) {
            console.error(
              "Cloudinary error:",
              error.response.data.error.message
            );
          }
        }
      } finally {
        console.log(
          "Done uploading image. Dont know successful or failed though"
        );
      }
    },
    [handleInputChange]
  );

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);
        if (form && validateForm(form)) {
          setLoading(true);

          // Log form data before sending the request
          console.log("Form Data Before Request:", form);

          // Add console.log here
          console.log("Uploading image");

          const requestData = {
            name: form.displayName,
            email: form.email,
            skill1: selectedSkills,
            phone: form.phone,
            portfolio: !form.portfolio.startsWith("http")
              ? "https://" + form.portfolio
              : form.portfolio,
            avatar: form.avatar,
            // Add additional fields if needed
          };

          const res = await axios.post(url, requestData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.status === 201 && res.data.message) {
            handleShowModal();
            // Log each field before sending the request
            console.log("Form Data:", requestData);

            // Open the modal on successful form submission
            setShowModal(true);

            setErrorValue(
              "Application was successful! Check your e-mail for more info."
            );

            // update the applyinfo on the globalcontext
            // Store both the form and requestData just in case,
            // i dont really understand much whats going on, so just gonna store both
            setApplyCardInfo({ form, requestData });

            // Clear skills after successful submission
            clearSkills();

            setForm({});
            setEditActive((prevState) => !prevState);

            // Automatically redirect to "/designercard" after 3 seconds
            setTimeout(() => {
              history.push("/designercard");
            }, 3000);
          } else {
            setErrorValue(
              res.data.message ? res.data.message.msg : "Unknown error"
            );
            setLoading(false);
          }
        } else {
          console.log("Form validation failed");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        console.error("Detailed error response:", error.response);
        setErrorValue(
          String(
            typeof error.response.data === "string"
              ? error.response.data
              : error.response.data?.message ||
                  "An error occurred during form submission"
          )
        );
      } finally {
        setLoading(false);
      }
    },
    [form, validateForm, selectedSkills, history]
  );

  return (
    <div className="container-modal">
      <Helmet
        page="edit"
        title="Edit your Profile Card"
        description="Customize your card,  Input your name and Job Headline, Upload your avatar, Include your portfolio link, Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Edit profile"
      />

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
                      Create a striking <br />
                      profile and get vetted <br />
                      for your design cause.
                    </div>
                  </Col>
                  <Col md={4} className="mot-apply-instruction">
                    <h6 className="white-text small-texts">How it works:</h6>
                    <div className="white-text pt-2 d-flex">
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                      <div className="pl-3">
                        Input your name and Job Headline
                      </div>
                    </div>
                    <div className="white-text pt-2 d-flex">
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                      <div className="pl-3">Upload your avatar</div>
                    </div>
                    <div className="white-text pt-2 d-flex">
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                      <div className="pl-3">Include your portfolio link</div>
                    </div>
                    <div className="white-text pt-2 d-flex">
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                      <div className="pl-3">
                        Add the applications you are confident at
                      </div>
                    </div>
                    <div className="white-text pt-2 d-flex">
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                      <div className="pl-3">Gain approval</div>
                    </div>
                    {/* <div className="white-text pt-2 d-flex">
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                      <div className="pl-3">Hire creative</div>
                    </div> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* main content */}
      <div className="modal-cont my-5">
        <p className="enter-text">Enter your details</p>
        {formErrors.general && (
          <div className="alert alert-danger" role="alert">
            {formErrors.general}
          </div>
        )}

        <Row className="py-3">
          <Row className="img-and-parameters mt-4">
            <Col md={3}>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <input
                  // required
                  onChange={(e) => {
                    // Get the file from the target
                    const imageFile = e.target.files[0];

                    // upload the file to cloudinary
                    uploadImage(imageFile);
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
                  src={form?.avatar?.url || upload}
                  alt="motivv upload"
                  onClick={() => imageRef.current.click()}
                  className="mot-upload-image cursor"
                />
                <p className="mot-form-hint w-100 text-center">Update avatar</p>
                <p className="mot-form-hint w-100 text-center">(Optional)</p>
              </div>
            </Col>
            <Col md={9} className="form-inputs">
              <form className="mot-apply-form">
                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      // style={styles}
                      type="text"
                      required
                      placeholder="Display Name"
                      className="input-title mt-0 p-0"
                      maxLength="20"
                      value={form?.displayName || ""}
                      onChange={(e) =>
                        handleInputChange("displayName", e.target.value)
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      A single name will do
                    </p>

                    {formErrors.displayName && (
                      <div className="text-danger">
                        {formErrors.displayName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Job Headline"
                      className="mt-0 p-0"
                      value={form?.jobHeadline || ""}
                      onChange={(e) =>
                        handleInputChange("jobHeadline", e.target.value)
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Select your distinctive Job Title
                    </p>

                    {formErrors.jobHeadline && (
                      <div className="text-danger">
                        {formErrors.jobHeadline}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="email"
                      required
                      placeholder="Email Address"
                      className="mt-0 p-0"
                      value={form?.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Enter a valid email address
                    </p>

                    {formErrors.email && (
                      <div className="text-danger">{formErrors.email}</div>
                    )}
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Phone Number"
                      className="mt-0 p-0"
                      value={form?.phone || ""}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Preferably your whatsapp contact
                    </p>

                    {formErrors.phone && (
                      <div className="text-danger">{formErrors.phone}</div>
                    )}
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="Portfolio Link"
                      className="mt-0 p-0"
                      value={form?.portfolio || ""}
                      onChange={(e) =>
                        handleInputChange("portfolio", e.target.value)
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Please provide a url to your website or linkedIn to verify
                      your company
                    </p>

                    {formErrors.portfolio && (
                      <div className="text-danger">{formErrors.portfolio}</div>
                    )}
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <select
                      style={styles}
                      placeholder="Skills e.g Adobe XD"
                      value={selectedSkills}
                      onChange={handleSkillChange}
                    >
                      <option value="">Skills e.g Adobe XD</option>
                      <option value="Photoshop">Photoshop</option>
                      <option value="Canva">Canva</option>
                      <option value="Adobe XD">Adobe XD</option>
                      <option value="Illustrator">Illustrator</option>
                      <option value="Affinity">Affinity</option>
                      <option value="After Effects">After Effects</option>
                      <option value="Premier Pro">Premier Pro</option>
                      <option value="Figma">Figma</option>
                      <option value="Affinity">Affinity</option>
                      <option value="InDesign">InDesign</option>
                      <option value="Autodesk Maya">Autodesk Maya</option>
                      <option value="Cinema 4D">Cinema 4D</option>
                      <option value="Dreamweaver">Dreamweaver</option>
                      <option value="Framer">Framer</option>
                      <option value="InVision studio">InVision studio</option>
                    </select>
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Only four skills set is allowed for display purpose
                    </p>

                    <div>Selected Skills: {selectedSkills.join(", ")}</div>
                    {/* Display alert message */}
                    {alertMessage && (
                      <div className="alert alert-danger mt-2" role="alert">
                        {alertMessage}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-2 mt-3">
                  <div className="px-3">
                    <input
                      style={styles}
                      type="text"
                      required
                      placeholder="NGN"
                      className="mt-0 p-0"
                      value={form?.price || ""}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                    />
                    <p style={smallTexts} className="mot-form-hint w-100">
                      Please provide a price
                    </p>

                    {formErrors.price && (
                      <div className="text-danger">{formErrors.price}</div>
                    )}
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

        {/* modal on submission */}
        <SuccessModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
      <Footer />
    </div>
  );
}
