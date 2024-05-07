import React from "react";
import "../NavBar.scss";
import { Button } from "../Button/Button";

export const HeaderActions = () => {
  return (
    <div style={{ display: "flex", alignItems: 'center', gap: "16px" }}>
      <div>
        <div className="phone-number">
          +7 953 266 92 29
          <div className="caption">Заказать звонок</div>
        </div>
      </div>
      <div>
        <Button className="header-action-button" size="lg" label="Пробный урок" />
      </div>
    </div>
  );
};
