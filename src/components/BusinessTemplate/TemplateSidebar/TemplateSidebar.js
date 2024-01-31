import React from "react";
import style from "./template-sidebar.module.css";
//eshIcon from "../../../assets/refresh-icon.svg";
import { SidebarCategories } from "./SidebarCategories";
import { SidebarTools } from "./SidebarTools";

const TemplateSidebar = ({ templates, copy, setTemplates }) => {
  const clients = templates.filter(
    (t) => t.category.toLowerCase() === "client"
  ).length;
  const design = templates.filter(
    (t) => t.category.toLowerCase() === "design"
  ).length;
  const strategy = templates.filter(
    (t) => t.category.toLowerCase() === "strategy"
  ).length;
  const management = templates.filter(
    (t) => t.category.toLowerCase() === "management"
  ).length;
  const legal = templates.filter(
    (t) => t.category.toLowerCase() === "legal"
  ).length;
  const others = templates.filter(
    (t) => t.category.toLowerCase() === "other"
  ).length;
  const all = templates.length;
  return (
    <div className={style.motTemplateSidebar}>
      <SidebarCategories
        design={design}
        management={management}
        clients={clients}
        legal={legal}
        others={others}
        strategy={strategy}
        all={all}
      />
      <span className="d-flex justify-content-center align-items-start w-100 mt-4 mot-template-list-refresh">
        {/*
        <img
          src={RefreshIcon}
          alt="refresh the list of categories"
          className="mr-2"
        />
        <p>View More</p>
        */}
      </span>
      <SidebarTools copy={copy} setTemplates={setTemplates} />
    </div>
  );
};

export default TemplateSidebar;
