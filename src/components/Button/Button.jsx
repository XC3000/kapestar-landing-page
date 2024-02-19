import React from "react";
import css from "./Button.module.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={css.cta} {...otherProps}>
      {children}
    </button>
  );
};

export const ButtonLink = ({ children, ...otherProps }) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.kapestar.salonowner"
      target="_blank"
      className={css.cta}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Button;
