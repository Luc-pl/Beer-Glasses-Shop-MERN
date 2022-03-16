/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { SummaryItem } from '../SummaryItem/SummaryItem';
import { Price } from '../../common/Price/Price';
import clsx from 'clsx';
import { Row, Col } from 'react-bootstrap';
import styles from './Summary.module.scss';

const Component = ({className, products, orderValue}) => (
  <Row className={clsx(className, styles.root)}>
    <Row className={styles.rowSummary}>
      <Col xs={3}>
        <p>Products</p>
      </Col>
      <Col xs={3}>
        <p>Quantity</p>
      </Col>
      <Col xs={3}>
        <p>Price</p>
      </Col>
      <Col xs={3}>
        <p>Information</p>
      </Col>
    </Row>
    {products.map(product =>
      <SummaryItem
        key={product.productId}
        summaryItem={product}
      />)}
    <Row>
      <Price price={orderValue} text='Summary price:' />
    </Row>
  </Row>
);

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
  orderValue: PropTypes.number,
};

export {
  Component as Summary,
  Component as SummaryComponent,
};
