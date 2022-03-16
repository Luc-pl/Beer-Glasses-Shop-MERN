/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './RemoveButton.module.scss';

const Component = ({className, action}) =>
  <button className={clsx(className, styles.root)} onClick={action}>
    <p>Remove</p>
  </button>;

Component.propTypes = {
  action: PropTypes.func,
  className: PropTypes.string,
};

export {
  Component as RemoveButton,
  Component as RemoveButtonComponent,
};
