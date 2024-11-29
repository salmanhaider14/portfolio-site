"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services">
      <motion.h1
        className="text-center pt-5 services-h1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          fontFamily: "Cinzel Decorative, serif",
        }}
      >
        <span style={{ color: "navy" }}> The Services</span> I Offer
      </motion.h1>
      <p
        className="text-center pt-5 sub-head "
        style={{
          fontFamily: "Cinzel Decorative, serif",
        }}
      >
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
            <h3 className="text-center pt-3">Web/Mobile Apps</h3>
          </div>
          <div className="service-card">
            <img src="/backend.png" alt="" />
            <h3 className="text-center pt-3">Desktop Apps</h3>
            <p className="text-start ps-3 pt-3">
              Back-end Development refers to the server-side development. It
              focuses on databases, scripting, website architecture. It contains
            </p>
          </div>{" "}
          <div className="service-card">
            <img src="/unitydev.png" width={25} alt="" />
            <h3 className="text-center pt-3">Game Development </h3>
            <p className="text-start ps-3 pt-3">
              Back-end Development refers to the server-side development. It
              focuses on databases, scripting,
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
