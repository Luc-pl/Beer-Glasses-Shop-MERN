import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import { getCurrentProduct, fetchProductDetails } from '../../../redux/productsRedux';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';

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
                <Row md={4}>
                  <Col>
                    <InputGroup className="mb-3">
                      <Button variant="outline-dark">-</Button>
                      <FormControl
                        placeholder="1"
                        aria-label="1"
                        aria-describedby="basic-addon1"
                      />
                      <Button variant="outline-dark">+</Button>
                    </InputGroup>
                  </Col>
                </Row>
                <Button variant="outline-dark">+ ADD TO CART</Button>                  
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