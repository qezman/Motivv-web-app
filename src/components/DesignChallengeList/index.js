import React, { useContext } from "react";
import {
  // Alert,
  // Button,
  Container,
  // Form,
  // Spinner,
  Row,
  // Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Row, Container } from "react-bootstrap";
import Fade from "react-reveal";
import { ChallengeContext } from "../ChallengeContext";
import Dashboard from "../Dashboard/Dashboard";
import { DesignChallengeCard } from "../DesignChallengeCard";

import Loader from "../../assets/loader.mp4";
// import style from "../SuggestTemplate/SuggestTemplateForm/suggest-template-form.module.css";
// import { URL } from "../../constants";

import "./styles.css";

// const url = `${URL}/uploadChallenge.php`;
// const fUrl = `${URL}/fetchChallenge.php`;
// const urlDelete = `${URL}/deleteChallenge.php`;

const DesignChallengeList = (props) => {
  // const [fileToBeUploaded, setFileToBeUploaded] = useState(null);
  // const [title, setTitle] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [dLoading, setDLoading] = useState(false);
  // const [message, setMessage] = useState("");
  const { challenges, loading } = useContext(ChallengeContext);
  // const [challenges, setChallenge] = useState([]);
  // const [floading, setFLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = () => {
  //     Axios.get(fUrl)
  //       .then((res) => {
  //         setFLoading(false);
  //         let chs = res.data.challenges;
  //         setChallenge(chs ? chs : []);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   fetchData();
  // }, []);

  // const handleDelete = async (id, title, image) => {
  //   setDLoading(true);
  //   let a = window.confirm("Are you sure you want to delete");
  //   if (a) {
  //     await Axios.post(urlDelete, { id, title, image }).then((res) => {
  //       setDLoading(false);
  //       alert(res.data.msg);
  //       setChallenge(challenges.filter((ch) => ch.id !== id));
  //       // props.history.push("/design-challenge");
  //     });
  //   }
  // };

  const randomId = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  // const handleChange = (e) => {
  //   const fileUploaded = e.target.files[0];
  //   setFileToBeUploaded(fileUploaded);
  // };

  // const handleUpload = async () => {
  //   setMessage("");
  //   if (fileToBeUploaded && title) {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append("upload", fileToBeUploaded);
  //     formData.append("title", title);
  //     await Axios.post(url, formData).then((res) => {
  //       if (res.data.success === 1) {
  //         setLoading(false);
  //         setMessage(res.data.msg);
  //         setFileToBeUploaded(null);
  //         props.history.push("/design-challenge");
  //       } else {
  //         setLoading(false);
  //         setMessage(res.data.msg);
  //       }
  //     });
  //   } else {
  //     setMessage("Both fields are required");
  //   }
  // };

  return (
    <Dashboard {...props}>
      <Fade className="">
        <Container className="mot-design-challenge-section position-relative">
          <h2 className="challenge-title mb-0">Design Challenge</h2>
          {loading ? (
            <p></p>
          ) : (
            <p className="black-text">{`${challenges.length} ${
              challenges.length >= 2 ? "challenges" : "challenge"
            }`}</p>
          )}
          <Row className="mot-challenge-list">
            {loading ? (
              <div className="d-flex w-100 align-items-center justify-content-center">
                <video
                  src={Loader}
                  autoPlay
                  muted
                  loop
                  height="200px"
                  width="200px"
                />
              </div>
            ) : challenges.length > 0 ? (
              <Row className="mot-challengeList p-0 m-0">
                {challenges.map((challenge) => {
                  const { id, title, body, attempts, track, industry, tags } =
                    challenge;
                  return (
                    <DesignChallengeCard
                      key={id}
                      id={id}
                      name={title}
                      description={body}
                      attempts={attempts}
                      track={track}
                      industry={industry}
                      link={`/design-challenge/${title}-${id}`}
                      tags={tags ? JSON.parse(tags) : null}
                    />
                  );
                })}
              </Row>
            ) : (
              <p>
                No Challenges has been created yet! Create One with the create
                challenge button by the right
              </p>
            )}
          </Row>
          {/* *id should be some random id processor package */}
          <Link
            to={`/design-challenge/type=new&id=${randomId(8)}`}
            className="position-absolute mot-create-challenge-btn btn btn-primary btn-lg"
          >
            Create Challenge
          </Link>
        </Container>

        {/* <Container>
          <h2 className="challenge-title mb-0">Upload Design Challenge</h2>
          <div className="mt-5 w-50">
            <div className="mb-3">
              <Form.Control
                type="text"
                // className="mt-5"
                placeholder="Enter a title (could be anything)"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <Form.Control
              type="file"
              // className="mt-5"
              onChange={handleChange}
            />
            <span
              className={style.motFileNameAreaNull}
              style={{ marginTop: 8 }}
            >
              {!fileToBeUploaded && "No file Selected"}
            </span>
            <Button
              variant="primary"
              size="sm"
              disabled={loading}
              className="mot-create-challenge-btn align-self-center mt-5"
              onClick={handleUpload}
            >
              Upload
              {loading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  style={{ color: "#fff", paddingLeft: "5px" }}
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Button>
            {message && (
              <div className="mt-2 w-100">
                <Alert
                  variant={
                    message === "Successfully uploaded" ? "success" : "danger"
                  }
                >
                  {message}
                </Alert>
              </div>
            )}
          </div>

          <div className="mot-challenge-list">
            <h3>Design Challenges</h3>
            {floading ? (
              <div className="d-flex w-100 align-items-center justify-content-center">
                <video
                  src={Loader}
                  autoPlay
                  muted
                  loop
                  height="200px"
                  width="200px"
                />
              </div>
            ) : challenges.length > 0 ? (
              <Row className="">
                {challenges.map((ch, i) => (
                  <Col key={i} md="4" sm="12">
                    <img
                      src={`${URL}/upload/${ch.image}`}
                      className="mb-3 challengePic"
                      alt="ch.title"
                    />
                    <button
                      onClick={() => handleDelete(ch.id, ch.title, ch.image)}
                      disabled={dLoading ? true : false}
                      className="w-full btn btn-light text-red"
                    >
                      Delete{" "}
                      {dLoading && (
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          style={{ color: "#fff", paddingLeft: "5px" }}
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </Col>
                ))}
              </Row>
            ) : (
              <p>
                No Challenges has been created yet! Create One with the create
                challenge button by the right
              </p>
            )}
          </div>
        </Container> */}
      </Fade>
    </Dashboard>
  );
};

export default DesignChallengeList;
