import React from "react";
import "../styles/studyPlans.css";
import StudyPlansCard from "./StudyPlansCard";

const StudyPlans = () => {
  return (
    <div className="study__plans__section">
      <div className="study__plans__section__heading">
        <h1>Study Plans</h1>
        <p>
          Ready to make professional designs? Choose A plan that matches your
          Needs
        </p>
      </div>
      <StudyPlansCard />
    </div>
  );
};

export default StudyPlans;
