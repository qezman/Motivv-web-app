import React, { useContext } from "react";
import ReactHtmlParser from "react-html-parser";
import { Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import DesignImage from "../../assets/default-image.svg";
import { ChallengeContext } from "../ChallengeContext";
//styles
import { ReactComponent as MotCategory } from "../../assets/mot-category.svg";
import { ReactComponent as MotAttempts } from "../../assets/mot-attempts.svg";
import { ReactComponent as MotType } from "../../assets/mot-type.svg";

import "./style.css";
import { truncate } from "./helpers";
export const DesignChallengeCard = ({
  id,
  name,
  description,
  attempts,
  track,
  industry,
  link,
  tags,
}) => {
  const { isEdit } = useContext(ChallengeContext);
  const history = useHistory();
  return (
    <Col md={9} className="p-0" onClick={() => isEdit(id, history)}>
      <div className="mot-challenge-card mb-5">
        <div className="challenge-icon">
          <img src={DesignImage} alt="paystack redesign" />
        </div>
        <div className="mot-challenge-details">
          <h2 className="challenge-details-name">{name}</h2>
          <div className="challenge-details-description">
            {ReactHtmlParser(truncate(description))}
          </div>
          <div className="d-flex justify-content-between mt-1 align-items-center">
            <div className="mot-challenge-info d-flex">
              <span className="pr-2 d-flex mot-challenge-info-items">
                <MotAttempts />
                <p className="pl-2 mb-0">{attempts} attempts</p>
              </span>
              <span className="px-2 d-flex mot-challenge-info-items">
                <MotType />
                <p className="pl-2 mb-0">{track}</p>
              </span>
              <span className="px-2 d-flex mot-challenge-info-items">
                <MotCategory />
                <p className="pl-2 mb-0">{industry}</p>
              </span>
              <div className="ml-1 d-flex">
                {tags &&
                  // tags.length > 0 &&
                  tags.map((t) => (
                    <span key={t} className="tag-container">
                      {t}
                    </span>
                  ))}
              </div>
            </div>
            <div className="mot-challenge-link">
              <Link to={link}>View Brief</Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
