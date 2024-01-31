//packages
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import React, { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Modal,
  Spinner,
  Alert,
} from "react-bootstrap";
import Fade from "react-reveal";

//context api
import { ChallengeContext } from "../ChallengeContext";

//dasshboard wrapper
import Dashboard from "../Dashboard/Dashboard";

//styling
import "./styles.css";

import { submitChallenge, editChallenge } from "./req.js";

export const allTags = [
  "User interview",
  "Journey mapping",
  "Competitive Analysis",
  "User persona",
  "Empathy Map",
  "Userflow",
  "Wireframe",
  "Prototype",
  "Design system",
  "Information architecture",
  "Onboarding",
  "Style guide",
  "Product surgery report",
  "Testing",
  "Business Goals",
  "Brand personality",
  "Market and customer research",
  "Logo design",
  "Motion graphics",
  "Visual elements",
  "Corporate brand guide",
  "Brand communications",
  "Mockups",
  "Style guide",
  "Social media campaign",
  "Content management",
  "Strategy documents",
  "Pitch Deck",
  "Presentation",
  "One Pager",
  "Proposal",
  "Questionnaire",
  "Marketing",
  "Advertisement",
  "Flyers",
  "Infograohics",
  "Banners",
  "Posters",
  "Digital Prints",
  "Wraps",
  "UI/UX",
  "Publication",
  "Packaging",
  "Gifs",
  "Environmental branding",
  "Event Branding",
  "Office branding",
  "Art and Illustrations",
  "Cartoons",
];

const DesignChallengeEdit = (props) => {
  const history = useHistory();
  const { id, type } = props.match?.params || "";
  const { challenges, updateChallenge, isEdit } = useContext(ChallengeContext);
  const details = challenges.find((challenge) => challenge.id === id);
  console.log(details);
  const tracks = [
    "Digital Design",
    "Graphic Design",
    "Product Design",
    "UI Design",
    "Illustration",
    "UX Design",
    "Visual Identity",
  ];
  const industries = [
    "Education",
    "Fintech",
    "Media",
    "Medical",
    "Recruitment",
    "Sport",
    "Transport and Logistics",
  ];

  const [show, setShow] = useState(false);
  const [challenge, setChallenge] = useState({});
  useEffect(() => {
    details !== undefined
      ? setChallenge(details)
      : setChallenge({
          id: id,
          title: "",
          body: "",
          attempts: 0,
          track: "",
          industry: "",
          deadline: "",
          attachment: "",
          tags: [],
        });
  }, [details, id]);

  const {
    title,
    body,
    track,
    industry,
    deadline: challengeDeadline,
    attachment: challengeAttachment,
    tags: challengeTags,
  } = challenge;
  //component states
  const [editTrack, setTrack] = useState(track);
  const [editIndustry, setIndustry] = useState(industry);
  const [deadline, setDeadline] = useState(challengeDeadline);
  const [tags, setTags] = useState(challengeTags ? challengeTags : []);
  const [attachment, setAttachment] = useState(challengeAttachment);
  const [descriptionValue, setDescriptionValue] = useState(
    body || details?.body || ""
  );

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTrack(details?.track);
    setIndustry(details?.industry);
    setDeadline(details?.deadline);
    //eslint-disable-next-line
  }, []);
  //saving process states

  const updateValues = (e, key) => {
    const { value } = e.target;
    if (key === "track") {
      setTrack(value);
      setChallenge({
        ...challenge,
        track: value,
      });
    }
    if (key === "industry") {
      setIndustry(value);
      setChallenge({
        ...challenge,
        industry: value,
      });
    }
    if (key === "deadline") {
      setDeadline(value);
      setChallenge({
        ...challenge,
        deadline: deadline,
      });
    }
    if (key === "attachment") {
      setAttachment(value);
      setChallenge({
        ...challenge,
        attachment,
      });
    }
  };

  const updateDescription = (e, editor) => {
    const newValue = editor.getData();
    setDescriptionValue(newValue);
    setChallenge({ ...challenge, body: newValue });
  };

  const saveChallenge = () => {
    let editedChallenge = challenges.map((challengeIdx) => {
      if (id === challengeIdx.id) {
        return challenge;
      }
      return challengeIdx;
    });

    setMessage("");

    if (details && id === details.id && type !== "new") {
      editChallenge(
        challenge,
        setMessage,
        setChallenge,
        setLoading,
        setShow,
        history
      );
      updateChallenge(editedChallenge);
    } else {
      submitChallenge(
        challenge,
        setMessage,
        setChallenge,
        setLoading,
        setShow,
        history
      );
      updateChallenge([...challenges, challenge]);
    }
    isEdit("");
  };
  const handleClose = () => setShow(false);
  return (
    <Dashboard {...props}>
      <Fade>
        <Container className="mot-design-challenge-section position-relative">
          {message && (
            <div className="mt-2 w-100">
              <Alert
                variant={
                  message === "Challenge was created successfully!😇"
                    ? "success"
                    : "danger"
                }
              >
                {message}
              </Alert>
            </div>
          )}
          <Row className="mot-challenge-edit">
            <Col
              md={12}
              className="px-0 d-flex justify-content-between align-items-center row-one"
            >
              <Col md={9} className="p-0">
                <Form.Control
                  size="lg"
                  className="mot-challenge-edit-title"
                  type="text"
                  placeholder="Challenge Title"
                  value={title}
                  onChange={(e) =>
                    setChallenge({
                      ...challenge,
                      title: e.target.value,
                    })
                  }
                />
              </Col>
              <Button className="mot-create-challenge-btn-inverse btn btn-primary btn-lg">
                Upload
              </Button>
            </Col>
            <Col md={12} className="row-two">
              <Row>
                <Col md={8} className="px-0">
                  <CKEditor
                    editor={ClassicEditor}
                    data={descriptionValue}
                    onChange={updateDescription}
                    className="mot-main-challenge-edit"
                  />
                </Col>
                <Col
                  md={4}
                  className="mot-challenge-dropdown-section d-flex flex-column"
                >
                  <div className="mot-challenge-dropdown-item mb-4">
                    <label className="mot-challenge-dropdown-label">
                      Track
                    </label>
                    <Form.Control
                      className="track-dropdown"
                      as="select"
                      value={editTrack}
                      onChange={(e) => updateValues(e, "track")}
                    >
                      {tracks.map((track, i) => (
                        <option key={i} value={track}>
                          {track}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                  <div className="mot-challenge-dropdown-item mb-4">
                    <label className="mot-challenge-dropdown-label">
                      Industry
                    </label>
                    <Form.Control
                      className="industry-dropdown"
                      as="select"
                      value={editIndustry}
                      onChange={(e) => updateValues(e, "industry")}
                    >
                      {industries.map((industry, i) => (
                        <option key={i} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                  <div className="mot-challenge-dropdown-item mb-4">
                    <label className="mot-challenge-dropdown-label">Tags</label>
                    <Form.Control
                      className="industry-dropdown"
                      as="select"
                      onChange={(e) => {
                        let val = e.target.value;
                        if (tags.some((t) => t === val))
                          setTags(tags.filter((t) => t !== val));
                        else {
                          setChallenge({
                            ...challenge,
                            tags: [...tags, val],
                          });
                          setTags((prev) => [...prev, val]);
                        }
                      }}
                    >
                      {allTags.map((industry, i) => (
                        <option key={i} value={industry}>
                          {industry}{" "}
                          {tags.some((t) => t === industry) ? "\u2705" : null}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                  {/* <div className="mot-challenge-dropdown-item mb-4">
                    <label className="mot-challenge-dropdown-label">
                      Deadline
                    </label>
                    <Form.Control
                      type="text"
                      className="deadline-input"
                      value={deadline}
                      onChange={(e) => updateValues(e, "deadline")}
                      placeholder="State deadline"
                    />
                  </div> */}
                  <div className="mot-challenge-dropdown-item mb-4">
                    <label className="mot-challenge-dropdown-label">
                      Url attachment:
                    </label>
                    <Form.Control
                      type="text"
                      className="deadline-input"
                      value={attachment}
                      onChange={(e) => updateValues(e, "attachment")}
                      placeholder="Optional"
                    />
                  </div>
                  {body?.length > 0 && (
                    <Button
                      onClick={() => setShow(true)}
                      className="mot-create-challenge-btn align-self-center mt-5 btn btn-primary btn-lg"
                    >
                      Preview
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fade>

      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90h"
      >
        <Modal.Body className="mot-challenge-edit-modal position-relative">
          <div className="py-4 mb-4 d-flex mot-preview-modal-top align-items-center">
            <span className="d-flex mot-challenge-edit-modal-top">
              <label className="mb-0">Track</label>
              <p className="ml-2 mb-0">{track}</p>
            </span>
            <span className="d-flex mot-challenge-edit-modal-top">
              <label className="mb-0">Industry:</label>
              <p className="ml-2 mb-0">{industry}</p>
            </span>
            <span className="mot-change-btn" onClick={handleClose}>
              change
            </span>
          </div>
          <div className="d-flex align-items-start flex-column">
            <div>{ReactHtmlParser(body)}</div>
            {/* <div className="d-flex mot-challenge-edit-modal-top mb-5  mt-4">
              <label className="mb-0">Deadline: </label>
              <p className="ml-1">{deadline}</p>
            </div> */}
            <div className="d-flex mot-challenge-edit-modal-top mb-5  mt-4">
              <label className="mb-0">Tags: </label>
              <div className="ml-1 d-flex">
                {tags.map((t) => (
                  <span key={t} className="tag-container">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end position-absolute mot-preview-action-buttons">
            <Button
              variant="link"
              size="sm"
              className="mot-create-challenge-btn-white align-self-center mt-5"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="mot-create-challenge-btn align-self-center mt-5"
              onClick={saveChallenge}
            >
              Publish{" "}
              {loading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  style={{ color: "#FFFFFF" }}
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Dashboard>
  );
};
export default DesignChallengeEdit;
