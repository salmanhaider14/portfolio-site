import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaAngleUp,
  FaGithub,
  FaLinkedin,
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
          <a
            href="https://web.facebook.com/profile.php?id=100049396515197"
            target="_blank"
          >
            <FaFacebook className="icon" color="white" />
          </a>
          <a href="https://github.com/salmanhaider14" target="_blank">
            <FaGithub className="icon" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/salman-patrick/" target="_blank">
            <FaLinkedin className="icon" color="white" />
          </a>
          {/* <FaTwitter className="icon" /> */}
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
        <h1>Copyright @ 2024 Salman Haider</h1>
      </div>
    </div>
  );
};

export default Footer;
