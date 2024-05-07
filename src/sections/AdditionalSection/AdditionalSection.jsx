import React from "react";
import "./AdditionalSection.scss";
import { ASItem } from "./ASItem";

export const AdditionalSection = () => {
  return (
    <div style={{paddingBottom: '100px'}}>
      <h2>Дополнительные услуги</h2>
      <div className="as-main-wrapper">
        <div className="as-child-wrapper">
          <div className="as-child-wrapper__column-item flex-column w-full">
            <ASItem
              title="Мини-группы"
              text={
                <>
                  <div>Как с репетитором, но дешевле</div>
                  <div>
                    Онлайн-занятия в кругу учеников. Группа собирается по уровню
                    подготовки
                  </div>
                </>
              }
              color="#F7F7DC"
            />
            <div className="as-child-wrapper__column-item">
              <ASItem
                title="Репетиторы"
                text={
                  <>
                    <div>Индивидуальный подход</div>
                    <div>
                      Онлайн-занятия с удобным расписанием. Репетитор составит
                      план и поможет разобраться в темах.
                    </div>
                  </>
                }
                color="#D3C5F0E5"
              />
            </div>
          </div>

          <ASItem
            title="Курсы"
            text={
              <>
                <div>Для самостоятельных</div>
                <div>
                  Готовая программа с онлайн-занятиями и поддержкой куратора.
                  Следуйте учебному плану и отмечайте свой прогресс, чтобы
                  добиться нужной образовательной цели
                </div>
              </>
            }
            color="#D3E09AD9"
          />
        </div>

        <div className="as-child-wrapper flex-column">
          <ASItem
            title="Телеграм - бот"
            text={
              <>
                <div>
                  Ответим на вопросы в любое время и проконсультируем насчет
                  программы обучения
                </div>
              </>
            }
            color="#B5AEF3D9"
          />

          <div className="flex">
            <div className="flex flex-column">
              <ASItem
              title="Учебник"
              text={
                <>
                  <div>Индивидуальный подход</div>
                  <div>
                    Бесплатные материалы по всем предметам и тренажеры для
                    закрепления знаний
                  </div>
                </>
              }
              color="#F2F2C5"
            />
            <ASItem
              title="Курсы"
              text={
                <>
                  <div>Консультация</div>
                  <div>
                    Ответим на вопросы и поможем выбрать программу обучения
                  </div>
                </>
              }
              color="#D3C5F099"
            />
            </div>
            
            <ASItem
              title="Курсы"
              text={
                <>
                  <div>Бесплатные материалы</div>
                  <div>
                    Учебник по всем предметам с 1 по 9 классы, тренажеры и
                    тесты.
                  </div>
                </>
              }
              color="#D3E09A99"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
