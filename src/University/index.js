import React from "react";
import Header from "./components/Header";
import KickStart from "./components/KickStart";
import SkillsCards from "./components/SkillsCards";
import Footer from "../components/Footer/index";
import Testimonial from "./components/Testimonial";
import Curriculum from "./components/Curriculum";
// import NavBar from "./components/NavBar";
import Accordions from "./components/Accordions";
import StudyPlans from "./components/StudyPlans";

export default function index() {
  return (
    <>
      <Header />
      <KickStart />
      <Curriculum />
      <Testimonial />
      <SkillsCards />
      <Accordions />
      <StudyPlans />
      <Footer />
    </>
  );
}
