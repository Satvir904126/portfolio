import React, { useEffect } from "react";
import ProfilePic from "../../images/profilePic.JPG";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="profile " id="profile">
      <h1 className="text-center about pt-5 ">About me</h1>
      <div className="d-flex justify-content-center">
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
          <div className="d-flex justify-content-center mt-3 flex-wrap  profileButton">
            <Button
              className="bg-info m-2 col-sm-9 col-lg-7"
              href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
              target="_blank"
            >
              Resume
            </Button>
            <Button
              className="bg-success m-2 col-sm-9 col-lg-5"
              href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
              target="_blank"
            >
              Linkedin
            </Button>
            <Button
              className="bg-info m-2 col-sm-9 col-lg-5"
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
`;
export default AboutPage;
