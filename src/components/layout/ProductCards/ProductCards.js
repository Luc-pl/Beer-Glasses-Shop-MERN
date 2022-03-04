import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard } from '../../common/ProductCard/ProductCard';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import styles from './ProductCards.module.scss';

const Component = ({products}) => 
  <Container className={styles.product}>
    {products.map(product =>
      <ProductCard key={product._id} product={product} />
    )}
  </Container>;

Component.propTypes = {
  products: PropTypes.array,
};

export {
  Component as ProductCards,
  Component as ProductCardsComponent,
};
