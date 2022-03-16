/* eslint-disable linebreak-style */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <React.Fragment className={styles.footerBar}>
    <footer className={styles.footerMenu}>
      <Container>
        <Row>
          <Col>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#top'>About us</a>
                </li>
                <li>
                  <a href='#top'>Policy</a>
                </li>
                <li>
                  <a href='#top'>Conditions</a>
                </li>
                <li>
                  <a href='#top'>Online support</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='#top'>Login</a>
                </li>
                <li>
                  <a href='#top'>My cart</a>
                </li>
                <li>
                  <a href='#top'>Wishlist</a>
                </li>
                <li>
                  <a href='#top'>Checkout</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#top'>Specials</a>
                </li>
                <li>
                  <a href='#top'>New products</a>
                </li>
                <li>
                  <a href='#top'>Best Sellers</a>
                </li>
                <li>
                  <a href='#top'>Out Stores</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <a href='#top'>Payment options</a>
                </li>
                <li>
                  <a href='#top'>Shipping and delivery</a>
                </li>
                <li>
                  <a href='#top'>Returns</a>
                </li>
                <li>
                  <a href='#top'>Shipping</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    <div className={styles.bottomBar}>
      <Container>
        <Row>
          <Col xs={6}>
            <div className={styles.copyright}>
              <p>©Copyright 2022 | All Rights Reserved</p>
            </div>
          </Col>
          <Col xs={6}>
            <div className={styles.socialMedia}>
              <ul>
                <li>
                  <a href='#top'>
                    <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#top'>
                    <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#top'>
                    <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#top'>
                    <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#top'>
                    <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#top'>
                    <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
);

export default Footer;
