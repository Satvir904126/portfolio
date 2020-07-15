import React, { Component, useContext, useEffect } from "react";
import "./project.css";
import Container from "react-bootstrap/container";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Navlogo from "../../images/navlogo.png";
import { DataContext } from "../../components/context";
import SectionTop from "../../style/sectionTop";
import CustomButtonimport from "../../style/buttonStyle";
import Heading from "../../style/headings";
import Buttons from "../../style/buttonStyle";

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
  const {
    empty1: [arrayEmpty, setArrayEmpty],
  } = useContext(DataContext);
  const arrayproj = {
    id: "",
    title: " ",
    type: " ",
    img: "",
    description: "",
    gitLink: " ",
    seeSite: " ",
    techUsed: [],
  };
  // useEffect(() => {
  //   setShowProjDetail([]);
  // }, []);

  const showProject = (e) => {
    // console.log(ShowprojectDetails);
    // setShowProjDetail(ShowprojectDetails, arrayEmpty);
    setShowProjDetail([...arrayEmpty]);

    // console.log(array);
    console.log(ShowprojectDetails);
    // setarry([]);
    // console.log(array);
    // console.log(ShowprojectDetails);

    // setarry([array, arrayEmpty]);
    // console.log(array);

    ///////////////////
    projectDetail.map(
      (proj, index) =>
        proj.type == e.target.value
          ? setarry([...array, projectDetail[index]])
          : //         // setarry([array, ShowprojectDetails[index]]) +
            //         console.log(array)
            console.log("hello not match")
      /////////////////
      //setarry([...array, ShowprojectDetails[index]])
    );
    // setShowProjDetail([]);
    setShowProjDetail([ShowprojectDetails.push(array)]);
    // setarry(array, ShowprojectDetails);
    // console.log(array);
    console.log(ShowprojectDetails);

    ///
    // console.log(ShowprojectDetails);
    // setShowProjDetail(ShowprojectDetails, [(ShowprojectDetails: " []")]);
    // console.log(ShowprojectDetails);
    //////////////
    // ShowprojectDetails.filter((name) =>
    //   name.type.includes(e.target.value)
    // ).map((filteredproj) => setShowProjDetail(filteredproj));
  };

  const showProjectAll = (e) => {
    console.log(projectDetail);
    console.log(ShowprojectDetails);

    setShowProjDetail(projectDetail);

    console.log(ShowprojectDetails);
    setShowProjDetail([...arrayEmpty]);

    // setShowProjDetail(projectDetail);
    console.log(ShowprojectDetails);

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
          <Heading className="text-center section-heading">Projects</Heading>
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
              <ProjContainer className="  mt-5">
                <h3 className="text-center pt-5">{proj.title} </h3>
                <div className="d-flex justify-content-between flex-sm-column flex-md-row w-100 pt-5">
                  <div className="col-sm-8  ">
                    <img
                      className="  d-flex justify-content-center w-100   "
                      src={proj.img}
                      alt="project1"
                    ></img>
                  </div>
                  <div className="">
                    <div className="mt-4">
                      <strong>Description:</strong>
                      <br></br>
                      {proj.description}

                      <hr></hr>
                    </div>
                    <strong>Tech Used</strong>
                    <ul className="list-unstyled descriptionList">
                      {proj.techUsed.map((tech, index) => (
                        <li>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="d-flex justify-content-around p-5">
                      {proj.seeSite ? (
                        <a
                          className="pt-0 pb-0"
                          href="https://satvir904126.github.io/myProjects/onlineShoppingJavaScript/"
                          target="_blank"
                        >
                          <Button>See Site</Button>
                        </a>
                      ) : (
                        ""
                      )}
                      <a href={proj.gitLink} target="_blank">
                        <Button> View Code</Button>
                      </a>
                    </div>
                    <hr />
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
  display: none !important;
`;
const Button = styled(Buttons)`
  padding: 10px 20px;
  width: 130px;
  border-radius: 5px;
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
  color: #e4e4e4 !important;

  img {
    width: 85%;
    height: 420px;
  }
`;
