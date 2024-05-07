import React from "react";
import "../../style/header.scss";
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import { NavBar } from "../../components/NavBar";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions.jsx";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-content__logo">
          <img alt="logo" src={logo} />
          <div className="header-content__logo-text">SparkIQ</div>
        </div>
        <NavBar />
        <HeaderActions />
        <div className="burger" style={{ maxWidth: "40px", maxHeight: "40px" }}>
          <img
            alt="burger"
            src={burger}
            style={{ maxWidth: "40px", maxHeight: "40px" }}
          />
        </div>
      </div>
    </header>
  );
};
