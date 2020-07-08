import React, { Component, useContext, useEffect } from "react";
import "./project.css";
import Container from "react-bootstrap/container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Navlogo from "../../images/navlogo.png";
import { DataContext } from "../../components/context";

export default function Projects() {
  const {
    project: [projectDetail, setProjDetail],
  } = useContext(DataContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <div id="project">
        <h1 className="text-center">Projects</h1>

        {projectDetail.map((proj) => (
          <>
            <div className="d-flex justify-content-md-start">
              <Card className="col-sm-8 col-lg-6 m-4  ">
                <h3 className="text-center">{proj.title} </h3>
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
              </Card>
            </div>
          </>
        ))}

        <div className="d-flex justify-content-md-start">
          <Card className="col-sm-8 col-lg-6 m-4  ">
            <h3 className="text-center">Online Shopping </h3>
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
                  className="btn  "
                >
                  Project Detail
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <strong>Description:</strong>
                  <br></br>It's online site where user can see the products,add
                  to cart but to buy he/she need to login first.
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
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card>
        </div>

        {/* second project */}
        <div className="d-flex justify-content-md-end">
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
        </div>
        {/* Third project */}
        <div className="d-flex justify-content-md-start">
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
                  <strong>Description</strong>In this project,user can track the
                  daily routine work he can add the activity with various
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
        </div>
      </div>
    </Container>
  );
}
