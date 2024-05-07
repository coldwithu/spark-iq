import React from "react";
import "./TeachersSection.scss";
import Elena from "../../assets/elena.png";
import Mihail from "../../assets/mihail.png";
import Valeria from "../../assets/valeria.png";
import Nadejda from "../../assets/nadejda.png";
import { TeachersCard } from "./TeachersCard";

const teachers = [
  {
    name: "Елена",
    lesson: "Русский язык",
    note: "Кандидат филологических наук, доцент, эксперт ОГЭ, автор учебных пособий",
    photo: <img alt="teacher" src={Elena} />,
  },
  {
    name: "Михаил",
    lesson: "Математика",
    note: "Кандидат физико-математических наук, член жюри всероссийской олимпиады по математике",
    photo: <img alt="teacher" src={Mihail} />,
  },
  {
    name: "Валерия",
    lesson: "Английский язык",
    note: "Учитель английского языка начальных классов, обладатель сертификатов CELTA и TKT",
    photo: <img alt="teacher" src={Valeria} />,
  },
  {
    name: "Надежда",
    lesson: "Биология",
    note: "Эксперт ОГЭ, разработчик материалов по методике преподавания биологии, автор учебных пособий",
    photo: <img alt="teacher" src={Nadejda} />,
  },
];
export const TeachersSection = () => {
  return (
    <div style={{paddingBottom: '100px'}}>
      <h2>Преподаватели</h2>
      <div className="flex justify-content-center">
        <div className="flex" style={{ gap: "10px", flexWrap: "wrap" }}>
        {teachers.map((teacher) => (
          <TeachersCard {...teacher} />
        ))}
      </div>
      </div>
      
    </div>
  );
};
