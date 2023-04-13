import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import useWindowScroll from "../../hooks/useWindowScroll";

import "./Header.scss";

export const headerData = [
  {
    external: false,
    link: "/",
    name: "Home",
  },
  {
    external: false,
    link: "#about",
    name: "About",
  },
  {
    external: false,
    link: "#onboarding",
    name: "Onboarding",
  },
  {
    external: false,
    link: "#contact",
    name: "Contact",
  },
  {
    external: false,
    link: "/cost-calculator",
    name: "Calculator",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");
  const isScrolled = useWindowScroll();

  return (
    <header
      className={`header ${isScrolled > 0 ? "nav-fixed" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src="/logo.png" alt="kapestar" width="100" height="20" />
        </Link>

        <div
          className={`nav__menu ${isMobile && showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {headerData.map((item, index) => (
              <li key={index} className="nav__item">
                <Link to={item.link} className="nav__link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {isMobile ? (
            <div className="nav__close" id="nav-close">
              <i
                className="bx bx-x-circle"
                onClick={() => {
                  setShowMenu(false);
                }}
              ></i>
            </div>
          ) : null}
        </div>

        {isMobile ? (
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <i className="bx bx-menu"></i>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
