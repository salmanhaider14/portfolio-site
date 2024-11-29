"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define skills data
const skillsData = [
  {
    category: "Core Technologies",
    skills: [
      { name: "HTML", icon: "/html.png", width: 50 },
      { name: "CSS", icon: "/css.png", width: 50 },
      { name: "JavaScript", icon: "/javascript.png", width: 50 },
      { name: "TypeScript", icon: "/typescript.png", width: 50 },
      { name: "C#", icon: "/c.png", width: 50 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "/react.png", width: 50 },
      { name: "Next.js", icon: "/next.png", width: 70 },
      { name: "Node.js", icon: "/node.png", width: 50 },
      { name: ".NET", icon: "/dotnet.png", width: 50 },
      { name: "Blazor", icon: "/blazor.png", width: 50 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "MongoDB", icon: "/mongo.png", width: 50 },
      { name: "MYSQL", icon: "/sql.png", width: 50 },
      { name: "MSSQL", icon: "/mssql.png", width: 50 },
      { name: "Postgress", icon: "/postgress.png", width: 50 },
      { name: "Firebase", icon: "/firebase.png", width: 50 },
      { name: "Sanity", icon: "/sanity.png", width: 60 },
      { name: "GitHub", icon: "/github.png", width: 60 },
      { name: "Tailwind CSS", icon: "/tailwind.png", width: 50 },
      { name: "Bootstrap", icon: "/bootstrap.png", width: 100 },
    ],
  },
  {
    category: "Game Development & 3D Design",
    skills: [
      { name: "Unity", icon: "/unity.png", width: 40 },
      { name: "Blender", icon: "/blender.png", width: 50 },
      { name: "Maya", icon: "/maya.png", width: 50 },
      { name: "Substance Painter", icon: "/substance.png", width: 50 },
      { name: "ZBrush", icon: "/zbrush.png", width: 50 },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-center pt-5">
        My Top <span style={{ color: "navy" }}>Skills</span>
      </h1>

      <motion.div
        className="skills-container"
        initial={{ y: -60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {skillsData.map((category, index) => (
          <div className="frontend-container" key={index}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={skill.width}
                    title={skill.name}
                    height={skill.width}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
