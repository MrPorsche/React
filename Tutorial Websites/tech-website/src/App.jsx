import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/services" Component={Services} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
    </>
  );
};

export default App;
