import React from "react";
import './VariantsSection.scss'
import { Tag } from "../../components/Tag/Tag";
import { Button } from "../../components/Button/Button";


export const VariantItem = ({title, tags, moreButtonColor}) => {
  return (
    <div className="variant-item">
        <div className="variant-item__title">
            {title}
        </div>
        <div className="variant-item__tags">
            {tags.map(t => <Tag label={t} />)}
            <Button className={"variant-item__more-btn"} colorHEX={moreButtonColor} label={"Посмотреть все"} forward  />
        </div>
    </div>
  )
};