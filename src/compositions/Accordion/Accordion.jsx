import React from "react";
import "./Accordion.scss";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((i) => (
        <AccordionItem header={i.header} body={i.body} />
      ))}
    </div>
  );
};
