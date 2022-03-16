/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quantity.module.scss';

const Component = ({ value, action, id }) =>
  <label htmlFor={`quantity${id}`}>
    <input
      name='quantity'
      id={`quantity${id}`}
      required
      type='number'
      value={value}
      onChange={action}
      className={styles.inputPrice}
    />
  </label>;

Component.propTypes = {
  value: PropTypes.number,
  action: PropTypes.func,
  id: PropTypes.string,
};

export {
  Component as Quantity,
  Component as QuantityComponent,
};
