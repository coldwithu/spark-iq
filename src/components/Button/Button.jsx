import React from "react";
import "./Button.scss";
import forwardIcon from "../../assets/forward.svg";

export const Button = ({
  label,
  size = "m",
  color = "lime",
  className,
  forward = false,
  colorHEX = null,
  style,
  onClick,
  disabled
}) => {
  const onButtonClick = disabled ? () => {} : onClick;
  return (
    <button
      className={`button button-${size} ${
        !colorHEX && `button-${color}`
      } ${className} ${disabled && 'btn-disabled'} flex`}
      style={{ ...style, backgroundColor: colorHEX }}
      onClick={onButtonClick}
    >
      <div className="flex justify-content-center flew-grow-1 w-full">{label}</div>
      {forward && <img alt="forward" src={forwardIcon} />}
    </button>
  );
};
