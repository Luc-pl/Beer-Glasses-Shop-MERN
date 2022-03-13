/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Price.module.scss';

const Component = ({ className, children, price }) => (
  <p className={clsx(className, styles.root)}>
    {`Total price: ${price}`}
  </p>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  price: PropTypes.number,
};

export {
  Component as Price,
  // Container as Price,
  Component as PriceComponent,
};
