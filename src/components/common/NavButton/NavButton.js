/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';

import styles from './NavButton.module.scss';

const Component = ({ className, children, text, path, updateLoginStatus }) => (
  <Link to={`${process.env.PUBLIC_URL}/${path}`} className={clsx(className, styles.root)} onClick={() => updateLoginStatus(path)}>
    {text}
  </Link>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  updateLoginStatus: PropTypes.func,

};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as NavButton,
  Component as NavButtonComponent,
};
