"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../lib/client";
import { FaEye, FaCode } from "react-icons/fa";
import Link from "next/link";

const Work = ({ works }) => {
  const [projects, setProjects] = useState(works);

  // Define broader categories
  const categories = [
    { label: "All", filter: () => works },
    {
      label: "Web",
      filter: () => works.filter((project) => project.tags.includes("web")),
    },
    {
      label: "Mobile",
      filter: () => works.filter((project) => project.tags.includes("mobile")),
    },
    {
      label: "Desktop",
      filter: () => works.filter((project) => project.tags.includes("desktop")),
    },
  ];

  // Handle filtering
  const handleFilter = (filterFn) => {
    setProjects(filterFn());
  };

  return (
    <div id="work">
      <h1 className="text-center pt-5">
        My Creative <span style={{ color: "navy" }}>Portfolio</span>
      </h1>
      <p
        className="text-center sub-head"
        style={{
          fontFamily: "Cinzel Decorative, serif",
        }}
      >
        ______________Because work speaks________________
      </p>

      {/* Category Buttons */}
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleFilter(category.filter)}>
              {category.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Work Cards */}
      <div className="work-container">
        <motion.div
          className="work-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects?.map((project, index) => (
            <div className="work-card" key={index}>
              <img src={urlFor(project.imgUrl)} alt="Project Image" />

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
                  <Link
                    href={project.projectLink ?? ""}
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
                  </Link>

                  <Link
                    href={project.codeLink ?? ""}
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
                  </Link>
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
