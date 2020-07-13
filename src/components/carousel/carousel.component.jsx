import React, { useEffect } from "react";
import carousel1 from "../../images/coading1.jpg";
import carousel2 from "../../images/coading2.jpg";
import carousel3 from "../../images/coading3.jpg";
import Typical from "react-typical";
import styled from "styled-components";

const Carousel = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
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
        <Heading className="carouselHeading text-center ">
          <h1>Hii I'am </h1>
          <h2>Satvir Singh</h2>
          <p>
            <Typical
              steps={[
                "Web Developer|",
                1000,
                "Learner|",
                1000,
                "Student",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </p>
        </Heading>
        <div></div>
      </div>
    </div>
  );
};
const Heading = styled.div`
  font-size: 15px;

  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 3.8em;
  }
  p {
    font-size: 1.2em;
  }
`;
export default Carousel;
