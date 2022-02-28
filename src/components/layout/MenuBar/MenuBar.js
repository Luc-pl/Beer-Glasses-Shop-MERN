import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import styles from './MenuBar.module.scss';

const MenuBar = () => (
  <Navbar expand="lg" className={styles.navBar}>
    <Container>
      <Navbar.Brand href="#home" className={styles.navLogo}>
        <img
          alt=""
          src="/images/beer-glass-logo.png"
          width="70"
          height="70"
          className="d-inline-block align-top"
        />
        <p>Beer Glasses</p>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">O nas</Nav.Link>
        <NavDropdown title="Produkty" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Szklanki</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Przedmioty</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Narzędzia</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
);

export default MenuBar;
