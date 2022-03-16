/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { connect } from 'react-redux';

import styles from './NavButton.module.scss';

const Component = ({ className, text, path, cartVariant, cart, action }) => (
  <Link to={`${process.env.PUBLIC_URL}/${path}`} className={clsx(className, styles.root)} onClick={action}>
    {text}
    {(cartVariant && cart.length > 0) && <div className={styles.quantity}>{cart.length}</div>}
  </Link>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  updateLoginStatus: PropTypes.func,
  cartVariant: PropTypes.bool,
  cart: PropTypes.array,
  action: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as NavButton,
  Component as NavButtonComponent,
};
