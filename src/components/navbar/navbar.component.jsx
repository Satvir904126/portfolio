import React, { useEffect } from "react";
import Navlogo from "../../images/navlogo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    /* d-flex justify-content-sm-around justify-content-lg-centre p-0 */

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className={"navbar-brand"} href="#">
        <img className="navLogo" src={Navlogo} alt="navlogo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div classNmae="collapse navbar-collapse" id="navbarNavDropdown"> */}
      <NavDiv className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          {/* <Link className="nav-item nav-link" to="/home">
              Profile
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
            <Link className="nav-item nav-link" to="/skills">
              Skills
            </Link>
            <Link className="nav-item nav-link" to="/project">
              Project
            </Link> */}
          <a className="nav-item nav-link " href="#">
            Home
          </a>
          <a className="nav-item nav-link " href="#profile">
            About Me
          </a>
          <a className="nav-item nav-link " href="#skill">
            Skills
          </a>
          <a className="nav-item nav-link " href="#project">
            Project
          </a>

          <a className="nav-item nav-link " href="#contact-me">
            Contact
          </a>
        </ul>
      </NavDiv>
    </nav>
  );
};
const NavDiv = styled.div`
  font-family: "axiforma", cursive;
  font-size: 25px;
  transition: 1.4s ease 0s;
  font-weight: 600;
  a {
    font-size: 18px;
    font-weight: bold;
    margin: 0 20px;
  }
  .nav-item {
    color: #2a2a2a !important;
    transition: 0.5s ease-in-out 0s;
  }
  .nav-item:hover {
    font-size: 23px;
    color: black !important;
    transition: 0.5s ease-in-out 0s;
  }
`;
export default Navbar;
