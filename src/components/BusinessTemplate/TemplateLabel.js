import React from "react";
import { Badge } from "react-bootstrap";
import "./template-general.css";

export const TemplateLabel = ({ svg, content, evt, styling = "" }) => {
  return (
    <Badge
      pill
      className={`d-flex mot-template-label ${styling}`}
      onClick={evt}
    >
      <img src={svg} alt={content} className="mot-template-label__image" />
      <span>{content}</span>
    </Badge>
  );
};
