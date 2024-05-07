import React from "react";
import "./VariantsSection.scss";
import { VariantItem } from "./VariantItem";

const variants = [
  {
    title: "Дошкольники",
    tags: ["Английский", "Занятия с логопедом", "Подготовка к школе", "Курсы"],
    color: "#F2F2C5",
  },
  {
    title: "1-4 класс",
    tags: [
      "Школьная программа",
      "Английский",
      "Программирование",
      "Дополнительные курсы",
    ],
    color: "#D3E09A",
  },
  {
    title: "5-9 класс",
    tags: [
      "Подготовка к ОГЭ",
      "Школьная программа",
      "Английский",
      "Дополнительные курсы",
      "Курсы",
    ],
    color: "#D3C5F0",
  },
  {
    title: "Дополнительно",
    tags: [
      "Финансовая грамотность",
      "Олимпиады",
      "Программирование",
      "Экономика",
    ],
    color: "#B5AEF3",
  },
];
export const VariantsSection = () => {
  return (
    <div>
      <h2>Варианты обучения</h2>
      <div className="variants-section">
        {variants.map((v) => (
          <VariantItem
            title={v.title}
            tags={v.tags}
            moreButtonColor={v.color}
          />
        ))}
      </div>
    </div>
  );
};
