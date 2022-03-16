/* eslint-disable linebreak-style */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './Box.module.scss';

const Box = () => (
  <Container>
    <Row className={styles.box}>
      <Col xs={4}>
        <Card>
          <Card.Body className={styles.boxCard}>
            <img alt="" src="/images/ipa-icon.png"/>
            <Card.Title className={styles.boxTitle}>IPA glasses</Card.Title>            
            <Card.Text>
              Serve ice cold beer in stylish beer glasses.
            </Card.Text>
            <Button variant="outline-primary">Shop now</Button>            
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card>
          <Card.Body className={styles.boxCard}>
            <img alt="" src="/images/stout-icon.png"/>
            <Card.Title className={styles.boxTitle}>Stout glasses</Card.Title>
            <Card.Text>
              Serve ice cold beer in stylish beer glasses.
            </Card.Text>
            <Button variant="outline-primary">Shop now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card>
          <Card.Body className={styles.boxCard}>
            <img alt="" src="/images/wheat-icon.png"/>
            <Card.Title>Wheat glasses</Card.Title>
            <Card.Text>
              Serve ice cold beer in stylish beer glasses.
            </Card.Text>
            <Button variant="outline-primary">Shop now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Box;
