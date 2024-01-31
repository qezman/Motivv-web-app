import React from "react";
import { testimonialData } from "../data";
import "../styles/testimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial__card__section">
      {testimonialData &&
        testimonialData.map((data, index) => {
          // eslint-disable-next-line no-unused-vars
          const { author, image, text } = data;

          return (
            <div className="testimonial__card__container" key={index}>
              <div className="card testimonial__card" >
                <img
                  className="card-img-top"
                  src={image}
                  alt="testimonial author"
                />
                <div className="card-body testimonial__card__cardbody">
                    <p className="princess">“</p>
                  <p className="card-text">{text}</p>
                  <h5 className="card-title">{author}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TestimonialCard;
