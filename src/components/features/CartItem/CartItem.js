/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Quantity } from '../../features/Quantity/Quantity';
import styles from './CartItem.module.scss';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { removeFromCart, updateCartItemQuantity, updateCartItemInfo } from '../../../redux/cartRedux';

class Component extends React.Component {

  handleChange = ({ target }, id) => {
    const { value, name } = target;
    const { updateCartItemQuantity, updateCartItemInfo } = this.props;
    name === 'quantity' && updateCartItemQuantity({ id, [name]: value });
    name === 'additionalInfo' && updateCartItemInfo({ id, [name]: value });
  }

  handleRemove = (id) => {
    this.props.removeFromCart(id);
  }


  render() {
    const { handleChange, handleRemove } = this;
    const { className, cartItem } = this.props;
    const { quantity, productId, name, image } = cartItem;

    return (
      <Row>
        <form key={productId} className={clsx(className, styles.root)}>
          <Col xs={2}>{image}</Col>
          <Col xs={4}>{name}</Col>
          <Col xs={4}><Quantity value={Number(quantity)} action={(e) => handleChange(e, productId)} className={styles.inputQuantityPosition} id={productId}  />
            <button action={() => handleRemove(productId)}>Remove to cart</button>
          </Col>
          <Row>
            <Col xs={8}>
              <textarea 
                name="additionalInfo" 
                id={`additionalInfo${productId}`}
                onChange={(e) => handleChange(e, productId)}
                placeholder="">
              </textarea>
            </Col>            
          </Row>
        </form>
      </Row>

    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cartItem: PropTypes.object,
  removeFromCart: PropTypes.func,
  updateCartItemQuantity: PropTypes.func,
  updateCartItemInfo: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};