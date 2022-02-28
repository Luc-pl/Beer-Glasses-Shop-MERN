import React from 'react';
//import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.heroStyle}>
    <Carousel>
      <Carousel.Item interval={3000} className={styles.hero}>
        <img
          className="d-block w-100 h-100"
          src="/images/photo-hero.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Your favorite style</h3>
          <p>Grab the right beer glass to go with your favorite style of suds.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className={styles.hero}>
        <img
          className="d-block w-100 h-100"
          src="/images/photo-hero-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Stylish beer glasses</h3>
          <p>Serve ice cold beer in stylish beer glasses.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className={styles.hero}>
        <img
          className="d-block w-100"
          src="/images/photo-4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Perfect drinking glass</h3>
          <p>...for developing the flavours and taste of a beer and should not be missed in any home bar.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Hero;
