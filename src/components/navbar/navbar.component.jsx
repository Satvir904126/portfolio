import React, { useEffect } from "react";
import Navlogo from "../../images/navlogo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-sm-around justify-content-lg-centre p-0 fixed-top">
      <div>
        <a className={"navbar-brand"} href="#">
          <img className="navLogo" src={Navlogo} alt="navlogo" />
        </a>
      </div>
      <div>
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
        <NavDiv className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <Link className="nav-item nav-link" to="/">
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
            </Link>
          </ul>
        </NavDiv>
      </div>
    </nav>
  );
};
const NavDiv = styled.div`
  font-family: "Kalam", cursive;
  font-size: 25px;
  a {
    margin: 0 20px;
  }
  .nav-item {
    color: #55437a !important;
  }
  .nav-item:hover {
    font-size: 30px;
    color: black !important;
  }
`;
export default Navbar;
