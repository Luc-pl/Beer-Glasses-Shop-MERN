/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { SummaryItem } from '../SummaryItem/SummaryItem';
import { Price } from '../../common/Price/Price';
import clsx from 'clsx';
import styles from './Summary.module.scss';

const Component = ({className, products, orderValue}) => (
  <div className={clsx(className, styles.root)}>
    <div>
      <div>Name</div>
      <div>Quantity</div>
      <div>Price</div>
    </div>
    {products.map(product =>
      <SummaryItem
        key={product.courseId}
        summaryItem={product}
      />)}
    <Price price={orderValue} text='Cost: ' />
  </div>
);

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
  orderValue: PropTypes.number,
};

export {
  Component as Summary,
  // Container as Summary,
  Component as SummaryComponent,
};
