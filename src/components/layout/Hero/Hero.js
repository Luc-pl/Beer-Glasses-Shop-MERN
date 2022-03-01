import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Hero.module.scss';

const Hero = () => (
  <Row className={styles.hero}>
    <Col xs={6} className={styles.heroText}>
      <h1>Perfect drinking glass</h1>
      <p>...for developing the flavours and taste of a beer and should not be missed in any home bar.</p>
    </Col>
    <Col xs={6} className={styles.heroImages}>        
      <img alt="" src="/images/NicePng_pint-of-beer-png_833032.png" />  
      <div className={styles.heroCircle}></div>      
    </Col>
  </Row>
);

export default Hero;
