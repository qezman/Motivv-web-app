import React from "react";
import "../styles/Accordion.css";
import { ReactComponent as Icon } from "../assets/Group 2102.svg";
import { ReactComponent as UpIcon } from "../assets/Group 2102 (1).svg";

export default function Accordion({ title, subTitle }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      role="button"
      className={open ? "b-active p-4 mb-2" : "b-normal p-4 mb-2"}
    >
      <div className="ds-flex">
        <h6
          className={
            open
              ? "acc-font-header font-weight-bold h-active"
              : "acc-font-header font-weight-bold"
          }
        >
          {title}
        </h6>
        <div>{!open ? <Icon /> : <UpIcon />}</div>
      </div>
      {open && (
        <div>
          <hr />
          <p className="p-acc">{subTitle}</p>
        </div>
      )}
    </div>
  );
}
