import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { headerData } from "../Header/Header";
import { Link } from "react-router-dom";

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
    <div class="container">
      <footer class="pt-5">
        <div class="row flex justify-content-between">
          <div class="col-12 col-md-2 mb-3">
            <h5>Product</h5>
            <ul class=" flex-column">
              {headerData.map((item, index) => (
                <li class="nav-item mb-2" key={index}>
                  <a href={item.link} class="nav-link p-0 text-muted">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="col-12 col-md-2 mb-3">
            <h5>Company</h5>
            <ul class=" flex-column">
              {data.map((item, index) => (
                <li class="nav-item mb-2" key={index}>
                  <Link to={item.link} class="nav-link p-0 text-muted">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Subscribe to stay updated about latest offers.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
          <p>
            <img src="/favicon.png" width="70px" height="70px" alt="kapestar" />
            © 2023 Kapestar Pvt Ltd. All rights reserved.
          </p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
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
