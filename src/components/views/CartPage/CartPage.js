import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartPage.module.scss';

const Component = ({className}) => (
  <Container className={clsx(className, styles.root)}>
    <h2>Your Cart</h2>
    <Card>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the cards content.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartPage,
  // Container as CartPage,
  Component as CartPageComponent,
};
