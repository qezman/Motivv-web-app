import React from "react";
import { TemplateSidebarItem } from "./TemplateSidebarItem";
import style from "./template-sidebar.module.css";
import DesignIcon from "../../../assets/design-icon.svg";
import StrategyIcon from "../../../assets/strategy-icon.svg";
import ManagementIcon from "../../../assets/management-icon.svg";
import ClientsIcon from "../../../assets/clients-icon.svg";
import LegalIcon from "../../../assets/legal-icon.svg";
import OthersIcon from "../../../assets/others-icon.svg";

export const SidebarCategories = ({
  design,
  strategy,
  management,
  clients,
  legal,
  others,
  all,
}) => {
  return (
    <>
      <section className={style.motTemplateSidebarHeader}>
        <h3>
          All Categories <span>{`${all}`}</span>
        </h3>
      </section>
      <section className={style.motTemplateSidebarList}>
        <div className="">
          <TemplateSidebarItem
            icon={DesignIcon}
            type="design"
            amount={design || "0"}
          />
          <TemplateSidebarItem
            icon={StrategyIcon}
            type="strategy"
            amount={strategy || "0"}
          />
          <TemplateSidebarItem
            icon={ManagementIcon}
            type="management"
            amount={management || "0"}
          />
          <TemplateSidebarItem
            icon={ClientsIcon}
            type="clients"
            amount={clients || "0"}
          />
          <TemplateSidebarItem
            icon={LegalIcon}
            type="legal"
            amount={legal || "0"}
          />
          <TemplateSidebarItem
            icon={OthersIcon}
            type="others"
            amount={others || "0"}
          />
        </div>
      </section>
    </>
  );
};
