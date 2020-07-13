import React, { Component, useContext, useEffect } from "react";
import "./project.css";
import Container from "react-bootstrap/container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Navlogo from "../../images/navlogo.png";
import { DataContext } from "../../components/context";
import SectionTop from "../../style/sectionTop";
import CustomButtonimport from "../../style/buttonStyle";
import styled from "styled-components";
export default function Projects() {
  const {
    project: [projectDetail, setProjDetail],
  } = useContext(DataContext);
  const {
    showProj: [ShowprojectDetails, setShowProjDetail],
  } = useContext(DataContext);
  const {
    empty: [array, setarry],
  } = useContext(DataContext);
  const arrayproj = {
    id: 0,
    type: "",
    title: "",
    img: "",
    description: "",
  };

  const showProject = (e) => {
    e.preventDefault();
    // console.log(ShowprojectDetails);

    projectDetail.map(
      (proj, index) =>
        proj.type == e.target.value
          ? setarry([...array, ShowprojectDetails[index]]) +
            console.log(setarry([...array, ShowprojectDetails[index]]))
          : console.log("hello not match")

      //setarry([...array, ShowprojectDetails[index]])
    );
    setShowProjDetail([]);
    setShowProjDetail([...ShowprojectDetails, array]);
    // setarry(array, ShowprojectDetails);
    console.log(array);
    console.log(ShowprojectDetails);

    // ShowprojectDetails.filter((name) =>
    //   name.type.includes(e.target.value)
    // ).map((filteredproj) => setShowProjDetail(filteredproj));
  };

  const showProjectAll = (e) => {
    //   projectDetail.map((proj, index) =>
    //     // setShowProjDetail(...projectDetail, projectDetail)
    //     // console.log(setShowProjDetail(...projectDetail))
    //   // );
  };
  return (
    <>
      <SectionTop id="project"></SectionTop>

      <Container>
        <div>
          <h1 className="text-center section-heading">Projects</h1>
          <Nav className="d-flex justify-content-center flex-wrap m-2  sticky-top">
            <CustomButton
              href="#project"
              value="all"
              onClick={(e) => showProjectAll(e)}
            >
              All
            </CustomButton>
            <CustomButton
              href="#project"
              value="html"
              onClick={(e) => showProject(e)}
            >
              HTML + CSS
            </CustomButton>
            <CustomButton
              href="#project"
              value="javascript"
              onClick={(e) => showProject(e)}
            >
              JavaScript
            </CustomButton>
            <CustomButton
              href="#project"
              value="c#"
              onClick={(e) => showProject(e)}
            >
              C#
            </CustomButton>
            <CustomButton
              href="#project"
              value="php"
              onClick={(e) => showProject(e)}
            >
              PHP
            </CustomButton>
            <CustomButton
              href="#project"
              value="java"
              onClick={(e) => showProject(e)}
            >
              JAVA
            </CustomButton>
            <CustomButton
              href="#project"
              value="android"
              onClick={(e) => showProject(e)}
            >
              Android
            </CustomButton>
          </Nav>
          {ShowprojectDetails.map((proj, index) => (
            <>
              <ProjContainer className=" jumbotron">
                <h3 className="text-center">{proj.title} </h3>
                <div className="d-flex justify-content-between">
                  <div className="col-8 ">
                    <img
                      className="  d-flex justify-content-center  "
                      src={proj.img}
                      alt="project1"
                    ></img>
                  </div>
                  <div className="col-4">
                    <strong>Tech Used</strong>
                    <ul className="list-unstyled descriptionList">
                      {proj.techUsed.map((tech, index) => (
                        <li>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <strong>Description:</strong>
                  <br></br>
                  {proj.description}

                  <hr></hr>
                </div>
                <div>
                  <div>
                    <div className="d-flex justify-content-around">
                      {proj.seeSite ? (
                        <Button
                          href="https://satvir904126.github.io/myProjects/onlineShoppingJavaScript/"
                          target="_blank"
                        >
                          See Site
                        </Button>
                      ) : (
                        ""
                      )}
                      <Button href={proj.gitLink} target="_blank">
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </ProjContainer>
            </>
          ))}
        </div>
      </Container>
    </>
  );
}
const Nav = styled.nav`
  top: 80px;
`;
const CustomButton = styled(CustomButtonimport)`
  margin: 0 10px;
  padding: 10px;
  width: 120px;
  border-style: none !important;
  border-radius: 10px;
  outline: none !important;
`;
const ProjContainer = styled.div`
  img {
    width: 85%;
  }
`;
