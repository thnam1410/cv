import React from "react";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills">
      <div className="max-width">
        <div className="skill-box1">
          <h2> Programming Languages</h2>
          <ul>
            <li>HTML,CSS-SCSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>

          <h2> FrameWorks</h2>
          <ul>
            <li>ReactJS</li>
            <li>NodeJS/Express</li>
          </ul>
        </div>

        <div className="skill-box2">
          <h2> Database</h2>
          <ul>
            <li>MongoDB</li>
          </ul>

          <h2> Version Control</h2>
          <ul>
            <li>Git</li>
          </ul>

          <h2> IDE</h2>
          <ul>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="skill-box3">
          <h2> Foreign Language</h2>
          <ul>
            <li>...</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Skills;
