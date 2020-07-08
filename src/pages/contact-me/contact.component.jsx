import React, { Component } from "react";
import "./contact.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <div className="jumbotron justify-content-center  ">
          <h2 className="text-center mt-0 mb-3 ">Contact Me</h2>

          <div className="row justify-content-center flex-wrap ">
            <Button className="bg-danger m-2" href="" target="_blank">
              Email me
            </Button>
            <Button
              className="bg-success m-2"
              href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
              target="_blank"
            >
              Linkedin
            </Button>
            <Button
              className="bg-info m-2"
              href="https://github.com/Satvir904126"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              className="bg-secondary m-2"
              href="https://bitbucket.org/dashboard/overview"
              target="_blank"
            >
              Bitbucket
            </Button>
            <Button
              className="bg-danger m-2"
              href="https://www.instagram.com/?hl=en"
              target="_blank"
            >
              Instagram
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Contact;
