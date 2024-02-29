import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Helmet from "../Helmet/index";
import { URL } from "../../constants/index";
import "./Verification.css";

let Logo =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";
const url = `${URL}/processEdit.php`;

export default function Edit(props) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState("");

  const history = useHistory();

  const validateForm = () => {
    if (!phone || !email) {
      setError(true);
      setErrorValue("Please fill all required fields.");
      return false;
    }

    if (!ValidateEmail(email)) {
      setError(true);
      setErrorValue("You have entered an invalid email address.");
      return false;
    }

    setError(false);
    setErrorValue("");
    return true;
  };

  function ValidateEmail(mail) {
    const expression = /\S+@\S+/;
    return expression.test(String(email).toLowerCase());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("phone:", phone);
    console.log("email:", email);

    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(url, { phone, email });
      if (response.data.success === 1) {
        setError(false);
        setErrorValue(response.data.msg);
        props.history.push(`/update/${response.data.id}/${email}/${phone}`);

        history.push("/otp-edit");
      } else {
        setError(true);
        setErrorValue(response.data.msg);
      }
    } catch (error) {
      setError(true);
      setErrorValue("An error occured while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorValue("");
    }, 4000);
  }, [error]);
  return (
    <>
      <Helmet
        page="edit"
        title="Edit your Profile Card"
        description="Customize your card,  Input your name and Job Headline, Upload your avatar, Include your portfolio link, Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Edit profile"
      />
      <div>
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
                        <div className="pl-3">Add your preferred software</div>
                      </div>
                      <div className="white-text pt-2 d-flex">
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                        <div className="pl-3">Gain approval</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <article className="otp-container">
          <h1 className="verify-email">Verify your email</h1>
          <div className="left-margin">
            <input
              type="email"
              placeholder="OTP Code"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <p className="otp-bottom-text">
              An OTP code was sent to your email, kindly paste
            </p>
            <button>Submit</button>
          </div>
        </article>

        {/* <Footer /> */}
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Alert } from "react-bootstrap";
// // import Footer from "../components/Footer";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import Helmet from "../Helmet/index";
// import { URL } from "../../constants/index";
// let Logo =
//   "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
// let arrow =
//   "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";
// const url = `${URL}/processEdit.php`;

// export default function Edit(props) {
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorValue, setErrorValue] = useState("");

//   const history = useHistory();

//   const validateForm = () => {
//     if (!phone || !email) {
//       setError(true);
//       setErrorValue("Please fill all required fields.");
//       return false;
//     }

//     if (!ValidateEmail(email)) {
//       setError(true);
//       setErrorValue("You have entered an invalid email address.");
//       return false;
//     }

//     setError(false);
//     setErrorValue("");
//     return true;
//   };

//   function ValidateEmail(mail) {
//     const expression = /\S+@\S+/;
//     return expression.test(String(email).toLowerCase());
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("phone:", phone);
//     console.log("email:", email);

//     if (!validateForm()) {
//       return;
//     }
//     setLoading(true);

//     try {
//       const response = await axios.post(url, { phone, email });
//       if (response.data.success === 1) {
//         setError(false);
//         setErrorValue(response.data.msg);
//         props.history.push(`/update/${response.data.id}/${email}/${phone}`);

//         history.push("/otp-edit");
//       } else {
//         setError(true);
//         setErrorValue(response.data.msg);
//       }
//     } catch (error) {
//       setError(true);
//       setErrorValue("An error occured while processing your request.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setError(false);
//       setErrorValue("");
//     }, 4000);
//   }, [error]);
//   return (
//     <>
//       <Helmet
//         page="edit"
//         title="Edit your Profile Card"
//         description="Customize your card,  Input your name and Job Headline, Upload your avatar, Include your portfolio link, Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Edit profile"
//       />
//       <div>
//         <div className="mot-landing-page-blue">
//           <div className="mot-landing-page">
//             <Container className="m-auto">
//               <Row className="justify-content-center">
//                 <Col md={10}>
//                   <div>
//                     <Link to="/">
//                       <img src={Logo} alt="" className="logo" />
//                     </Link>
//                   </div>
//                   <Row className="pt-5">
//                     <Col md={8} className="mot-text-color">
//                       <div className="mot-catch-phrase">
//                         Create a striking <br />
//                         profile and get vetted <br />
//                         for your design cause.
//                       </div>
//                     </Col>
//                     <Col md={4} className="mot-apply-instruction">
//                       <h6 className="white-text small-texts">How it works:</h6>
//                       <div className="white-text pt-2 d-flex">
//                         <div>
//                           <img src={arrow} alt="" />
//                         </div>
//                         <div className="pl-3">
//                           Input your name and Job Headline
//                         </div>
//                       </div>
//                       <div className="white-text pt-2 d-flex">
//                         <div>
//                           <img src={arrow} alt="" />
//                         </div>
//                         <div className="pl-3">Upload your avatar</div>
//                       </div>
//                       <div className="white-text pt-2 d-flex">
//                         <div>
//                           <img src={arrow} alt="" />
//                         </div>
//                         <div className="pl-3">Include your portfolio link</div>
//                       </div>
//                       <div className="white-text pt-2 d-flex">
//                         <div>
//                           <img src={arrow} alt="" />
//                         </div>
//                         <div className="pl-3">Add your preferred software</div>
//                       </div>
//                       <div className="white-text pt-2 d-flex">
//                         <div>
//                           <img src={arrow} alt="" />
//                         </div>
//                         <div className="pl-3">Gain approval</div>
//                       </div>
//                     </Col>
//                   </Row>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </div>

//         <Row className="mot-form justify-content-md-center">
//           <Col md={4}>
//             <form action="">
//               <div>
//                 <div className="">
//                   <Row className="justify-content-md-center mot-form-container">
//                     <Row>
//                       <form className="mot-apply-form">
//                         <p className="medium-texts mot-form-title">
//                           Verify your email
//                         </p>
//                         <div>
//                           <input
//                             type="email"
//                             placeholder="OTP Code"
//                             value={email}
//                             required
//                             onChange={(e) => setEmail(e.target.value)}
//                           />
//                           <h6 className="mot-form-hint">
//                             An OTP code was sent to your email, kindly paste
//                           </h6>
//                         </div>
//                         <input
//                           type="submit"
//                           style={{
//                             opactiy: loading ? 0.3 : 1,
//                             cursor: loading ? "not-allowed" : "pointer",
//                           }}
//                           onClick={handleSubmit}
//                           disabled={loading}
//                           value="Submit"
//                           className="mot-apply-form-submit"
//                         />
//                       </form>
//                       {error && (
//                         <div className="mt-2 w-100">
//                           <Alert variant="danger">{errorValue}</Alert>
//                         </div>
//                       )}
//                     </Row>
//                   </Row>
//                 </div>
//               </div>
//             </form>
//           </Col>
//         </Row>

//         {/* <Footer /> */}
//       </div>
//     </>
//   );
// }
