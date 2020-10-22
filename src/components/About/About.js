import React from "react";
import "./About.scss";
import avatar from "../../assets/images/avatar.jpg"

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <span className="title">About Me</span>
      </div>

      <div className="about__content">
        <div className="left">
          <img src={avatar} className="avatar" alt="Avatar"></img>
        </div>

        <div className="right">
          <h2 className="title">I'm Nam Truong and I'm a <span className="red-highlight">Web Developer</span></h2>
          <div className="about__content-description">
            <p>A beginner in web developer. </p>
             <p> Learning new languages and technologies is what I am passionate about.</p>
            
            <p>I'd like to learn and share my experiences to anyone to grew my skills up day by day.</p>
            <p>My favorite languages is JavaScript and i'd love to work and learn more with this awesome languages. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
