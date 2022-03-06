import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, updateCartItemInfo } from '../../../redux/cartRedux';
import { addProducts } from '../../../redux/orderRedux';

import styles from './CartPage.module.scss';

class Component extends React.Component {

  handleSummary() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

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
    const { className, cart } = this.props;

    let cartValue = 0;

    cart.forEach(({ quantity, price }) => {
      cartValue += (quantity * price);
    });


    return (
      <Container className={clsx(className, styles.root)}>
        <h2>Your Cart</h2>
        <Card>
          <Card.Body>
            {cart.length > 0
              ?
              <div>
                {cart.map(({ quantity, productId, name, price }) =>
                  <form key={productId}>
                    <p>{name}</p>
                    <p>{price}</p>
                    <input name="quantity" id="quantity" required type="number" value={quantity} onChange={(e) => this.handleQuantityChange(productId, e)} />
                    <textarea name="additionalInfo" id="additionalInfo" onChange={(e) => this.handleInfoChange(productId, e)} placeholder="Wpisz komentarz lub zapytaj"></textarea>
                    <button onClick={(e) => this.handleRemove(e, productId)}></button>
                  </form>
                )}
                <p>{`Total price: ${cartValue}`}</p>
              </div>
              :
              <h2>Cart is empty</h2>
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
  removeFromCart: PropTypes.func,
  updateCartItemQuantity: PropTypes.func,
  updateCartItemInfo: PropTypes.func,
  addProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
  addProducts: cart => dispatch(addProducts(cart)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as CartPage,
  ReduxContainer as CartPage,
  Component as CartPageComponent,
};
