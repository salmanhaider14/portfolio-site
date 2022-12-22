import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaAngleUp,
} from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div>
      <ScrollToTop smooth component={<FaAngleUp fontSize={30} />} />
      <div className="footer-container">
        <motion.div
          className="social"
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
        </motion.div>
        <ul>
          <li>
            <a href="#header">Services</a>
          </li>
          <li>
            <a href="#checkout">Work</a>
          </li>
          <li>
            <a href="#money">Skills</a>
          </li>
          <li>
            <a href="#about">About </a>
          </li>
        </ul>
        <h1>Copyright @ 2022 Salman Haider</h1>
      </div>
    </div>
  );
};

export default Footer;
