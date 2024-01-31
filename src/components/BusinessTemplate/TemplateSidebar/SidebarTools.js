import React from "react";
import Figma from "../../../assets/figma.svg";
import Notion from "../../../assets/notion.png";
import Airtable from "../../../assets/airtable.png";
import Office from "../../../assets/office.png";
import Sheets from "../../../assets/sheets.png";

import { ToolTypeItem } from "./ToolTypeItem";

import style from "./template-sidebar.module.css";

export const SidebarTools = ({ copy, setTemplates }) => {
  const filterByToolType = async (type) => {
    if (!type || type === "") {
      return setTemplates(copy);
    }
    setTemplates(
      copy.filter((c) => c.tool.toLowerCase() === type.toLowerCase())
    );
  };
  return (
    <>
      <section className={style.motTemplateSidebarHeaderTwo}>
        <h3>Tools</h3>
      </section>
      <section className={style.motTemplateSidebarList}>
        <div className="">
          <ToolTypeItem
            onClick={filterByToolType}
            icon={Figma}
            type="Figma"
            tool="figma"
          />
          <ToolTypeItem
            onClick={filterByToolType}
            icon={Notion}
            type="Notion"
            tool="notion"
          />
          <ToolTypeItem
            onClick={filterByToolType}
            icon={Airtable}
            type="Airtable"
            tool="airtable"
          />
          <ToolTypeItem
            onClick={filterByToolType}
            icon={Office}
            type="Google Docs"
            tool="office"
          />
          <ToolTypeItem
            onClick={filterByToolType}
            icon={Sheets}
            type="Microsoft Excel"
            tool="sheets"
          />
        </div>
      </section>
    </>
  );
};
