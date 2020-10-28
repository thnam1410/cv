import React, { useEffect } from "react";
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
  useEffect(() => {
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  });
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
const onFocus = () => {
  document.title = "Nam Truong"
};

// User has switched away from the tab (AKA tab is hidden)
const onBlur = () => {
  document.title = "Come Back To Me !!"
};

export default App;
