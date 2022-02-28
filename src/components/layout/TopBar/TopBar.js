import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <Container>
      <Row>
        <Col xs={8} className={styles.topCoupon}>
          <p>Save 15% off your first order</p>
        </Col>
        <Col className={`col ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <span>Login</span>
              </a>
            </li>
            <li>
              <a href='/register'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <span>Register</span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TopBar;
