import React from "react";
import "./AdditionalSection.scss";
import { ColorCard } from "../../components/ColorCard/ColorCard";

export const ASItem = ({ color, title, text }) => {
  return (
    <ColorCard
      style={{ backgroundColor: color }}
      body={
        <div>
          <div className="as-title">{title}</div>
          <div className="as-text">{text}</div>
        </div>
      }
    />
  );
};
