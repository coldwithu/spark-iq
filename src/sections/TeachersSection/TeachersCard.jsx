import React from "react";
import "./TeachersSection.scss";
import { Button } from "../../components/Button/Button";

export const TeachersCard = ({ name, lesson, note, photo }) => {
  return (
    <div className="teachers-card">
      <div
        className="flex justify-content-between"
        style={{ paddingBottom: "24px" }}
      >
        <div style={{ paddingTop: "40px" }}>
          <div className="teachers-card__name">{name}</div>
          <div className="teachers-card__lesson">{lesson}</div>
        </div>
        <div className="teachers-card__photo">{photo}</div>
      </div>
      <div className="teachers-card__note">{note}</div>

      <Button
        colorHEX={"#000"}
        style={{ color: "white" }}
        className="teachers-card__button"
        label="Узнать больше"
        color="transparent"
      />
    </div>
  );
};
