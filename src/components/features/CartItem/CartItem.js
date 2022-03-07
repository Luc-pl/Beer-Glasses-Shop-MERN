/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CartItem.module.scss';
import { connect } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, updateCartItemInfo } from '../../../redux/cartRedux';

class Component extends React.Component {

  handleQuantityChange(id, e) {
    this.props.updateCartItemQuantity({ id, quantity: e.target.value });
  }

  handleInfoChange(id, e) {
    this.props.updateCartItemInfo({ id, additionalInfo: e.target.value });
  }

  handleRemove(id, e) {
    e.preventDefault();
    this.props.removeFromCart(id);
  }


  render() {
    const { className, cartItem } = this.props;
    const { quantity, productId, name } = cartItem;

    return (
      <form key={productId} className={clsx(className, styles.root)}>
        <p>{name}</p>
        <input 
          name="quantity" 
          id="quantity" 
          required  
          type="number" 
          value={quantity} 
          onChange={(e) => this.handleQuantityChange(productId, e)} 
        />
        <textarea 
          name="additionalInfo" 
          id="additionalInfo"
          onChange={(e) => this.handleInfoChange(productId, e)} 
          placeholder="">
        </textarea>
        <button onClick={(e) => this.handleRemove(productId, e)}>Remove to cart</button>
      </form>
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};