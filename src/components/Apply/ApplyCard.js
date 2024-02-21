import React, { useState, useRef, useEffect } from "react";
import { Col, Form, Alert, Spinner } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { URL } from "../../constants";

let upload =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594422865/upload_sncmdm.png";
let edit =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594654144/Motivv/Vector_tnnrwv.png";
let close =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594654144/Motivv/ion_close-circle_xsgnnq.png";
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

export default function ApplyCard() {
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
            // title: form.title[0],
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

  // eslint-disable-next-line
  String.prototype.removeCharAt = function (i) {
    var tmp = this.split("");
    tmp.splice(i - 1, 1);
    return tmp.join("");
  };

  const formatAmount = (price) => {
    let increasedPrice;
    let newIncreasedPrice;

    if (price.toString().length === 5) {
      increasedPrice = price
        .toString()
        .replace(/(\d{2})/g, "$1,")
        .replace(/(^\s+|\s+$)/, "");
      newIncreasedPrice = increasedPrice.removeCharAt(6);
    } else if (price.toString().length === 6) {
      increasedPrice = price
        .toString()
        .replace(/(\d{3})/g, "$1,")
        .replace(/(^\s+|\s+$)/, "");
      newIncreasedPrice = increasedPrice.removeCharAt(8);
    } else if (price.toString().length === 7) {
      increasedPrice = price
        .toString()
        .replace(/(\d{1})/g, "$1,")
        .replace(/(^\s+|\s+$)/, "");
      newIncreasedPrice = increasedPrice
        .removeCharAt(4)
        .removeCharAt(5)
        .removeCharAt(8)
        .removeCharAt(9)
        .removeCharAt(10);
    } else if (price.toString().length === 8) {
      increasedPrice = price
        .toString()
        .replace(/(\d{2})/g, "$1,")
        .replace(/(^\s+|\s+$)/, "");
      newIncreasedPrice = increasedPrice
        .removeCharAt(4)
        .removeCharAt(5)
        .removeCharAt(6)
        .removeCharAt(9)
        .removeCharAt(10)
        .removeCharAt(11);
    }

    return price.toLocaleString();
  };

  useEffect(() => {
    // Calculate prices based on the selected ranges
    let endPrice = 10000 + parseInt(endPriceRange) * 9000;
    let startPrice = 10000 + parseInt(startPriceRange) * 9000;

    // Ensure prices are within the desired range (10,000 to 500,000)
    endPrice = Math.min(endPrice, 500000);
    startPrice = Math.min(startPrice, 500000);

    console.log("endPrice:", endPrice);
    console.log("startPrice:", startPrice);
    // Format the prices
    const formattedEndPrice = formatAmount(endPrice);
    const formattedStartPrice = formatAmount(startPrice);

    console.log("formattedEndPrice:", formattedEndPrice);
    console.log("formattedStartPrice:", formattedStartPrice);

    // Set the state with the formatted prices
    setTotal(formattedEndPrice);
    // setTotal(formatAmount(endPrice))
    setStartTotal(formattedStartPrice);
    // setStartTotal(formatAmount(startPrice))
  }, [endPriceRange, startPriceRange]);

  return (
    <Col className="p-0 m-0" md={!editActive ? 4 : 3}>
      <form onSubmit={handleSubmit} className="mot-apply-form">
        <div className="mot-profile-card-wrapper mt-0">
          <h5 className="text-center mb-5 mot-form-title ">
            Customize your Card
          </h5>
          <div className="mot-profile-card mot-profile-card2">
            <div
              onClick={() => setEditActive(!editActive)}
              className="d-flex flex-column cursor align-items-end"
            >
              {editActive ? (
                <Fade>
                  <img
                    src={edit}
                    alt="motivv close"
                    height="24px"
                    width="24px"
                    className="close"
                  />{" "}
                </Fade>
              ) : (
                <Fade>
                  <img
                    src={close}
                    alt="motivv edit"
                    height="24px"
                    width="24px"
                  />
                </Fade>
              )}
            </div>
            <div className="pt-2 text-center">
              <div>
                <div
                  className={!editActive ? "cursor" : ""}
                  onClick={() => {
                    if (!editActive) {
                      imageRef.current.click();
                    }
                  }}
                >
                  <input
                    required
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
                    alt=""
                    className="mot-upload-image"
                  />
                  {!editActive && (
                    <p className="mot-form-hint w-100 text-center">
                      choose an avatar
                    </p>
                  )}
                </div>
              </div>
              <div className=" mb-2 mt-3">
                {!editActive ? (
                  <div className="px-3">
                    <Fade>
                      {" "}
                      <input
                        type="text"
                        required
                        placeholder="Display Name"
                        className="mt-0 p-0 text-center"
                        maxLength="10"
                        value={form?.name || ""}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                    </Fade>
                  </div>
                ) : (
                  <Fade>
                    <h5 className="display-name">Display Name</h5>
                  </Fade>
                )}
              </div>
              <div className="">
                {!editActive ? (
                  <div className="">
                    <Typeahead
                      id="headline"
                      labelKey="headline"
                      className="mt-0 p-0 border-0 text-center bod-rad"
                      onChange={(selected) =>
                        handleInputChange("title", selected)
                      }
                      required
                      multiple={false}
                      options={allTitles.sort((item1, item2) =>
                        item1 > item2 ? 1 : -1
                      )}
                      placeholder="Job Headline"
                      selected={form?.title || []}
                    />
                  </div>
                ) : (
                  <Fade>
                    <h6>UI/UX Designer</h6>
                  </Fade>
                )}
              </div>
              <div className="pt-2">
                {!editActive ? (
                  <Typeahead
                    id="skill1"
                    labelKey="skill1"
                    className="mt-0 p-0 border-0 text-center bod-rad"
                    onChange={(selected) =>
                      handleInputChange("skill1", selected)
                    }
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 1"
                    selected={form?.skill1 || []}
                  />
                ) : (
                  <span className="skill smaller-texts">Photoshop</span>
                )}

                {!editActive ? (
                  <Typeahead
                    id="skill1"
                    labelKey="skill2"
                    className="mt-0 p-0 border-0 text-center bod-rad"
                    onChange={(selected) =>
                      handleInputChange("skill2", selected)
                    }
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 2"
                    selected={form?.skill2 || []}
                  />
                ) : (
                  <span className="skill smaller-texts">Illustrator</span>
                )}
              </div>
              <div className={editActive ? "mt-3 pb-2" : "pb-2"}>
                {!editActive ? (
                  <Typeahead
                    id="skill3"
                    labelKey="skill3"
                    className="mt-0 p-0 border-0 text-center bod-rad"
                    onChange={(selected) =>
                      handleInputChange("skill3", selected)
                    }
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 3"
                    selected={form?.skill3 || []}
                  />
                ) : (
                  <span className="skill smaller-texts">Adobe XD</span>
                )}

                {!editActive ? (
                  <Typeahead
                    id="skill4"
                    labelKey="skill4"
                    className="mt-0 p-0 border-0 text-center bod-rad"
                    onChange={(selected) =>
                      handleInputChange("skill4", selected)
                    }
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 4"
                    selected={form?.skill4 || []}
                  />
                ) : (
                  <span className="skill smaller-texts">Figma</span>
                )}
              </div>
              <div className="my-4">
                <span
                  onClick={() => setSelectedPrice(false)}
                  className={
                    !selectedPrice && !editActive
                      ? "price-border text-price cursor"
                      : "text-price cursor"
                  }
                >
                  NGN {startTotal}
                </span>{" "}
                -{" "}
                <span
                  onClick={() => setSelectedPrice(true)}
                  className={
                    selectedPrice && !editActive
                      ? "price-border text-price cursor"
                      : "text-price cursor"
                  }
                >
                  NGN {total}
                </span>
              </div>
              {!editActive ? (
                <span className="my-3">
                  {!selectedPrice ? (
                    <Form.Group className="mt-3" controlId="formBasicRange">
                      <Form.Control
                        value={startPriceRange}
                        onChange={(e) => setStartPriceRange(e.target.value)}
                        className="price-input m-0 p-0"
                        type="range"
                      />
                    </Form.Group>
                  ) : (
                    <Form.Group className="mt-3" controlId="formBasicRange">
                      <Form.Control
                        value={endPriceRange}
                        onChange={(e) => setEndPriceRange(e.target.value)}
                        className="price-input m-0 p-0"
                        type="range"
                      />
                    </Form.Group>
                  )}
                </span>
              ) : null}
              <div className=" mb-2 mt-3">
                {!editActive ? (
                  <div className="px-3">
                    <input
                      type="email"
                      required
                      placeholder="Enter valid email"
                      className="mt-0 text-center p-0"
                      value={form?.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>
                ) : (
                  <h5 className="display-name">Email</h5>
                )}
              </div>

              <div className=" mb-2 mt-3">
                {!editActive ? (
                  <div className="px-3 row">
                    <div className="col-3">
                      <input
                        type="text"
                        placeholder="234"
                        className="mt-0 text-center p-0"
                        required
                        maxLength="3"
                        value={form?.phoneCode || ""}
                        onChange={(e) =>
                          handleInputChange("phoneCode", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        placeholder="8080014200"
                        className="mt-0 text-center p-0"
                        required
                        maxLength="10"
                        value={form?.phone || ""}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <h5 className="display-name">Phone Number</h5>
                )}
              </div>

              <div className=" mb-4 mt-3">
                {!editActive ? (
                  <div className="px-3">
                    <input
                      type="text"
                      placeholder="Portfolio Link or Link to previous work"
                      required
                      className="mt-0 text-center p-0"
                      value={form?.link || ""}
                      onChange={(e) =>
                        handleInputChange("link", e.target.value)
                      }
                    />
                  </div>
                ) : (
                  <h5 className="display-name">Portfolio Link</h5>
                )}
              </div>
            </div>
          </div>
          {!editActive && form?.avatar && (
            <span className="block">
              <button
                disabled={loading}
                className={loading ? "disabled-btn" : ""}
                type="submit"
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
          )}
          {errorValue && (
            <div className="mt-2 w-100">
              <Alert
                variant={
                  errorValue ===
                  "Application was successful! Check your e-mail for more info."
                    ? "success"
                    : "danger"
                }
              >
                {errorValue}
              </Alert>
            </div>
          )}
        </div>
      </form>
    </Col>
  );
}
