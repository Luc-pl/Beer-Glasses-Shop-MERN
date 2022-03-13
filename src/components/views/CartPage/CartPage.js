/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Price } from '../../common/Price/Price';
import { CartItem } from '../../features/CartItem/CartItem';
import Card from 'react-bootstrap/Card';
import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

import styles from './CartPage.module.scss';

const Component = ({ className, cart }) => {
  let cartValue = 0;

  cart.forEach(({ quantity, price }) => {
    cartValue += (quantity * price);
  });

  const getMapCart = (cart) => cart.map(cartItem =>
    <CartItem key={cartItem.productId} cartItem={cartItem} />
  );

  return (
    <Container className={clsx(className, styles.root)}>
      <Card>
        <Card.Body>
          <h2>Your Cart</h2>
          {cart.length 
            ?
            <div>
              {getMapCart(cart)}
              <Price price={cartValue} />
              <button><Link to={`${process.env.PUBLIC_URL}/summary`}>Order & pay</Link></button>
            </div>
            :
            <h2>...is empty</h2>
          }
        </Card.Body>
      </Card>
    </Container>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart,
});


const ReduxContainer = connect(mapStateToProps)(Component);

export {
  //Component as CartPage,
  ReduxContainer as CartPage,
  Component as CartPageComponent,
};
