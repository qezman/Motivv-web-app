/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import style from "./template-sidebar.module.css";

export const ToolTypeItem = ({ icon, type, tool, onClick }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked) {
      onClick(tool);
    } else {
      onClick("");
    }
  }, [checked]);
  return (
    <div className={style.motTemplateToolItem}>
      <span className={style.motTemplateToolItemInfo}>
        <img src={icon} alt={type} className="img-fluid" />
        <h4 className="ml-2">{type}</h4>
      </span>
      <div
        className={style.motTemplateToolCheckbox}
        onClick={async () => {
          await setChecked(!checked);
        }}
      >
        <input
          id="mot-template-checkbox"
          type="checkbox"
          checked={checked}
          className={style.motTemplateToolInputCheckbox}
          readOnly
        />
        <span className={style.motTemplateCheck}></span>
        <label htmlFor="mot-template-checkbox"></label>
      </div>
    </div>
  );
};
