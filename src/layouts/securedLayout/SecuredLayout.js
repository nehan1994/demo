import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import AddGroom from "../../components/AddGroom";
import AddBride from "../../components/AddBride";
import Header from "../../components/Header";
import { Home } from "@mui/icons-material";

const SecuredLayout = () => {
  return (
    <>
      <Header
        MenuItems={
          <Navbar.Collapse id="basic-navbar-nav">
            <Stack direction="horizontal" gap={3}>
              <Nav className="me-auto">
                <Nav.Link className="text-light">
                  <Link className="text-light" to="/secured">
                    <h1>welcome</h1>
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link className="text-light" to="/secured/groom-details">
                    Add Groom
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link className="text-light" to="/secured/bride-details">
                    Add Bride
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link className="text-light" to="/">
                    Logout
                  </Link>
                </Nav.Link>
              </Nav>
            </Stack>
          </Navbar.Collapse>
        }
      />
      <Routes>
        <Route path="" element={<AddGroom />} />
        <Route path="bride-details" element={<AddBride />} />
      </Routes>
    </>
  );
};

export default SecuredLayout;
