import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="header-color" bg="" data-bs-theme="">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="font-title " href="#home">
            Personal Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
