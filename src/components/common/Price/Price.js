/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Price.module.scss';

const Component = ({ className, children, price, text }) => (
  <p className={clsx(className, styles.root)}>
    {`${text} ${price}$`}
  </p>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  price: PropTypes.number,
  text: PropTypes.string,
};

export {
  Component as Price,
  Component as PriceComponent,
};
