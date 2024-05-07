import React from "react";
import "./style/app.scss";
import { Header } from "./compositions/Header/Header";
import { HomeSection } from "./sections/HomeSection/HomeSection";
import { DirectionsSection } from "./sections/DirectionsSection/DirectionsSection";
import { VariantsSection } from "./sections/VariantsSection/VariantsSection";
import { AdditionalSection } from "./sections/AdditionalSection/AdditionalSection";
import { TeachersSection } from "./sections/TeachersSection/TeachersSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { TelegramSection } from "./sections/TelegramSection/TelegramSection";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <HomeSection />
          <DirectionsSection />
          <VariantsSection />
          <AdditionalSection />
          <TeachersSection />
          <FAQSection />
          <TelegramSection />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
