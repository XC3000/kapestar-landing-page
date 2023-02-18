import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

const data = [
  {
    name: "Privacy Policy",
    link: "https://merchant.razorpay.com/policy/LHctrgqDRRt9Hx/privacy",
  },

  {
    name: "Terms & Conditions",
    link: "https://merchant.razorpay.com/policy/LHctrgqDRRt9Hx/terms",
  },

  {
    name: "Cancellation & Refund Policy",
    link: "https://merchant.razorpay.com/policy/LHctrgqDRRt9Hx/refund",
  },

  {
    name: "Contact us",
    link: "https://merchant.razorpay.com/policy/LHctrgqDRRt9Hx/contact_us",
  },
];

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          {/* <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span> */}
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>West Bengal, India</p>
          </div>
          <ul className={css.menu}>
            {data.map(({ name, link }) => (
              <li>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
