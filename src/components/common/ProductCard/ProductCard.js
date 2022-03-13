/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const Component = ({product}) => {

  const { _id, name, price, image } = product;

  return (
    <Link style={{ textDecoration: 'none' }} to={`${process.env.PUBLIC_URL}/product/${_id}`}>
      <Row className={styles.productBox}>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {`Price: ${price}$`}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Link>
  );
};

Component.propTypes = {
  product: PropTypes.object,

};

export {
  Component as ProductCard,
  // Container as ProductCard,
  Component as ProductCardComponent,
};
