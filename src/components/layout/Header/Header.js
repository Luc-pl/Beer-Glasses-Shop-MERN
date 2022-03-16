/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { TopBar } from '../TopBar/TopBar';
import MenuBar from '../MenuBar/MenuBar';
import clsx from 'clsx';
import styles from './Header.module.scss';

const Component = ({className}) => (
  <header className={clsx(className, styles.root)}>
    <TopBar />
    <MenuBar />
  </header>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
