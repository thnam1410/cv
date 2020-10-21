import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import useScrollPosition from "@react-hook/window-scroll";

function App() {
  const scrollY = useScrollPosition(60);
  return (
    <>
      <Header positionY={scrollY > 30 ? true : false} />
      <Home />
      <About />
    </>
  );
}

export default App;
