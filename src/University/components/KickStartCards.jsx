import React from "react";

export default function KickStartCards({
  title,
  icon: Icon,
  bgColor,
  subTitle,
}) {
  return (
    <div
      className="d-flex-column pt-5 pb-4 px-3"
      style={{
        backgroundColor: bgColor,
        color: "#000",
        height: "350px",
        width: "auto",
      }}
    >
      <Icon />
      <h4 className="font-weight-bold mt-5">{title}</h4>

      <p className="pr-3">{subTitle}</p>
    </div>
  );
}
