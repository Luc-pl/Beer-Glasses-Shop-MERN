/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './SummaryItem.module.scss';

const Component = ({ className, summaryItem }) => {

  return (
    <div className={clsx(className, styles.root)}>
      {summaryItem}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  summaryItem: PropTypes.object,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SummaryItem,
  // Container as SummaryItem,
  Component as SummaryItemComponent, //for tests
};