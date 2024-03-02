import React from "react";
import Fade from "react-reveal";

import "./style.css";
import UserDataTexts, { userData, userData1, userData2 } from "./userData";
let man =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_old-man_szh9mp.png";
let woman =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_woman_urmbzx.png";
let boy =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_blond-haired-person_ricdfl.png";
let girl =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594369493/Motivv/emojione-monotone_girl_ufojdy.png";
let arrow =
  "https://res.cloudinary.com/denw9euui/image/upload/v1594379270/Motivv/arrow_p0wwhj.png";

export default function index() {
  return (
    <section className="mot-section-container">
      <div>
        <Fade bottom delay={1000} duration={1000}>
          <img
            src={man}
            alt="placeholder card"
            className="mot-placeholder-card"
          />
          <img
            src={woman}
            alt="placeholder card"
            className="mot-placeholder-card2"
          />
          <div className="small-text pt-2">Motivv for Clients</div>
        </Fade>
        <article className="each-item">
          <h2 className="topic-text">
            How to use motivv <br /> as a client
          </h2>
          {userData1.map((item, index) => (
            <div className="arrow-and-text" key={index}>
              <img src={item.img.arrow} alt="Arrow" className="arrow-image" />
              <p className="text-item">{item.text}</p>
            </div>
          ))}
        </article>
      </div>

      <div>
        <Fade bottom delay={1000} duration={1000}>
          <img
            src={boy}
            alt="placeholder card"
            className="mot-placeholder-card"
          />
          <img
            src={girl}
            alt="placeholder card"
            className="mot-placeholder-card2"
          />
          <div className="small-text pt-2">Motivv for Clients</div>
        </Fade>
        <article className="each-item mt-4">
          <h2 className="topic-text">
            How to use motivv <br /> as a designer
          </h2>
          {userData2.map((item, index) => (
            <div className="arrow-and-text" key={index}>
              <img src={item.img.arrow} alt="Arrow" className="arrow-image" />
              <p className="text-item">{item.text}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

// export default function index() {
//   const styles =
//     window.innerWidth >= 760 ? { fontSize: "18px", paddingTop: "14px" } : {};
//   const secondStyles = window.innerWidth >= 760 ? { paddingTop: "18px" } : {};

//   return (
//     <div className="mot-users-container" id="user">
//       <Container>
//         <Row>
//           <Col md={12}>
//             <Row className="justify-content-md-center">
//               <section className="both-cards ">
//                 <Col md={5} className="mot-user-placeholders">
// <Fade bottom delay={1000} duration={1000}>
//   <img
//     src={man}
//     alt="placeholder card"
//     className="mot-placeholder-card"
//   />
//   <img
//     src={woman}
//     alt="placeholder card"
//     className="mot-placeholder-card2"
//   />
//   <div className="small-text pt-2">Motivv for Clients</div>
// </Fade>

//                   {/* card container 1 */}
//                   <div className="mot-user-guide">
//                     <h1 className="medium-texts pb-3">
//                       How to use motivv <br />
//                       as a client
//                     </h1>

//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="text-padding">
//                         <h6 style={styles} className="user-text pl-3">
//                           Enter you email to explore design talents.
//                         </h6>
//                       </div>
//                     </div>

//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="text-padding">
//                         <h6 style={styles} className="user-text pl-3">
//                           Recommended profiles are vetted designers and premium
//                           profiles are elite professional to be hired.
//                         </h6>
//                       </div>
//                     </div>
//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="text-padding">
//                         <h6 style={styles} className="user-text pl-3">
//                           Negotiation is done between the you and the designer.
//                           Our purpose is to connect you two.
//                         </h6>
//                       </div>
//                     </div>
//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="">
//                         <h6 style={styles} className="user-text pl-3">
//                           The designers profiles are approved by our admins,
//                           just so you know that they pass through sorting before
//                           approval.{" "}
//                         </h6>
//                       </div>
//                     </div>
//                   </div>
//                 </Col>
//                 <Col md={5} className="mot-user-placeholders push-top">
//                   <Fade bottom delay={800}>
//                     <img
//                       src={boy}
//                       alt="placeholder card"
//                       className="mot-placeholder-card"
//                     />
//                     <img
//                       src={girl}
//                       alt="placeholder card"
//                       className="mot-placeholder-card2"
//                     />
//                     <div className="small-text pt-2">Motivv for Creatives</div>
//                   </Fade>
//                   <div className="mot-user-guide2">
//                     <h1 className="medium-texts pb-3">
//                       How to use motivv <br />
//                       as a designer
//                     </h1>
//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="">
//                         <h6 style={styles} className="user-text pl-3">
//                           Create a profile with us by submitting your well
//                           arranged portfolio link.
//                         </h6>
//                       </div>
//                     </div>
//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="">
//                         <h6 style={styles} className="user-text pl-3">
//                           We will rate you by what we see – and approve your
//                           profile if you are worthy.
//                         </h6>
//                       </div>
//                     </div>
//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="">
//                         <h6 style={styles} className="user-text pl-3">
//                           Set your valued fee according to how much you charge
//                           by month/project.
//                         </h6>
//                       </div>
//                     </div>
//                     <div style={secondStyles} className="arrow-and-sometexts">
//                       <div>
//                         <img src={arrow} alt="" />
//                       </div>
//                       <div className="">
//                         <h6 style={styles} className="user-text pl-3">
//                           Negotiation is done between you and clients. PS: make
//                           sure you don’t get underpaid from what you provided.
//                         </h6>
//                       </div>
//                     </div>
//                   </div>
//                 </Col>
//               </section>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
