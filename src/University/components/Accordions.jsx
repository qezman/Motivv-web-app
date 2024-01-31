import React from "react";
import Accordion from "./Accordion";
import { ReactComponent as Dot } from "../assets/dot.svg";
import "../styles/Accordion.css";

const data = [
  {
    title: "What is motivv design school all about",
    subTitle:
      "You can readily access our Customer support for help with navigating your course (although you may eventually have no need for that).  You can also get a mentor/guide for a very little fee if you want:* Professional advice and support in your learning* Review/Feedback on tasks, examinations and projects",
  },
  {
    title: "Is your curriculum of the actual standard?",
    subTitle:
      "You can readily access our Customer support for help with navigating your course (although you may eventually have no need for that).  You can also get a mentor/guide for a very little fee if you want:* Professional advice and support in your learning* Review/Feedback on tasks, examinations and projects",
  },
  {
    title: "Do I get a certificate after I complete the course?",
    subTitle:
      "You can readily access our Customer support for help with navigating your course (although you may eventually have no need for that).  You can also get a mentor/guide for a very little fee if you want:* Professional advice and support in your learning* Review/Feedback on tasks, examinations and projects",
  },
  {
    title: "How much does the curriculum cost?",
    subTitle:
      "You can readily access our Customer support for help with navigating your course (although you may eventually have no need for that).  You can also get a mentor/guide for a very little fee if you want:* Professional advice and support in your learning* Review/Feedback on tasks, examinations and projects",
  },
  {
    title: "How do I get started?",
    subTitle:
      "You can readily access our Customer support for help with navigating your course (although you may eventually have no need for that).  You can also get a mentor/guide for a very little fee if you want:* Professional advice and support in your learning* Review/Feedback on tasks, examinations and projects",
  },
  {
    title: "Do I get a mentor/guide throughout my study period?",
    subTitle:
      "You can readily access our Customer support for help with navigating your course (although you may eventually have no need for that).  You can also get a mentor/guide for a very little fee if you want:* Professional advice and support in your learning* Review/Feedback on tasks, examinations and projects",
  },
];

export default function Accordions() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-accs pb-5">
      <h3 className="h-active font-weight-bold ">FAQS</h3>
      <p className="text-align-center text-center mb-5 w-90">
        We have curated some questions you may have and we have given
        satisfactory answers. We believe you will have no more questions after
        going through them.
      </p>
      {data.map((info, index) => (
        <Accordion {...info} key={index} />
      ))}

      <span className="email-tag">
        <Dot />
        <span className="ml-2">
          Yo! Can’t find what you’re looking for? Send us a mail
        </span>
      </span>
    </div>
  );
}
