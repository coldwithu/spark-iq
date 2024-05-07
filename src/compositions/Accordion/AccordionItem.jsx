import React, { useState } from "react";
import "./Accordion.scss";
import plusIcon from "../../assets/plus.svg";

export const AccordionItem = ({ header, body }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="accordion-item">
      <div className="aci-header">
        <div>{header}</div>
        <div
          className={`aci-toggler ${!!toggled && "toggled"}`}
          onClick={() => setToggled((prev) => !prev)}
        >
          <img alt="toggler" src={plusIcon} />
        </div>
      </div>
      <div className={`aci-body ${!!toggled && "toggled"}`}>{body}</div>
    </div>
  );
};
