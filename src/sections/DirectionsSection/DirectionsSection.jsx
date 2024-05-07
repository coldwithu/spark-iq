import React from "react";
import "./DirectionsSection.scss";
import { ColorCard } from "../../components/ColorCard/ColorCard";

const directions = [
  {
    body: (
      <div>
        <div className="direction-title">Подготовка к ОГЭ</div>
        <div className="direction-subtitle">Занятия в группах</div>
        <div>
          <div className="line-item">
            <div>Пробное занятие</div>
            <div className="bold">Бесплатно</div>
          </div>
          <div className="line-item">
            <div>Длительность занятия</div>
            <div className="bold">60 минут</div>
          </div>
          <div className="line-item">
            <div>Стоимость</div>
            <div className="bold">1 месяц - 1999 ₽</div>
          </div>
          <div className="line-item">
            <div>Расписание</div>
            <div className="bold">
              Время занаятий зависит от выбранного предмета
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'lime'
  },
  {
    body: (
      <div>
        <div className="direction-title">Школьная программа</div>
        <div className="direction-subtitle">Занятия в группах</div>
        <div>
          <div className="line-item">
            <div>Пробное занятие</div>
            <div className="bold">Бесплатно</div>
          </div>
          <div className="line-item">
            <div>Длительность занятия</div>
            <div className="bold">60 минут</div>
          </div>
          <div className="line-item">
            <div>Стоимость</div>
            <div className="bold">1 месяц - 1599 ₽</div>
          </div>
          <div className="line-item">
            <div>Расписание</div>
            <div className="bold">
              Время занаятий зависит от выбранного предмета
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'lime-dark'
  },
  {
    body: (
      <div>
        <div className="direction-title">Олимпиады</div>
        <div className="direction-subtitle">Занятия в группах</div>
        <div>
          <div className="line-item">
            <div>Пробное занятие</div>
            <div className="bold">Бесплатно</div>
          </div>
          <div className="line-item">
            <div>Длительность занятия</div>
            <div className="bold">60 минут</div>
          </div>
          <div className="line-item">
            <div>Стоимость</div>
            <div className="bold">1 месяц - 2999 ₽</div>
          </div>
          <div className="line-item">
            <div>Расписание</div>
            <div className="bold">
              Время занаятий зависит от выбранного предмета
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'purple'
  },
  {
    body: (
      <div>
        <div className="direction-title">Дополнительные курсы</div>
        <div className="direction-subtitle">Занятия в группах</div>
        <div>
          <div className="line-item">
            <div>Пробное занятие</div>
            <div className="bold">Бесплатно</div>
          </div>
          <div className="line-item">
            <div>Длительность занятия</div>
            <div className="bold">60 минут</div>
          </div>
          <div className="line-item">
            <div>Стоимость</div>
            <div className="bold">1 месяц - 2599 ₽</div>
          </div>
          <div className="line-item">
            <div>Расписание</div>
            <div className="bold">
              Время занаятий зависит от выбранного предмета
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'purple-dark'
  },
];

export const DirectionsSection = () => {
  return (
    <div style={{paddingBottom: '131px'}}>
      <h2>Направления подготовки</h2>
      <div className="card-flex-container">
        {directions.map((i) => (
        <ColorCard className="direction-card" body={i.body} color={i.color} />
      ))}
      </div>
      
    </div>
  );
};
