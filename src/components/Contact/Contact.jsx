import React, { useState } from "react";
import { staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

import css from "./Contact.module.scss";
import Button from "../Button/Button";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !userType || !issue || !description) {
      toast.error("Please fill all the fields");
      return;
    }

    setName("");
    setEmail("");
    setUserType("");
    setIssue("");
    setDescription("");
    toast.success("Your message has been sent successfully");
  };

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

        <form onSubmit={onSubmit}>
          <div className="grid">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={5}
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6">
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    minLength={5}
                    maxLength={20}
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
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    required
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
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    required
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              minLength={5}
              maxLength={20}
            ></textarea>
          </div>

          <Button>Get in touch</Button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
