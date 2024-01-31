import React, { useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import Fade from "react-reveal";
import { ReactComponent as Plane } from "../../../assets/plane.svg";
/*import useWindowListener from "../../../hooks/useWindowListener";
import {
  truncateFileName,
  truncateFileNameBgScreen,
} from "../../DesignChallengeCard/helpers";*/
import style from "./suggest-template-form.module.css";
import axios from "axios";

const templateOptions = [
  "design",
  "strategy",
  "management",
  "clients",
  "legal",
  "others",
];
const SuggestTemplateForm = (props) => {
  //const [width] = useWindowListener();
  const [selectedRadioValue, setselectedRadioValue] = useState("design");
  const [contributorName, setContributorName] = useState("");
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const [resourceURL, setResourceURL] = useState("");
  const [resourceTool, setResourceTool] = useState("");
  const [loading, setLoading] = useState(false);
  /*const [fileToBeUploaded, setFileToBeUploaded] = useState(null);
  //eslint-disable-next-line
  const [fileUrl, setFileUrl] = useState(null);
  const fileInput = useRef(null);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setFileUrl(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded.name);
    setFileToBeUploaded(fileUploaded);
  };*/
  const setTemplateType = (e) => {
    setselectedRadioValue(e.target.value);
  };
  const handleTemplateUpload = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://www.motivv.co/api/processTemplate.php",
        {
          title: resourceTitle,
          tool: resourceTool,
          description: resourceDescription,
          name: contributorName,
          category: selectedRadioValue,
          url: resourceURL,
        }
      );
      const { data } = response;
      if (data.success === 1) {
        alert(data.msg);
        setResourceTitle("");
        setContributorName("");
        setResourceDescription("");
        setResourceURL("");
        setResourceTool("");
        setLoading(false);
      }
    } catch (e) {
      alert("An error occurred");
      setLoading(false);
    }
  };
  return (
    <Container className="mot-template-suggest__form">
      <Fade className="">
        <div className={style.motFormItem}>
          <Form.Group className="mb-0 w-100" controlId="motContributorName">
            <Form.Label className={style.motFormLabel}>
              Name (optional)
            </Form.Label>
            <Form.Control
              type="name"
              className="mot-dsc-hero__input"
              placeholder="Uduak Ekpo"
              value={contributorName}
              onChange={(e) => setContributorName(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className={style.motFormItem}>
          <Form.Group className="mb-0 w-100" controlId="motResourceTitle">
            <Form.Label className={style.motFormLabel}>
              Resource Title (Required)
            </Form.Label>
            <Form.Control
              type="name"
              className="mot-dsc-hero__input"
              placeholder="Onboarding Form for clients"
              value={resourceTitle}
              onChange={(e) => setResourceTitle(e.target.value)}
              required
            />
          </Form.Group>
        </div>
        <div className={style.motFormItem}>
          <Form.Group className="mb-0 w-100" controlId="motResourceTitle">
            <Form.Label className={style.motFormLabel}>
              Resource Tool (Required)
            </Form.Label>
            <Form.Control
              type="name"
              className="mot-dsc-hero__input"
              placeholder="figma/notion/airtable/sheets/office"
              value={resourceTool}
              onChange={(e) => setResourceTool(e.target.value)}
              required
            />
          </Form.Group>
        </div>
        <div className={style.motFormItem}>
          <Form.Group controlId="motResourceDescription">
            <Form.Label className={style.motFormLabel}>
              Resource Description (Required)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="mot-dsc-hero__textarea"
              placeholder="hello@motivv.co"
              value={resourceDescription}
              onChange={(e) => setResourceDescription(e.target.value)}
              required
            />
          </Form.Group>
        </div>
        <fieldset className={style.motFormItem}>
          <Form.Group>
            <Form.Label as="legend" className={style.motFormLabel}>
              Which category is your suggestion best related to? (Required)
            </Form.Label>
            <Col sm={10} onChange={setTemplateType}>
              {templateOptions.map((option, i) => {
                return (
                  <div key={i} className={style.motTemplateToolCheckbox}>
                    <input
                      id="mot-template-checkbox"
                      type="radio"
                      value={option}
                      className={style.motTemplateToolInputCheckbox}
                      checked={selectedRadioValue === `${option}`}
                      onChange={setTemplateType}
                    />
                    <span className={style.motTemplateCheck}></span>
                    <label
                      htmlFor="mot-template-checkbox"
                      className={style.motTemplateCheckLabel}
                    >
                      {option}
                    </label>
                  </div>
                );
              })}
            </Col>
          </Form.Group>
        </fieldset>
        <div className={style.motFormItem}>
          <Form.Group className="mb-0 w-100" controlId="motResourceTitle">
            <Form.Label className={style.motFormLabel}>
              Resource Url(Required)
            </Form.Label>
            <Form.Control
              type="name"
              className="mot-dsc-hero__input"
              placeholder="www.motivv.co"
              value={resourceURL}
              onChange={(e) => setResourceURL(e.target.value)}
              required
            />
          </Form.Group>
        </div>
        {/*} <p className="mot-or-text">or</p>
        <div className={style.motFormItem}>
          <Form.Group>
            <Form.Label className={style.motFormLabel}>Upload File</Form.Label>
            <label className={style.motCustomFileArea}>
              <div className={style.motFileCustom}>
                <span>
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7528 17.7315H14.8737H13.8292H13.6036V12.5284H15.3053C15.7368 12.5284 15.9918 12.038 15.7368 11.6849L12.4266 7.10462C12.2158 6.81038 11.7793 6.81038 11.5685 7.10462L8.25828 11.6849C8.00327 12.038 8.25337 12.5284 8.68982 12.5284H10.3915V17.7315H10.1659H9.12137H4.62444C2.04986 17.5893 0 15.1815 0 12.5725C0 10.7728 0.975889 9.20352 2.42256 8.35513C2.29015 7.99714 2.2215 7.61464 2.2215 7.21251C2.2215 5.37352 3.7074 3.88762 5.54638 3.88762C5.9436 3.88762 6.32611 3.95628 6.6841 4.08868C7.74826 1.83286 10.0433 0.268494 12.7111 0.268494C16.1635 0.273398 19.0078 2.91664 19.3314 6.28566C21.9845 6.74173 24 9.19862 24 11.9792C24 14.951 21.6853 17.5256 18.7528 17.7315Z"
                      fill="#134A7C"
                    />
                  </svg>
                </span>
                Choose File
              </div>
              <input
                ref={fileInput}
                type="file"
                className={style.motCustomFileInput}
                onChange={handleChange}
                aria-label="File browser example"
              />
              <span className={style.motFileNameAreaNull}>
                {!fileToBeUploaded && "No file Selected"}
              </span>
              {width <= 475 ? (
                <span className={style.motFileNameAreaActive}>
                  {fileToBeUploaded && truncateFileName(fileToBeUploaded.name)}
                </span>
              ) : (
                <span className={style.motFileNameAreaActive}>
                  {fileToBeUploaded &&
                    truncateFileNameBgScreen(fileToBeUploaded.name)}
                </span>
              )}
            </label>
          </Form.Group>
                  </div>*/}
        <div
          className={style.motFormButton}
          onClick={() => handleTemplateUpload()}
        >
          <button
            variant="primary"
            size="md"
            disabled={loading}
            className="mot-template-submit-btn text-white align-self-center mt-5"
          >
            <span>
              <Plane />
            </span>
            {loading ? "Loading ....." : "Send"}
          </button>
        </div>
      </Fade>
    </Container>
  );
};

export default SuggestTemplateForm;
