import React from "react";
import { staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

import css from "./Contact.module.scss";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
      id="contact"
    >
      <a className="anchor" id="experties"></a>
      <div className={`paddings yPaddings innerWidth ${css.innerContainer}`}>
        <h1 className="text-center mb-5">
          Love to hear from you, <br />
          Get in touch 👋
        </h1>

        <form>
          <div className="grid">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    You are
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please Select</option>
                    <option value="3">Customer</option>
                    <option value="1">Stylist</option>
                    <option value="2">Salon Owner</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Issue Type
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please Select</option>
                    <option value="1">Ccmplaint</option>
                    <option value="2">Suggestion</option>
                    <option value="3">Get In touch</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              In a brief tell us more
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <Button>Get in touch</Button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
