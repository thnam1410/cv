import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import useScrollPosition from "@react-hook/window-scroll";
import useWindowDimensions from "./components/useWindowDimensions/useWindowDimensions";
import Skills from "./components/Skills/Skills";
import Exp from "./components/Exp/Exp";
import Contact from "./components/Contact/Contact";


function App() {
  const scrollY = useScrollPosition(60);
  const { width } = useWindowDimensions();

  console.log(scrollY)
  return (
    <>
      <Header
        positionY={scrollY > 30 ? true : false}
        isInvisibleMenuIcon={width > 800 ? true : false}
      />
      <Home id="home" downlineName={width < 653 ? true : false} />
      <About id="about" />
      <Skills id="skills" />
      <Exp />
      <Contact id="contact"/>
    </>
  );
}

export default App;
