import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
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
