import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services">
      <motion.h1
        className="text-center pt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <span style={{ color: "navy" }}> The Services</span> I Offer
      </motion.h1>
      <p className="text-center pt-5 sub-head ">
        ___________I never compromise on quality____________
      </p>
      <motion.div
        className="services-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="services-cards">
          <div className="service-card">
            <img src="/frontend.png" alt="" />
            <h3 className="text-center pt-3">Frontend Developer</h3>
          </div>
          <div className="service-card">
            <img src="/backend.png" alt="" />
            <h3 className="text-center pt-3">Backend Developer</h3>
            <p className="text-start ps-3 pt-3">
              Back-end Development refers to the server-side development. It
              focuses on databases, scripting, website architecture. It contains
            </p>
          </div>{" "}
          <div className="service-card">
            <img src="/unitydev.png" width={25} alt="" />
            <h3 className="text-center pt-3">Game Developer </h3>
            <p className="text-start ps-3 pt-3">
              Back-end Development refers to the server-side development. It
              focuses on databases, scripting,
            </p>
          </div>
        </div>
      </motion.div>
      {/* <p className="credit">
        @2022 Salman Haider <br></br> All Rights Reserved
      </p> */}
    </div>
  );
};

export default Services;
