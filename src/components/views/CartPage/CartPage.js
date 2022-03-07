/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Price } from '../../common/Price/Price';
import { CartItem } from '../../features/CartItem/CartItem';
import Card from 'react-bootstrap/Card';
import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { addProducts } from '../../../redux/orderRedux';

import styles from './CartPage.module.scss';

class Component extends React.Component {

  handleSummary() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

  render() {
    const { className, cart } = this.props;

    let cartValue = 0;

    cart.forEach(({ quantity, price }) => {
      cartValue += (quantity * price);
    });


    return (
      <Container className={clsx(className, styles.root)}>
        <Card>
          <Card.Body>
            <h2>Your Cart</h2>
            {cart.length > 0
              ?
              <div>
                {cart.map(cartItem =>
                  <CartItem key={cartItem.productId} cartItem={cartItem} />
                )}
                <Price price={cartValue} />
              </div>
              :
              <h2>...is empty</h2>
            }
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
  addProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addProducts: cart => dispatch(addProducts(cart)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as CartPage,
  ReduxContainer as CartPage,
  Component as CartPageComponent,
};
