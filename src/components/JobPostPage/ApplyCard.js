import React, { useState, useRef, useEffect } from "react";
import { Col, Form, Alert, Spinner } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import Fade from "react-reveal/Fade";
let upload =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594422865/upload_sncmdm.png";
let edit =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594654144/Motivv/Vector_tnnrwv.png";
let close =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594654144/Motivv/ion_close-circle_xsgnnq.png";
const url = "https://www.motivv.co/api/processForm.php/";
export default function ApplyCard() {
  const [editActive, setEditActive] = useState(true);
  const [total, setTotal] = useState("");
  const [startTotal, setStartTotal] = useState("");
  const [imageUrl, setImageUrl] = useState(upload);
  const [endPriceRange, setEndPriceRange] = useState(0);
  const [startPriceRange, setStartPriceRange] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const [title, setTitle] = useState([]);
  const [skill1, setSkill1] = useState([]);
  const [skill2, setSkill2] = useState([]);
  const [skill3, setSkill3] = useState([]);
  const [skill4, setSkill4] = useState([]);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
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
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    phoneCode: "",
    link: "",
    image: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let linkk;
    if (input.link.includes("http")) {
      linkk = input.link;
    } else {
      linkk = `https://${input.link}`;
    }
    setLoading(true);
    if (
      !input.name ||
      !input.email ||
      !input.phone ||
      !input.phoneCode ||
      !input.link ||
      !input.image ||
      title.length === 0
    ) {
      setError(true);
      setErrorValue("Please fill all required fields");
      setLoading(false);
    } else if (
      skill1.length === 0 &&
      skill2.length === 0 &&
      skill3.length === 0 &&
      skill4.length === 0
    ) {
      setError(true);
      setErrorValue("Pick at least a skill");
      setLoading(false);
    } else {
      let formData = new FormData();
      formData.append("name", input.name);
      formData.append("link", linkk);
      formData.append("headline", title[0]);
      formData.append("email", input.email);
      formData.append("phone", input.phoneCode + input.phone);
      formData.append("startprice", startTotal);
      formData.append("endprice", total);
      if (skill1.length > 0) formData.append("skill1", skill1[0]);
      if (skill2.length > 0) formData.append("skill2", skill2[0]);
      if (skill3.length > 0) formData.append("skill3", skill3[0]);
      if (skill4.length > 0) formData.append("skill4", skill4[0]);
      formData.append("picture", input.image);
      await axios
        .post(url, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success === 1) {
            setError(true);
            setErrorValue(res.data.msg);
            setTotal("");
            setStartTotal("");
            setEndPriceRange(0);
            setStartPriceRange(0);
            setEditActive(true);
            setInput({
              name: "",
              skill1: "",
              skill2: "",
              skill3: "",
              skill4: "",
              email: "",
              phone: "",
              link: "",
              phoneCode: "",
              image: null,
            });
            setTitle([]);
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
  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorValue("");
    }, 8000);
  }, [error]);
  // eslint-disable-next-line
  String.prototype.removeCharAt = function (i) {
    var tmp = this.split("");
    tmp.splice(i - 1, 1);
    return tmp.join("");
  };
  const formatAmount = (price) => {
    let increasedPrice;
    let newIncreasedPrice;
    if (price.toString().length === 4) {
      increasedPrice = price
        .toString()
        .replace(/(\d{1})/g, "$1,")
        .replace(/(^\s+|\s+$)/, "");
      newIncreasedPrice = increasedPrice
        .removeCharAt(4)
        .removeCharAt(5)
        .removeCharAt(6);
    } else if (price.toString().length === 5) {
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
    }
    return newIncreasedPrice;
  };
  useEffect(() => {
    let price = 50000 + parseInt(endPriceRange) * 2500;
    let formattedEndPrice = formatAmount(price);
    let price2 = 5000 + parseInt(startPriceRange) * 450;
    let formattedStartPrice = formatAmount(price2);
    setTotal(formattedEndPrice);
    setStartTotal(formattedStartPrice);
  }, [endPriceRange, startPriceRange]);
  return (
    <Col className="p-0 m-0" md={!editActive ? 4 : 3}>
      <form className="mot-apply-form">
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
                  onClick={() =>
                    !editActive ? imageRef.current.click() : null
                  }
                >
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
                        value={input.name}
                        onChange={(e) =>
                          setInput({ ...input, name: e.target.value })
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
                      onChange={setTitle}
                      required
                      multiple={false}
                      options={allTitles.sort((item1, item2) =>
                        item1 > item2 ? 1 : -1
                      )}
                      placeholder="Job Headline"
                      selected={title}
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
                    onChange={setSkill1}
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 1"
                    selected={skill1}
                  />
                ) : (
                  <span className="skill smaller-texts">Photoshop</span>
                )}

                {!editActive ? (
                  <Typeahead
                    id="skill1"
                    labelKey="skill2"
                    className="mt-0 p-0 border-0 text-center bod-rad"
                    onChange={setSkill2}
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 2"
                    selected={skill2}
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
                    onChange={setSkill3}
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 3"
                    selected={skill3}
                  />
                ) : (
                  <span className="skill smaller-texts">Adobe XD</span>
                )}

                {!editActive ? (
                  <Typeahead
                    id="skill4"
                    labelKey="skill4"
                    className="mt-0 p-0 border-0 text-center bod-rad"
                    onChange={setSkill4}
                    required
                    multiple={false}
                    options={allSkills.sort((item1, item2) =>
                      item1 > item2 ? 1 : -1
                    )}
                    placeholder="Skill 4"
                    selected={skill4}
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
                      placeholder="enter valid email"
                      className="mt-0 text-center p-0"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, email: e.target.value })
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
                        value={input.phoneCode}
                        onChange={(e) =>
                          setInput({ ...input, phoneCode: e.target.value })
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
                        value={input.phone}
                        onChange={(e) =>
                          setInput({ ...input, phone: e.target.value })
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
                      value={input.link}
                      onChange={(e) =>
                        setInput({ ...input, link: e.target.value })
                      }
                    />
                  </div>
                ) : (
                  <h5 className="display-name">Portfolio Link</h5>
                )}
              </div>
            </div>
          </div>
          {!editActive && (
            <span className="block">
              <button
                disabled={loading}
                className={loading ? "disabled-btn" : ""}
                onClick={handleSubmit}
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
          {error && (
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
