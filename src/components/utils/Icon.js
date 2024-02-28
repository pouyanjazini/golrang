import React from "react";
import PropTypes from "prop-types";
import { SearchOutlined } from "@ant-design/icons";

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
      {/* <SearchOutlined /> */}
      <i
        id={id}
        className={`icon ${fas ? "fas" : "far"} fa-${icon} ${
          className ? className : ""
        }`}
        disabled={disabled}
        onClick={onClick}
        style={{ fontSize: `${fontSize}px`, color: color }}
      />
    </>
  );
};

Icon.defaultProps = {
  fontSize: "4x",
  fas: false,
};

Icon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  fas: PropTypes.bool,
  fontSize: PropTypes.oneOf(["1x", "2x", "3x", "4x", "5x", "6x"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Icon;
