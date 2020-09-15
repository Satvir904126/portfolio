import React, { Component, useContext, useEffect, useState } from "react";
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

  let proj = [];
  const [isActive, setIsActive] = useState(null);

  const showProject = (e, active) => {
    setIsActive(active);
    console.log(isActive);
    // console.log(e.target.value);
    if (e.target.value === "all") {
      setShowProjDetail(projectDetail);
    } else {
      proj = projectDetail.filter((name) => name.type == e.target.value);
      // console.log(proj);
      setShowProjDetail(proj);
      // console.log(ShowprojectDetails);
    }
  };
  const activeButton = (c) => {
    console.log(c);
    if (c === isActive) {
      return "active";
    } else {
      return "";
    }
  };
  return (
    <>
      {console.log(isActive)}

      <SectionTop id="project"></SectionTop>

      <Container>
        <div>
          <Heading className="text-center section-heading">Projects</Heading>
          <Nav className="d-flex justify-content-center flex-wrap m-2 projNav">
            <Button
              href="#project"
              className={isActive == null ? "active" : activeButton("all")}
              value="all"
              onClick={(e) => showProject(e, "all")}
            >
              All
            </Button>
            <Button
              type="button"
              href="#project"
              className={activeButton("html")}
              data-filter="html"
              value="html"
              onClick={(e) => showProject(e, "html")}
              active
            >
              HTML + CSS
            </Button>
            <Button
              href="#project"
              value="javascript"
              className={activeButton("javascript")}
              onClick={(e) => showProject(e, "javascript")}
            >
              JavaScript
            </Button>
            <Button
              href="#project"
              className={activeButton("c#")}
              value="c#"
              onClick={(e) => showProject(e, "c#")}
            >
              C#
            </Button>
            <Button
              href="#project"
              className={activeButton("php")}
              value="php"
              onClick={(e) => showProject(e, "php")}
            >
              PHP
            </Button>
            <Button
              href="#project"
              className={activeButton("java")}
              value="java"
              onClick={(e) => showProject(e, "java")}
            >
              JAVA
            </Button>
            <Button
              href="#project"
              className={activeButton("android")}
              value="android"
              onClick={(e) => showProject(e, "android")}
            >
              Android
            </Button>
            <Button
              href="#project"
              value="react"
              className={activeButton("react")}
              onClick={(e) => showProject(e, "react")}
            >
              React js
            </Button>
            <Button
              href="#project"
              value="working"
              className={activeButton("working")}
              onClick={(e) => showProject(e, "working")}
            >
              Still Working
            </Button>
          </Nav>
          <>
            {/* {ShowprojectDetails.map((proj, index) => (
                <ProjContainer className="  mt-5 "> */}
            {/* <h3 className="text-center ">{proj.title} </h3>
                <div className="">
                  <div className="row justify-content-between">
                    <div className="col-md-8 ">
                      <img
                        className="justify-content-center w-100   "
                        src={proj.img}
                        alt="project1"
                      ></img>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-3  ">
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
                </div>

                <div>
                  <div>
                    <div className="d-flex justify-content-around pt-3">
                      {proj.seeSite ? (
                        <a
                          className="pt-0 pb-0"
                          href={proj.seeSite}
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
                </div> */}
            <div className="row">
              <div className="colomn ">
                {ShowprojectDetails.map((proj, index) => (
                  <ProjContainer className="  mt-5 ">
                    <div className="hover">
                      <article class="entry  col-sm-12  ">
                        <spam>
                          <aside className="row col-12">
                            <h3>{proj.title}</h3>
                            <hr></hr>

                            <p className="col-12">
                              <strong>Description:</strong>
                              <br></br>

                              <hr></hr>
                              {proj.description}
                            </p>
                            <div>
                              <strong>Tech Used:</strong>
                              <ul className=" ">
                                {proj.techUsed.map((tech, index) => (
                                  <div className="">
                                    <li>{tech}</li>
                                  </div>
                                ))}
                              </ul>
                            </div>

                            <hr></hr>
                          </aside>
                          <img src={proj.img} />
                        </spam>
                      </article>
                    </div>
                    <div className="  col-12 ">
                      {proj.seeSite ? (
                        <a
                          className="pt-0 pb-0 ml-5"
                          href={proj.seeSite}
                          target="_blank"
                        >
                          <Button>See Site</Button>
                        </a>
                      ) : (
                        ""
                      )}
                      <a
                        className="pt-0 pb-0 ml-5"
                        href={proj.gitLink}
                        target="_blank"
                      >
                        <Button> View Code</Button>
                      </a>
                    </div>
                    {/* <hr></hr> */}
                  </ProjContainer>
                ))}{" "}
              </div>
            </div>
          </>
        </div>
      </Container>
    </>
  );
}
const Nav = styled.nav`
  padding-top: 20px;
  Button {
    width: auto !important;
  }
  .active {
    color: #ffffff !important;
    background: #2a2a2a;
  }
`;
const Button = styled(Buttons)`
  padding: 10px 20px;
  width: 130px;
  border-radius: 5px;
  font-size: 17px;
`;

const CustomButton = styled(CustomButtonimport)`
  margin: 0 10px;
  padding: 10px;
  width: 120px;
  border-style: none !important;
  border-radius: 10px;
  outline: none !important;
  background: #f0fff0 !important;
`;
const ProjContainer = styled.div`
  color: #e4e4e4 !important;

  img {
    width: 100%;
    height: 420px;
  }

  .entry {
    position: relative;
    width: 330px;
    height: auto;
    min-height: 400px;

    background: #f0fff0 !important;
    margin: 15px;
    overflow: hidden;
    float: left;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  }

  img:hover {
    right: 0px;
    top: -5px;
    opacity: 1;
    padding: 0px;
    @include scale(0.9);
  }
  // spam:hover {
  //   img {
  //   }
  //   aside {
  //     left: -125px;
  //     transition: all 0.75s ease;
  //     opacity: 0;
  //   }
  }
  aside {
    // width:100px;
    padding: 40px 0px 0px 30px;
    z-index: 100;
    position: relative;
    left: 0px;
    transition: all 1s ease;
  }
  strong {
    font-family: "effra";
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #666666;
  }
  ul,
  li {
    color: #888;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }
  li {
    font-size: 13px;
    line-height: 19px;

    padding: 5px 4px;
  }
  p {
    font-family: "Arial";
    font-size: 13px;
    margin-top: 20px;
    color: #888;
  }
  h3 {
    margin: 0px;
    color: #666666;
  }
  spam {
    &:hover {
      cursor: pointer;
      aside {
        left: -125px;
        transition: all 0.75s ease;
        opacity: 0;
      }
    }
    display: block;
    width: inherit;
    height: inherit;

    img {
      position: absolute;
      top: 0px;
      // right: -260px;
      opacity: 0;
      transition: all 1s ease;
      padding: 40px 0px;
      z-index: 150;
    }
  }
`;
