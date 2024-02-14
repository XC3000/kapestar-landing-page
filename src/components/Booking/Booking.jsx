import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { InlineWidget } from "react-calendly";
const Booking = () => {
  return (
    <section id="booking">
      <InlineWidget url="https://calendly.com/kapestar-founder/30min" />
    </section>
  );
};

// data-url="https://calendly.com/kapestar-founder/30min"
export default Booking;
