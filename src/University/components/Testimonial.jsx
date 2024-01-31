import React from "react";
import "../styles/testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="testimonial__section">
      <div className="testimonial__container">
        <h1 className="testimonial__section__heading">
          What people have to say about our design school
        </h1>
        <p className="testimonial__section__subheading">
          You don’t Have to be talented in design to become an expert designer.
          Newbie and Average Designers Have Used Our In-depth Curriculum To
          become Experts.
        </p>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
