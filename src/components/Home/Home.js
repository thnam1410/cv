import React from "react";
import "./Home.scss";
import ReactTypingEffect from "react-typing-effect";

function Home({downlineName}) {
  return (
    <section className="home">
      <div className="home__content flex">
        <div className="welcome">Hello, I am {downlineName ? <br></br> : null}<span className="my-name">Nam Truong</span></div>
        <ReactTypingEffect
          text={["Web Developer", "Front End Developer", "Back End Developer"]}
          className="job-describe"
          typingDelay={500}
          eraseSpeed={50}
          eraseDelay={1000}
        />
      </div>
      <div className="star"></div>
    </section>
  );
}

export default Home;
