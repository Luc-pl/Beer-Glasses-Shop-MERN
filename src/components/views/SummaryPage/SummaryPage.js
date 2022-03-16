/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import { Summary } from '../../features/Summary/Summary';
import { SummaryForm } from '../../features/SummaryForm/SummaryForm';
import { fetchProductsFromCart } from '../../../redux/orderRedux';
import { connect } from 'react-redux';
import clsx from 'clsx';
import styles from './SummaryPage.module.scss';
import { Container, Card } from 'react-bootstrap';

class Component extends React.Component { 

  componentDidMount() {
    const { fetchProductsFromCart, cart } = this.props;

    fetchProductsFromCart(cart);
  }

  render() {
    const { products, className } = this.props;

    let orderValue = 0;

    products.forEach(({ quantity, price }) => {
      orderValue += (quantity * price);
    });

    return(
      <Container className={clsx(className, styles.root)}>
        <Card className={styles.cardSummary}>
            <Card.Body>
              <h1>Order Summary</h1>
              {products.length 
                ?
                <Summary products={products} orderValue={orderValue} />
                :
                <h1>No order</h1>
              }
              <SummaryForm orderValue={orderValue} />
            </Card.Body>
        </Card>
      </Container>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  fetchProductsFromCart: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.order.products,
});


const mapDispatchToProps = dispatch => ({
  fetchProductsFromCart: cart => dispatch(fetchProductsFromCart(cart)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as SummaryPage,
  Component as SummaryPageComponent,
};
