import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-center pt-5" style={{ fontSize: "60px", textShadow :"2px 3px 8px rgba(0,0,0,0.3)" }}>
        My Top <span style={{color : "navy"}}>Skills</span>
      </h1>
     
   
      <div className="skills-container">
        <div className="frontend-container">
          <h3>Frontend</h3>
          <ul>
            <li>
              <img src="/html.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/css.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/javascript.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/react.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/next.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/bootstrap.png" alt="html" width={80} />
            </li>
          </ul>
        </div>
       
        <div className="frontend-container">
          <h3>Backend</h3>
          <ul>
            <li>
              <img src="/javascript.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/node.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/mongo.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/sql.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/firebase.png" alt="html" width={50}  />
            </li>{" "}
            <li>
              <img src="/sanity.png" alt="html" width={60} />
            </li>
            <li>
              <img src="/github.png" alt="html" width={60} />
            </li>
          </ul>
        </div>
        
        <div className="frontend-container">
          <h3>Android</h3>
          <ul>
            <li>
              <img src="/native.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/javascript.png" alt="html" width={50} />
            </li>
          </ul>
        </div>
        
        <div className="frontend-container">
          <h3>Game & 3D </h3>
          <ul>
            <li>
              <img src="/unity.png" alt="html" width={40}  />
            </li>
            <li>
              <img src="/c.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/blender.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/maya.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/substance.png" alt="html" width={50} />
            </li>
            <li>
              <img src="/zbrush.png" alt="html" width={50} />
            </li>
          </ul>
        </div>
      </div>
      <p className="credit">
        @2022 Salman Haider <br></br> All Rights Reserved
      </p>
    </div>
  );
};

export default Skills;
