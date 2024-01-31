import React from "react";
// import { Row, Col } from "react-bootstrap";
// import SkillsCard from "./SkillsCard";
// import Img1 from "../assets/Illustration.png";
import "../styles/style.css";

export default function SkillsCards() {
  return (
    <div className="styleDiv">
      <div className="styleContainer mb-1">
        <div className="bg-branding mr-1">
          <h1 className="font-weight-bold mb-5"> Visual/Branding </h1>
        </div>
        <div className="bg-UI">
          <h1 className="font-weight-bold mb-5"> UI/UX </h1>
        </div>
      </div>

      <div className="styleContainer">
        <div className="bg-graphic mr-1">
          <h1 className="font-weight-bold mb-5"> Graphic Design </h1>
        </div>
        <div className="bg-art">
          <h1 className="font-weight-bold mb-5"> Art/Illustration </h1>
        </div>
      </div>
    </div>
  );
}
