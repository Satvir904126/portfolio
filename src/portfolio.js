import React, { Component } from "react";
import "./portfolio.css";
import Project from "./pages/projects/projects.component";
import Contact from "./pages/contact-me/contact.component";
import About from "./pages/about-page/about.component";
import Skills from "./pages/skills/skills.componet";
import Footer from "./components/footer/footer.componet";

import Navbar from "./components/navbar/navbar.component";
import Carousel from "./components/carousel/carousel.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Carousel} />
          {/* <Carousel></Carousel> */}
          <Route path="/about" component={About}></Route>
          {/* <About></About> */}
          <Route path="/skills" component={Skills}></Route>

          {/* <Skills></Skills> */}
          <Route path="/project" component={Project}></Route>

          {/* <Project></Project> */}
        </Switch>
        <Contact></Contact>
        <Footer />
      </Router>
    );
  }
}

export default Portfolio;
