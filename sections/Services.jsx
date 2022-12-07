import React from "react";

const Services = () => {
  return (
    <div id="services">
      <h1 className="text-center pt-5">
        <span style={{ color: "navy" }}> The Services</span> I Offer
      </h1>
      <p className="text-center pt-5 sub-head ">
        ___________I never compromise on quality____________
      </p>
      <div className="services-container">
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
      </div>
      <p className="credit">
        @2022 Salman Haider <br></br> All Rights Reserved
      </p>
    </div>
  );
};

export default Services;
