/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './InfoOrder.module.scss';

const Component = ({className, children, variant}) => {
  switch (variant) {
    case 'success':
      return <div className={clsx(className, styles.root, styles.success)}>
        {children}
      </div>;
    case 'warning':
      return <div className={clsx(className, styles.root, styles.warning)}>
        {children}
      </div>;
    case 'error':
      return <div className={clsx(className, styles.root, styles.error)}>
        {children}
      </div>;
    default:
      return <div className={clsx(className, styles.root)}>
        {children}
      </div>;
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export {
  Component as InfoOrder,
  Component as InfoOrderComponent,
};
