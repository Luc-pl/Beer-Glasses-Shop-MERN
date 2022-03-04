import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import { getCurrentProduct, fetchProductDetails } from '../../../redux/productsRedux';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Component extends React.Component {

  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
  }

  render() {
    const { product } = this.props;
    const { name, description, price, category, image, gallery } = product;

    return (
      <Container className={styles.cardProduct}>
        <Card>
          <Row className={styles.cardRow}>
            <Col xs={2} className={styles.cardGallery}>
              {gallery && gallery.map((item, index) => (
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
            </Col>
            <Col xs={4}>
              <Card.Img variant="top" src={image} />
            </Col>
            <Col xs={6}>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.name}>{name}</Card.Title>
                <Card.Text className={styles.category}>
                  {`category: ${category}`}
                </Card.Text>
                <Card.Text className={styles.price}>
                  {`Price: ${price}$`}
                </Card.Text>
                <div className={styles.cardLine}></div>  
                <Card.Text className={styles.description}>
                  {description}
                </Card.Text>
                <div className={styles.cardLine}></div>                      
              </Card.Body>
            </Col>
          </Row>    
        </Card>
      </Container>
      
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  product: PropTypes.object,
  fetchProduct: PropTypes.func,
};

const mapStateToProps = state => ({
  product: getCurrentProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchProduct: () => dispatch(fetchProductDetails(props.match.params._id)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as Product,
  Component as ProductComponent,
};