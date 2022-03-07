import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ className, value, action, text, id }) =>
  <label htmlFor={`quantity${id}`} className={className}>
    {text}
    <input
      name='quantity'
      id={`quantity${id}`}
      required
      type='number'
      value={value}
      onChange={action}
    />
  </label>;

Component.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  text: PropTypes.string,
  action: PropTypes.func,
  id: PropTypes.string,
};

export {
  Component as Quantity,
  // Container as Quantity,
  Component as QuantityComponent,
};
