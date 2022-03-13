/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './SummaryItem.module.scss';

const Component = ({ className, summaryItem: { name, quantity, price, additionalInfo } }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <div>
        {name}
        <div className={styles.additionalInfo}>
          {additionalInfo}
        </div>
      </div>
      <div>
        {quantity}
      </div>
      <div>
        {price}
      </div>
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