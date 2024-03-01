import React from "react";

const Icon = ({
  id,
  className,
  icon,
  fas,
  fontSize,
  disabled,
  onClick,
  color,
}) => {
  console.log("icon", icon);
  return (
    <>
      <i
        id={id}
        className={`icon ${fas ? "fas" : "far"} fa-${icon} ${
          className ? className : ""
        }`}
        disabled={disabled}
        onClick={onClick}
        style={{ fontSize: `${fontSize}px`, color }}
      />
    </>
  );
};

Icon.defaultProps = {
  fontSize: "4x",
  fas: false,
};

export default Icon;
