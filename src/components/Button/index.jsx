import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[30px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    green_A400_d3: "bg-green-A400_d3 text-white-A700",
    green_A400: "bg-green-A400 text-white-A700",
    green_A400_02: "bg-green-A400_02",
  },
};
const sizes = { xs: "p-[9px]", sm: "p-3", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "green_A400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_A400_d3", "green_A400", "green_A400_02"]),
};

export { Button };
