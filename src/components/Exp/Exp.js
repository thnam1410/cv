import React from "react";
import "./Exp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


function Exp() {
  return (
    <section className="exp">
      <div className="exp__header">
        <span className="title">Experience {"&"} Education </span>
      </div>
      <div className="max-width">
       <div className="timeline-box">
         <div className="icon-box">
            <FontAwesomeIcon
              className="gra-icon"
              icon={faGraduationCap}
              size="2x"
              color="white"
            />
         </div>
         <div className="content">
           <div className="time">2017 - Present</div>
           <div className="subject"><span className="highlight-subject">Computer Science Degrees</span><br></br> - Ton Duc Thang University</div>
           <div className="description">All about Information Technology</div>
         </div>
       </div>
      </div>
    </section>
  );
}

export default Exp;
