/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { Price } from '../../common/Price/Price';
import { SummaryItem } from '../../features/SummaryItem/SummaryItem';
import { connect } from 'react-redux';
//import styles from './Summary.module.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Component extends React.Component {
  render() {
    const { products } = this.props;

    return(
      <Container>
        <Row>
          <Col>
            <h1>Order Summary</h1>
            {products.length > 0
              ?
              <div>
                {products.map(product => <SummaryItem key={product.productId} summaryItem={product} />)}
                <Price price={5} text={'Subtotal'}/>
              </div>
              :
              <h1>Order is empty</h1>
            }
          </Col>
        </Row>

      </Container>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: state.order.products,
});


const mapDispatchToProps = dispatch => ({
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Summary,
  ReduxContainer as Summary,
  Component as SummaryComponent,
};
