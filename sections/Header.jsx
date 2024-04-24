import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
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
            a full-stack web developer and mobile app/game developer with a
            passion for building fast, scalable, and efficient solutions. With a
            strong background in coding and a commitment to staying up-to-date
            with the latest technologies, I'm always looking for new
            opportunities to grow and learn.
          </p>
          <ul>
            <li>
              {" "}
              <a
                href="https://web.facebook.com/profile.php?id=100049396515197"
                target="_blank"
              >
                <FaFacebook fontSize={35} color="navy" />
              </a>
            </li>

            <li>
              <a href="https://github.com/salmanhaider14" target="_blank">
                {" "}
                <FaGithub fontSize={35} color="black" />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/salman-patrick/"
                target="_blank"
              >
                {" "}
                <FaLinkedin fontSize={35} color="blue" />
              </a>
            </li>
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

      {/* 
     <img src="/meme.png" className="meme" alt = "" /> */}
    </div>
  );
};

export default Header;
