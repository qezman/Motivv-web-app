import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Helmet from "../Helmet/index";
import { URL } from "../../constants/index";
import "./style.css";
import Footer from "../Footer/index";
import Fade from "react-reveal/Fade";

let upload =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594422865/upload_sncmdm.png";
let edit =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594654144/Motivv/Vector_tnnrwv.png";
let close =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594654144/Motivv/ion_close-circle_xsgnnq.png";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";
const url = `${URL}/`;

const allTitles = [
  "Graphic Designer",
  "Logo Designer",
  "Art Designer",
  "Photo Editor",
  "Design Freelancer",
  "Motion Designer",
  "3D Artist",
  "Digital Artist",
  "UI/UX",
  "Illustrator",
  "Content Designer",
  "Visual Identity",
  "Identity Branding",
  "Album Cover Designer",
  "Product Designer",
];
const allSkills = [
  "Photoshop",
  "Canva",
  "Adobe XD",
  "Illustrator",
  "Affinity",
  "After Effects",
  "Premier Pro",
  "Figma",
  "InDesign",
  "CorelDRAW",
  "Autodesk Maya",
  "Cinema 4D",
  "Dreamweaver",
  "Framer",
  "InVision studio",
];

const africanCountryCodes = [
  { name: "Nigeria", code: "234" },
  { name: "Ghana", code: "233" },
  { name: "Kenya", code: "254" },
  // Add more African countries as needed
];

export default function NewApplyCard() {
  const [editActive, setEditActive] = useState(true);

  // Form is going to store all the form data
  const [form, setForm] = React.useState({});

  const [total, setTotal] = useState("");
  const [startTotal, setStartTotal] = useState("");
  const [endPriceRange, setEndPriceRange] = useState(55);
  const [startPriceRange, setStartPriceRange] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const [errorValue, setErrorValue] = useState("");

  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedPhoneCode, setSelectedPhoneCode] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneCode: "",
    phone: "",
    link: "",
    image: "",
    title: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    allSkills: [],
  });

  const validateForm = React.useCallback((formData) => {
    const newFormErrors = {};

    if (!formData.name) {
      newFormErrors.name = "Please enter your name";
    }

    if (!formData.email) {
      newFormErrors.email = "Please enter your email address";
    }

    if (!formData.phoneCode) {
      newFormErrors.phoneCode = "Required.";
    }

    if (!formData.phone) {
      newFormErrors.phone = "Please enter your phone number";
    }
    if (!formData.link) {
      newFormErrors.link = "Please enter your portfolio link or previous work.";
    }
    if (!formData.avatar) {
      newFormErrors.avatar = "Please enter a display image";
    }
    if (!formData.title) {
      newFormErrors.title = "Please enter a headline";
    }
    if (!formData.skill1 || formData.skill1.length <= 0) {
      newFormErrors.skill1 = "Please enter skill 1";
    }
    if (!formData.skill2 || formData.skill2.length <= 0) {
      newFormErrors.skill2 = "Please enter skill 2";
    }
    if (!formData.skill3 || formData.skill3.length <= 0) {
      newFormErrors.skill3 = "Please enter skill 3";
    }
    if (!formData.skill4 || formData.skill4.length <= 0) {
      newFormErrors.skill4 = "Please enter skill 4";
    }

    if (!formData.allSkills || formData.allSkillslength <= 0) {
      newFormErrors.allSkills = "Please enter skills";
    }
    console.log("FORM ERRORS:", newFormErrors);

    setFormErrors(newFormErrors);

    return Object.values(newFormErrors).length <= 0;
  }, []);

  const handleInputChange = React.useCallback((name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSelectChange = (e) => {
    setSelectedPhoneCode(e.target.value);
  };

  const handleSkillsInputChange = (e) => {
    const inputValue = e.target.value;

    // Check if the skill is not already selected and the limit is not reached
    if (!selectedSkills.includes(inputValue) && selectedSkills.length < 4) {
      setSelectedSkills([...selectedSkills, inputValue]);
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = selectedSkills.filter(
      (selectedSkill) => selectedSkill !== skill
    );
    setSelectedSkills(updatedSkills);
  };

  // A function to upload the file to cloudinary
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

          // let linkk = input.link.includes('http') ? input.link : `https://${input.link}`;

          const requestData = {
            name: form.name,
            email: form.email,
            title: form.title[0],
            skill1: form.skill1[0],
            skill2: form.skill2[0],
            skill3: form.skill3[0],
            skill4: form.skill4[0],
            price: startTotal,
            phone: form.phoneCode + form.phone,
            portfolio: !form.link.startsWith("http")
              ? "https://" + form.link
              : form.link,
            avatar: form.avatar,
          };

          const res = await axios.post(url, requestData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.status === 201 && res.data.message) {
            // Log each field before sending the request
            console.log("Form Data:", requestData);

            setErrorValue(
              "Application was successful! Check your e-mail for more info."
            );
            setForm({});
            setEditActive((prevState) => !prevState);
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
    [startTotal, form, validateForm]
  );

  return (
    <section>
      <Helmet
        page="edit"
        title="Edit your Profile Card"
        description="Customize your card,  Input your name and Job Headline, Upload your avatar, Include your portfolio link, Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Edit profile"
      />
      <article>
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
      </article>

      <form className="new-form" onSubmit={handleSubmit}>
        <section className="flex-content">
          <section className="text-and-upload">
            <h3 className="details-text">Enter your details</h3>

            {/* avatar */}
            <label
              htmlFor="avatarInput"
              className={`upload-icon ${!editActive ? "cursor" : ""}`}
            >
              <input
                required
                onChange={(e) => {
                  const imageFile = e.target.files[0];
                  uploadImage(imageFile);
                }}
                type="file"
                id="avatarInput"
                name="file"
                hidden="hidden"
              />
              <img
                id="target"
                height="72px"
                width="72px"
                style={{ borderRadius: "72px" }}
                src={form?.avatar?.url || upload}
                alt=""
                className="mot-upload-image"
              />
              <p>choose an avatar</p>
              {!editActive && <p className="choose-avatar">choose an avatar</p>}
            </label>
          </section>

          <article className="parameters-and-button">
            <div className="parameters">
              {/* Name input */}

              <div className="input-name">
                {editActive ? (
                  <Fade>
                    <input
                      type="text"
                      placeholder="Display Name"
                      value={form?.name || ""}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                    <span className="sub-text">A single name will do</span>
                  </Fade>
                ) : (
                  <Fade>
                    <p>""</p>
                  </Fade>
                )}
              </div>

              <div className="input-name">
                {editActive ? (
                  <Fade>
                    <input
                      type="text"
                      placeholder="Job Headline"
                      value={form?.title || ""}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                    />
                    <span className="sub-text">
                      Select your distinctive Job Title
                    </span>
                  </Fade>
                ) : (
                  <Fade>
                    <p>""</p>
                  </Fade>
                )}
              </div>

              <div className="input-name">
                {editActive ? (
                  <Fade>
                    <input
                      type="text"
                      placeholder="Email Address"
                      value={form?.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    <span className="sub-text">
                      Enter a valid email address
                    </span>
                  </Fade>
                ) : (
                  <Fade>
                    <p>""</p>
                  </Fade>
                )}
              </div>

              <div className="input-name">
                {editActive ? (
                  <Fade>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={form?.phone || ""}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                    <span className="sub-text">
                      Preferably your WhatsApp contact
                    </span>
                  </Fade>
                ) : (
                  <Fade>
                    <p>""</p>
                  </Fade>
                )}
              </div>

              <div className="input-name">
                {editActive ? (
                  <Fade>
                    <input
                      type="text"
                      placeholder="Portfolio Link"
                      value={form?.link || ""}
                      onChange={(e) =>
                        handleInputChange("link", e.target.value)
                      }
                    />
                    <span className="sub-text">
                      Google Drive, Behance, Linktree, Disha, Instagram
                    </span>
                  </Fade>
                ) : (
                  <Fade>
                    <p>""</p>
                  </Fade>
                )}
              </div>

              <div>
                {editActive ? (
                  <Fade>
                    <div className="skills-and-dropdown">
                      <input
                        type="text"
                        placeholder="Skills e.g Adobe XD"
                        style={{ width: "100%" }}
                        value={selectedSkills.join(", ")}
                        onChange={handleInputChange}
                        list="skillOptions"
                      />
                      <datalist id="skillOptions">
                        {allSkills.map((skill, index) => (
                          <option key={index} value={skill} />
                        ))}
                      </datalist>
                    </div>
                    <div className="selected-skills">
                      {selectedSkills.map((skill, index) => (
                        <div key={index} className="selected-skill">
                          {skill}
                          <span onClick={() => handleRemoveSkill(skill)}>
                            x
                          </span>
                        </div>
                      ))}
                    </div>
                    <span className="sub-text">
                      Only four skills are allowed for display purposes
                    </span>
                  </Fade>
                ) : (
                  <Fade>
                    <p>""</p>
                  </Fade>
                )}
              </div>
            </div>

            <div>
              {editActive ? (
                <Fade>
                  <div className="combined-input">
                    <div className="dropdown-container">
                      <select
                        style={{ width: "20%" }}
                        value={selectedPhoneCode}
                        onChange={handleSelectChange}
                      >
                        <option placeholder="" value="" disabled hidden>
                          Select Country
                        </option>
                        {africanCountryCodes.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.name} (+{country.code})
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      className="input-name"
                      type="text"
                      placeholder="NGN"
                      value={selectedPhoneCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className="sub-text">
                    Your project-based price determines your category
                  </span>
                </Fade>
              ) : (
                <Fade>
                  <p>""</p>
                </Fade>
              )}
            </div>

            <button
              className="submit-btn"
              onClick={(e) => handleSubmit(e)}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </article>
        </section>
      </form>

      <article>
        <Footer />
      </article>
    </section>
  );
}
