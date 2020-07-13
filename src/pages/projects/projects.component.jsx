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
          {ShowprojectDetails.map((proj) => (
            <>
              {/* <div className="d-flex justify-content-md-start">
                <Card className="col-sm-8 col-lg-6 m-4  ">
                  <h3 className="text-center">{proj.type} </h3>
                  <img
                    className="projectImg d-flex justify-content-center"
                    src={proj.img}
                    alt="project"
                  ></img>
                  <Accordion>
                    <div className="d-flex justify-content-center">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="btn  "
                      >
                        Project Detail
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br></br>
                        {proj.description}
                        <hr></hr>
                        <strong>Tech Used</strong>
                        <ul className="list-unstyled descriptionList">
                          <li>HTML5</li>
                          <li>JavaScript</li>
                          <li>CSS3</li>
                        </ul>
                        <div className="d-flex justify-content-around">
                          <Button
                            href="https://satvir904126.github.io/myProjects/onlineShoppingJavaScript/"
                            target="_blank"
                          >
                            See Site
                          </Button>
                          <Button href={proj.gitLink} target="_blank">
                            View Code
                          </Button>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card> */}
              {/* </div> */}
              //////////////////////
              <div className=" jumbotron">
                <h3 className="text-center">{proj.title} </h3>
                <div className="d-flex justify-content-between">
                  <div>
                    <img
                      className="  d-flex justify-content-center col-6 "
                      src={proj.img}
                      alt="project1"
                    ></img>
                  </div>
                  <div className="col-3">
                    <strong>Description:</strong>
                    <br></br>
                    {proj.description}

                    <hr></hr>
                    <strong>Tech Used</strong>
                    <ul className="list-unstyled descriptionList">
                      <li>HTML5</li>
                      <li>JavaScript</li>
                      <li>CSS3</li>
                    </ul>
                    <div className="d-flex justify-content-around">
                      <Button
                        href="https://satvir904126.github.io/myProjects/onlineShoppingJavaScript/"
                        target="_blank"
                      >
                        See Site
                      </Button>
                      <Button href={proj.gitLink} target="_blank">
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              /////////
            </>
          ))}

          {/* <div className=" jumbotron">
            <h3 className="text-center">Online Shopping </h3>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  className="  d-flex justify-content-center "
                  src={Navlogo}
                  alt="project1"
                ></img>
              </div>
              <div className="col-3">
                <strong>Description:</strong>
                <br></br>It's online site where user can see the products,add to
                cart but to buy he/she need to login first.
                <hr></hr>
                <strong>Tech Used</strong>
                <ul className="list-unstyled descriptionList">
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>CSS3</li>
                </ul>
                <div className="d-flex justify-content-around">
                  <Button
                    href="https://satvir904126.github.io/myProjects/onlineShoppingJavaScript/"
                    target="_blank"
                  >
                    See Site
                  </Button>
                  <Button
                    href="https://github.com/Satvir904126/Online-Shopping-JavaScript"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* second project */}
          {/* <div className="d-flex justify-content-md-end">
            <Card className="col-sm-8 col-lg-6 m-4  ">
              <h3 className="text-center">Chocolat Factory </h3>
              <img
                className="projectImg d-flex justify-content-center"
                src={Navlogo}
                alt="project1"
              ></img>
              <Accordion>
                <div className="d-flex justify-content-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="btn "
                  >
                    Project Detail
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>Description:</strong>
                    <br></br>In this project,user can see the choclate buy and
                    like them.Also, admin can change the price or add the items.
                    <hr></hr>
                    <strong>Tech Used</strong>
                    <ul className="list-unstyled descriptionList">
                      <li>HTML</li>
                      <li>PHP</li>
                      <li>CSS3</li>
                      <li>My-SQL</li>
                    </ul>
                    <div className="d-flex justify-content-around">
                      <Button
                        href="https://github.com/Satvir904126/chocolate-factory-php"
                        target="_blank"
                      >
                        View Code
                      </Button>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </Card>
          </div> */}
          {/* Third project */}
          {/* <div className="d-flex justify-content-md-start">
            <Card className="col-sm-8 col-lg-6 m-4  ">
              <h3 className="text-center">Activity Tracker </h3>
              <img
                className="projectImg d-flex justify-content-center"
                src={Navlogo}
                alt="project1"
              ></img>
              <Accordion>
                <div className="d-flex justify-content-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="btn "
                  >
                    Project Detail
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>Description</strong>In this project,user can track
                    the daily routine work he can add the activity with various
                    categories. he/she can login or Sign up to visit the site.
                    <hr></hr>
                    <strong>Tech Used</strong>
                    <ul className="list-unstyled descriptionList">
                      <li>HTML</li>
                      <li>PHP</li>
                      <li>CSS3</li>
                      <li>My-SQL</li>
                      <li>JavaScript</li>
                      <li>Docker</li>
                    </ul>
                    <div className="d-flex justify-content-around">
                      <Button
                        href="https://bitbucket.org/isiteachers/deploy3-magenta/src/master/"
                        target="_blank"
                      >
                        View Code
                      </Button>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </Card>
          </div>*/}
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
