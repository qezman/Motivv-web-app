import React from "react";
import Branding from "../assets/Branding.jpg";
import "../styles/style.css";

export default function SkillsCard() {
  return (
    <div className="bg-brand">
      <img src={Branding} alt="" />
    </div>
  );
}
