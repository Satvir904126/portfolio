import React, { Component } from "react";
import "./portfolio.css";
import Project from "./pages/projects/projects.component";
import Contact from "./pages/contact-me/contact.component";
import About from "./pages/about-page/about.component";
import Skills from "./pages/skills/skills.componet";
import Footer from "./components/footer/footer.componet";

import Navbar from "./components/navbar/navbar.component";
import Carousel from "./components/carousel/carousel.component";
import Tab from "./pages/projects/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar></Navbar>

        <Carousel></Carousel>
        <About></About>

        <Skills></Skills>
        {/* <Route path="/project" component={Project}></Route> */}
        {/* <Tab /> */}
        <Project></Project>

        <Contact></Contact>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
