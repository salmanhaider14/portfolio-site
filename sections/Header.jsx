"use client";
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
const Header = () => {
  return (
    <div id="header">
      <div className="header-container">
        <motion.div
          className="header-content"
          initial={{ y: -10 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <p style={{ color: "navy", fontWeight: "bold" }}>
            {" "}
            Web | Android | Games{" "}
          </p>
          <h1>
            Hi! &nbsp; I'm <br></br>{" "}
            <span style={{ color: "navy" }}>Salman Haider</span>
          </h1>

          <p style={{ lineHeight: "25px", fontSize: "22px" }}>
            A versatile software developer, driven by a passion for crafting
            fast, scalable, and efficient solutions. With a solid foundation in
            coding and a dedication to mastering emerging technologies, I thrive
            on solving challenges and embracing opportunities for growth and
            innovation.
          </p>
          <ul>
            <SocialIcons />
          </ul>
        </motion.div>
        <div>
          <motion.img
            src="/programmer.png"
            alt=""
            initial={{ y: -10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
