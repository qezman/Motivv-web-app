import React from "react";
import KickStartCards from "./KickStartCards";
import { Row, Col } from "react-bootstrap";
import { data } from "../data";

export default function () {
  return (
    <div className="ds-flex bg-black ">
      <div style={{ width: "7%", flex: 1 }}></div>
      <div style={{ width: "93%" }}>
        <h3 className="font-weight-bold">
          Kickstart your design journey with <br /> everything you need and many
          more...
        </h3>
        <p style={{ marginBottom: "80px" }}>
          {" "}
          The path to becoming a professional, well paid designer has never been
          easier.
        </p>

        <div className="ds-inline-res">
          {data.map((item, index) => (
            <KickStartCards {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
