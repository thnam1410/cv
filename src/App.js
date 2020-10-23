import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import useScrollPosition from "@react-hook/window-scroll";
import useWindowDimensions from "./components/useWindowDimensions/useWindowDimensions";
import Skills from "./components/Skills/Skills";

function App() {
  const scrollY = useScrollPosition(60);
  const { width } = useWindowDimensions();

  return (
    <>
      <Header
        positionY={scrollY > 30 ? true : false}
        isInvisibleMenuIcon={width > 800 ? true : false}
      />
      <Home downlineName={width < 653 ? true : false} />
      <About />
      <Skills />
    </>
  );
}

export default App;
