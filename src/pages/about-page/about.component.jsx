import React, { useEffect } from "react";
import ProfilePic from "../../images/profilePic.JPG";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import Buttons from "../../style/buttonStyle";
import SectionTop from "../../style/sectionTop";
import Heading from "../../style/headings";
import resume from "../../resume/Satvir_Singh_Resum.pdf";
const AboutPage = () => {
  return (
    <div className="profile ">
      <SectionTop id="profile"></SectionTop>

      <Heading className="text-center section-heading about ">About me</Heading>
      <div className="d-flex flex-wrap justify-content-center">
        <ProfileImg className="myImage d-flex align-items-center m-5 col-lg-3 col-sm-6">
          <img src={ProfilePic} alt="my pic"></img>
        </ProfileImg>
        <Description className="description p-5  m-4 col-lg-5 col-sm-10">
          <strong>Hii there! I am Satvir Singh</strong>
          <p className="text-justify">
            I am Web Developer with
            <spam>
              HTML5, CSS3, React Js, Vanilla Javascript, Bootstrap, C# and PHP
            </spam>
            . In 2020, I successfully completed my Programming & Web Technology
            diploma.I am a quick learner, who always eager to learn new things,
            I like to work in team projects and respect deadlines. I love
            learning new technologies, how they better than others and how can I
            use them to make effective and scalable projects.
          </p>
          {/* <div className="d-flex justify-content-center mt-3 flex-wrap  profileButton"> */}
          <div className="text-center">
            <div className="m-auto">
              <a href={resume} download>
                <Button className="m-2  p-1 col-sm-7 col-lg-5">Resume</Button>
              </a>
            </div>
            {/* </div> */}
            <div>
              <a
                href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
                target="_blank"
              >
                <Button className=" m-2 p-1 col-sm-7 col-lg-5">Linkedin</Button>
              </a>
              <a href="https://github.com/Satvir904126" target="_blank">
                <Button
                  className=" m-2 p-1 col-sm-7 col-lg-5"
                  href="https://github.com/Satvir904126"
                >
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </Description>
      </div>
    </div>
  );
};
const ProfileImg = styled.div`
  .myImage {
    padding: 0px;
    border: none;
    z-index: 2;
  }
  img {
    object-fit: cover;

    height: 400px;
    border-radius: 7px;
  }
`;
const Description = styled.div`
  font-family: "Arapey", serif;
  .row {
    margin-right: -30px !important;
  }
  p {
    margin-top: 10px;
    color: #e4e4e4 !important;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
  strong {
    color: #e4e4e4 !important;

    font-size: 25px;
  }
  spam {
    font-weight: 600;
    margin-left: 10px;
    font-size: 22px;
  }
`;
const Button = styled(Buttons)`
  padding: 10px 20px !important ;
  font-size: 17px;
  // width: 130px;
  border-radius: 5px;
`;
export default AboutPage;
