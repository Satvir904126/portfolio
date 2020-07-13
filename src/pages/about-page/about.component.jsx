import React, { useEffect } from "react";
import ProfilePic from "../../images/profilePic.JPG";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import Button from "../../style/buttonStyle";
import SectionTop from "../../style/sectionTop";
const AboutPage = () => {
  // useEffect(() => {
  //   window.scrollTo(20, 500);
  // });
  return (
    <div className="profile ">
      <SectionTop id="profile"></SectionTop>

      <h1 className="text-center section-heading about ">About me</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="myImage d-flex align-items-center m-5 col-lg-3 col-sm-6">
          <img src={ProfilePic} alt="my pic"></img>
        </div>
        <Description className="card description p-5  m-4 col-lg-5 col-sm-10">
          <strong>Hii there! I am Satvir Singh</strong>
          <p className="text-justify">
            I am Web Developer with HTML5, CSS3, React Js, Vanilla Javascript,
            Bootstrap, C# and PHP. In 2020, I successfully completed my
            Programming & Web Technology diploma.I am a quick learner, who
            always eager to learn new things, I like to work in team projects
            and respect deadlines. I love learning new technologies, how they
            better than others and how can I use them to make effective and
            scalable projects.
          </p>
          {/* <div className="d-flex justify-content-center mt-3 flex-wrap  profileButton"> */}
          <div className="row">
            <div className="col d-flex justify-content-center ">
              <Button
                className=" m-2 p-2 col-sm-7 col-lg-5 "
                href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
                target="_blank"
              >
                Resume
              </Button>
            </div>
          </div>
          <div>
            <Button
              className=" m-2 p-1 col-sm-7 col-lg-5"
              href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
              target="_blank"
            >
              Linkedin
            </Button>
            <Button
              className=" m-2 p-1 col-sm-7 col-lg-5"
              href="https://github.com/Satvir904126"
              target="_blank"
            >
              GitHub
            </Button>
          </div>
        </Description>
      </div>
    </div>
  );
};
const Description = styled.div`
  font-family: "Arapey", serif;
  .row {
    margin-right: -30px !important;
  }
`;
export default AboutPage;
