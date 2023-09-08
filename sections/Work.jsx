import React, { useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../lib/client";
import { FaEye, FaCode } from "react-icons/fa";

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
        <motion.div
          className="work-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects?.map((project) => (
            <div className="work-card">
              <img src={urlFor(project.imgUrl)} alt="" />

              <h3 className="text-center pt-3 fs-4">{project.title}</h3>
              {/* <p className="text-start ps-3 pt-3"> {project.description}</p> */}
              <div className="hover-data ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                  }}
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      boxShadow: "2px 3px 8px rgba(0, 0, 0, 0.3)",
                      marginTop: "1rem",
                    }}
                  >
                    <FaEye
                      size={35}
                      color="black"
                      // Adjust the icon's position if needed
                    />
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      boxShadow: "2px 3px 8px rgba(0, 0, 0, 0.3)",
                      marginTop: "1rem",
                    }}
                  >
                    <FaCode size={35} color="blue" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
