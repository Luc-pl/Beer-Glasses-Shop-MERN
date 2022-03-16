/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Price } from '../../common/Price/Price';
import { CartItem } from '../../features/CartItem/CartItem';
import { Container, Card, Row, Col } from 'react-bootstrap';
import clsx from 'clsx';
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
      <Card className={styles.cardProduct}>
        <Card.Body>
          <h2>Your Cart</h2>
          <Row className={styles.rowCartPage}>
            <Col xs={3}>
              <p>Products</p>
            </Col>
            <Col xs={3}>
              <p>Quantity</p>
            </Col>
            <Col xs={3}>
              <p>Price</p>
            </Col>
            <Col xs={3}>
              <p>Action</p>
            </Col>
          </Row>
          {cart.length 
            ?
            <div>
              {getMapCart(cart)}            
              <div>
                <Price price={cartValue} text='Total price:' />
              </div>
              <button className={styles.orderBtn}><Link to={`${process.env.PUBLIC_URL}/summary`} className={styles.linkCart}>Order & pay</Link></button>
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
  ReduxContainer as CartPage,
  Component as CartPageComponent,
};
