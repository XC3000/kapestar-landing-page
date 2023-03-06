import React from "react";
// import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

import css from "./Hero.module.scss";
import Button from "../Button/Button";
// import css from "./NewHero.module.scss";
// import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings `}>
      <div className={css.wrapper}>
        <div className={css.taglineWrapper}>
          <p className={css.tagline}>
            We are looking to enhance your appearance
          </p>

          <p className={css.details}>
            You will leave feeling confident and poised, ready to take on the
            challenges of the world with ease and grace.
          </p>

          <div className={css.actions}>
            <Button>
              Get Started <FaGooglePlay /> <BsApple />{" "}
            </Button>
          </div>
        </div>

        <div className={css.heroImgContainer}>
          <img className={css.heroImg} src="./illus.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
