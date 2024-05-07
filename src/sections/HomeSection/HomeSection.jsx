import React from "react";
import "./HomeSection.scss";
import student from "../../assets/student.png";
import { Button } from "../../components/Button/Button";

export const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="home-section__content">
        <div>
          <h1>Готовься к ОГЭ  <br /> со SparkIQ - <br /> легко и эффективно</h1>
          <div className="home-section__text">
            SparkIQ - онлайн-школа для подготовки к ОГЭ и изучения школьной
            программы с 1 по 9 класс
          </div>
        </div>

        <div className="home-section__content-person">
          <img alt="person" src={student} />
        </div>
      </div>

      <div className="home-section__buttons">
        <Button className="home-section-button" label="Выбрать курс" />
        <Button
          className="home-section-button"
          color="transparent"
          label="Получить консультацию"
        />
      </div>
    </div>
  );
};
