import React from "react";
import css from "./Button.module.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={css.cta} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
