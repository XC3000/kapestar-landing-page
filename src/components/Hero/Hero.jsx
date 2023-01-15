import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
// import css from "./Hero.module.scss";
import css from "./NewHero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings `}>
      <div className={css.wrapper}>
        <div>
          <p className={css.tagline}>Transform your look, Transform yourself</p>

          <h1 className={css.heading}>
            <span>Kapestar</span> elevates your salon experience
          </h1>

          <p className={css.details}>
            Experience the ultimate in hair and beauty with our salon app. Book
            appointments, view stylist portfolios, and receive exclusive deals
            and discounts all at the touch of your fingertips. From hair cuts to
            color and nails, we have everything to make you look and feel your
            best.
          </p>

          <button className={css.cta}>Get Kapestar!</button>
        </div>

        <img className={css.heroImg} src="./phone.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
