import React, { useEffect } from "react";
import carousel1 from "../../images/coading1.jpg";
import carousel2 from "../../images/coading2.jpg";
import carousel3 from "../../images/coading3.jpg";

import Project from "../../pages/projects/projects.component";
import Contact from "../../pages/contact-me/contact.component";
import About from "../../pages/about-page/about.component";
import Skills from "../../pages/skills/skills.componet";

const Carousel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div id="info" className="carousel slide fontSize" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#info" data-slide-to="0" className="active"></li>
          <li data-target="#info" data-slide-to="1"></li>
          <li data-target="#info" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner contact">
          <div className="carousel-item jumbotron active ">
            <img
              //   className="row justify-content-center "
              src={carousel1}
              alt="coading1"
              id="name"
            />
          </div>
          <div className="carousel-item jumbotron  ">
            {/* <div className="row justify-content-center "> */}
            <img
              className="row justify-content-center "
              src={carousel2}
              alt="coading1"
              id="name"
            />
            {/* </div> */}
          </div>
          <div className="carousel-item jumbotron">
            <img
              //   className=" row justify-content-center"
              src={carousel3}
              alt="coading3"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#info"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#info"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>

        {/* text on carousel */}
        <div className="carouselHeading text-center ">
          <h2>Hii I'am Satvir Singh</h2>
          <span className="mt-3">Web Developer</span>
        </div>
        <div></div>
      </div>
      <About></About>
      <Skills></Skills>
      <Project></Project>
    </div>
  );
};

export default Carousel;
