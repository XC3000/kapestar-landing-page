import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { headerData } from "../Header/Header";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const data = [
  {
    name: "Privacy Policy",
    link: "/privacy",
  },

  {
    name: "Terms & Conditions",
    link: "/terms",
  },

  {
    name: "Cancellation & Refund Policy",
    link: "/cancellation",
  },

  {
    name: "Shipping & Delivery Policy",
    link: "/shipping",
  },

  // {
  //   name: "Contact us",
  //   link: "#contact",
  // },
];

// const product = [
//   {
//     link: "#hero",
//     name: "Home",
//   },
//   {
//     link: "#about",
//     name: "About",
//   },
//   {
//     link: "#onboarding",
//     name: "Onboarding",
//   },
//   {
//     link: "#contact",
//     name: "Contact",
//   },
// ];

const Footer = () => {
  return (
    <div className="container">
      <footer className="pt-5">
        <img
          className="mb-3"
          src="/logo.png"
          width="150px"
          height="40px"
          alt="kapestar"
        />
        <div className="row flex justify-content-between">
          <div className="col-12 col-md-2 mb-3">
            <h5>Product</h5>
            <ul className=" flex-column">
              {headerData.map((item, index) => (
                <li className="nav-item mb-2" key={index}>
                  <a href={item.link} className="nav-link p-0 text-muted">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-3">
            <h5>Company</h5>
            <ul className=" flex-column">
              {data.map((item, index) => (
                <li className="nav-item mb-2" key={index}>
                  <Link to={item.link} className="nav-link p-0 text-muted">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Subscribe to stay updated about latest offers.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <Button type="button">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
          <p>© 2023 Kapestar Pvt Ltd. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
