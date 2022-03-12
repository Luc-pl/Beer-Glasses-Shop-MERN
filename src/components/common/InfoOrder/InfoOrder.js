/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './InfoOrder.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Container>
      <Row>
        <Col>
          <h1>InfoOrder</h1>
        </Col>  
      </Row>  
    </Container>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as InfoOrder,
  Component as InfoOrderComponent,
};
