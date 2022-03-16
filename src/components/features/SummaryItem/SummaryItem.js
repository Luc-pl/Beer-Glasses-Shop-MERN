/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './SummaryItem.module.scss';
import { Row, Col } from 'react-bootstrap';

const Component = ({ className, summaryItem: { name, quantity, price, additionalInfo } }) => {

  return (
    <Row className={clsx(className, styles.root)}>
      <Col xs={3}>
        <p>{name}</p>
      </Col>
      <Col xs={3}>
        <p>{quantity}</p>
      </Col>
      <Col xs={3}>
        <p>{price}</p>
      </Col>
      <Col xs={3}>
        <p>{additionalInfo}</p>
      </Col>
    </Row>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  summaryItem: PropTypes.object,
};

export {
  Component as SummaryItem,
  Component as SummaryItemComponent,
};