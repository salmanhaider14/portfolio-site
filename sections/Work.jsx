import React, { useState } from "react";

import { urlFor } from "../lib/client";
import { FaEye } from "react-icons/fa";

const Work = ({ works }) => {
  const [projects, setProjects] = useState(works);
  const filterWorks = (tag) => {
    const newList = works.filter((project) => project.tags[0] === tag);
    setProjects(newList);
  };
  return (
    <div id="work">
      <h1 className="text-center pt-5">
        My Creative <span style={{ color: "navy" }}>Porfolio</span>
      </h1>
      <p className="text-center  sub-head">
        ______________Because work speaks________________
      </p>
      <ul>
        <li>
          <button onClick={() => setProjects(works)}>All </button>
        </li>
        <li>
          <button onClick={() => filterWorks("frontend")}>Frontend </button>
        </li>
        <li>
          <button onClick={() => filterWorks("fullstack")}>Full Stack </button>
        </li>
        <li>
          <button onClick={() => filterWorks("android")}>Mobile App</button>
        </li>
      </ul>

      <div className="work-container">
        <div className="work-cards">
          {projects?.map((project) => (
            <div className="work-parent">
              <div className="work-card">
                <img src={urlFor(project.imgUrl)} alt="" />

                <h3 className="text-center pt-3">{project.title}</h3>
                <p className="text-start ps-3 pt-3"> {project.description}</p>
              </div>
              <div className="work-back">
                {" "}
                <div className="work-hoverdata">
                  <FaEye className="eye-icon" fontSize={40} color="white" />{" "}
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
