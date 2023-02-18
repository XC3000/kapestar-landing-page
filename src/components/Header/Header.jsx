import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import useWindowScroll from "../../hooks/useWindowScroll";

const data = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/",
    name: "About",
  },
  {
    link: "/",
    name: "Onboarding",
  },
  {
    link: "/",
    name: "Contact",
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
        <a href="#" className="nav__logo">
          Kapestar
        </a>

        <div
          className={`nav__menu ${isMobile && showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {data.map((item) => (
              <li className="nav__item">
                <a href={item.link} className="nav__link">
                  {item.name}
                </a>
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
