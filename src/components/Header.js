import React from "react";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = ({ MenuItems }) => {
  return (
    <>
      <Navbar expand="lg" className="d-flex justify-content-between">
        <div>
          <Navbar.Brand href="#home" className="ms-4 pt-2 fw-2">
            ShubhVivah
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {MenuItems}
        </div>
      </Navbar>
    </>
  );
};

export default Header;
