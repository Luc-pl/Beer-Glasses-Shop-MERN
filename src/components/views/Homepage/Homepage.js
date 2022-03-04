import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../../layout/Hero/Hero';
import Box from '../../layout/Box/Box';
import { ProductCards } from '../../layout/ProductCards/ProductCards';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAllProducts, fetchProducts } from '../../../redux/productsRedux';

import styles from './Homepage.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { className, products} = this.props;
    return (
      <main className={clsx(className, styles.root)
      }>
        <Hero />
        <Box />
        <ProductCards products={products}/>
      </main>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
