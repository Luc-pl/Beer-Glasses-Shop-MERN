/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { Price } from '../../common/Price/Price';
import { SummaryItem } from '../../features/SummaryItem/SummaryItem';
import { addProducts } from '../../../redux/orderRedux';
import { connect } from 'react-redux';
//import styles from './Summary.module.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Component extends React.Component {

  componentDidMount() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

  render() {
    const { products } = this.props;

    let orderValue = 0;

    products.forEach(({ quantity, price }) => {
      orderValue += (quantity * price);
    });

    return(
      <Container>
        <Row>
          <Col>
            <h1>Order Summary</h1>
            {products.length > 0
              ?
              <div>
                {products.map(product => <SummaryItem key={product.productId} summaryItem={product} />)}
                <Price price={orderValue} text={'Subtotal'}/>
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
  addProducts: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.order.products,
});


const mapDispatchToProps = dispatch => ({
  addProducts: cart => dispatch(addProducts(cart)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Summary,
  ReduxContainer as Summary,
  Component as SummaryComponent,
};
