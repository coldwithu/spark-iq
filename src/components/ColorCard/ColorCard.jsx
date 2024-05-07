import React from "react";
import "./ColorCard.scss";
import { Button } from "../Button/Button";

export const ColorCard = ({ body, color = "lime", style, className }) => {
  return (
    <div style={style} className={`color-card card-${color} ${className}`}>
      {body}
      <div className="flex">
        <Button
          className="card-button"
          label="Узнать больше"
          color="transparent"
        />
      </div>
    </div>
  );
};
