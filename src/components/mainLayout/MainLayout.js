import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import Header from "../Header";
import AboutUs from "../AboutUs";

const MainLayout = () => {
  return (
    <>
      <Header
        MenuItems={
          <Navbar.Collapse id="basic-navbar-nav">
            <Stack direction="horizontal" gap={3}>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/aboutUs">About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register">Registration</Link>
                </Nav.Link>
              </Nav>
            </Stack>
          </Navbar.Collapse>
        }
      />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default MainLayout;
