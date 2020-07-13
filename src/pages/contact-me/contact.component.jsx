import React, { Component } from "react";
import "./contact.css";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Button from "../../style/buttonStyle";
import styled from "styled-components";
// import "font-awesome/css/font-awesome.min.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import footerImg from "../../images/footer.jpg";
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Div>
        <Container>
          <ContactDiv>
            <div className=" pt-0 justify-content-center  " id="contact-me">
              <h2 className="section-heading  contactHeader border-2 mt-0 mb-3 pb-3">
                Get in Touch
              </h2>

              <div className="row justify-content-around flex-wrap ">
                <ul>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a
                      href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
                      target="_blank"
                    >
                      Email me
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-linkedin"></i>
                    <a
                      href="https://www.linkedin.com/in/satvir-singh-b476001ab/"
                      target="_blank"
                    >
                      {" "}
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-bitbucket"></i>{" "}
                    <a href="https://github.com/Satvir904126" target="_blank">
                      {" "}
                      GitHub
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>(514)575-7646
                  </li>
                  <li>
                    <i className="fa fa-home"></i>Montreal,Qc
                  </li>
                </ul>
              </div>
            </div>
          </ContactDiv>

          <Footer>
            Satvir Singh 2020&copy;- Allrights reserved | Design:React Js
          </Footer>
        </Container>
      </Div>
    );
  }
}
const Div = styled.div`
  background-image: url(${footerImg});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  z-index: 1;
  boder-radius: 35px;
  position: relative;
  ::after {
    content: "";
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    opacity: 0.6;
  }
`;
const ContactDiv = styled.div`
  .contactHeader {
    border: none;
    border-bottom: 2px solid white;
  }
  ul {
    font-size: 20px;
  }
  li {
    list-style: none;
    margin: 25px;
  }
  a {
    text-decoration: none;
    color: white;
    transition: 1.4s ease 0s;
  }
  a:hover {
    color: #f6b93b !important;
    transition: all 1.4s ease 0s;
    font-size: 25px;
  }
  i {
    margin-right: 20px;
  }
`;
const Footer = styled.div`
  text-align: center;
  height: 100px;
  font-size:20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
export default Contact;
