"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const values = {
    user_name: name,
    user_email: email,
    message: msg,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_supneat",
      "template_omgf3ko",
      values,
      "WqO204-B5iAk_v5D7"
    );
    setName("");
    setEmail("");
    setMsg("");
  };
  return (
    <div id="about">
      {" "}
      <h1 className="text-center pt-5">
        <span style={{ color: "navy" }}> Contact </span> Me
      </h1>
      <p className="text-center pt-5 sub-head">
        ______________Available everytime________________
      </p>
      {/* <div className="contact-info">
        <div>
          <FaPhoneAlt fontSize={20} color="green" />{" "}
          <input className="info-btn" defaultValue="+923078331012" />
        </div>

        <div>
          <AiFillMail fontSize={25} color="green" />
          <input
            className="info-btn"
            defaultValue={"salmanpatrick5@gmail.com"}
          />
        </div>
      </div> */}
      <div className="contact-form">
        <div className="about-content">
          <motion.img
            src="/laptop.png"
            alt=""
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          />
          {/* <p>
            I'm a full stack web developer , Android Apps & Game Developer. I
            have been coding for many years and I have built numerous projects.
          </p> */}
        </div>
        <form on onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Your Message"
            onChange={(e) => setMsg(e.target.value)}
          />
          <button>Send Mail</button>
        </form>
      </div>
    </div>
  );
};

export default About;
