import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
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

          <p>
            I'm a full stack web developer , Android Apps & Game Developer. I
            have been coding for many years and I have built numerous projects.
          </p>
          <ul>
            <li>
              {" "}
              <FaFacebook fontSize={35} color="navy" />
            </li>

            <li>
              <FaInstagram fontSize={35} color="red" />
            </li>
            <li>
              <FaYoutube fontSize={35} color="red" />
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
