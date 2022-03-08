/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';
import { getCurrentProduct, fetchProductDetails } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import { Quantity } from '../../features/Quantity/Quantity';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Component extends React.Component {

  state = {
    quantity: 1,
  };

  componentDidMount() {
    const { fetchProduct, match } = this.props;
    fetchProduct(match.params._id);
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    if (value > 0) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (e, productId, name, price) => {
    const { addToCart } = this.props;
    const { quantity } = this.state;

    const cartItem = {
      quantity,
      productId,
      name,
      price,
      additionalInfo: '',
    };

    addToCart(cartItem);

    this.setState({ quantity: 1 });
    e.preventDefault();
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { product, cart } = this.props;
    const { _id, name, description, price, category, image, gallery } = product;
    const { quantity } = this.state;
    const isProductInCart = cart.some(({ productId }) => productId === _id);

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
                {isProductInCart
                  ?
                  <div>
                    <div>Product in yours cart</div>
                    <button><Link to={`${process.env.PUBLIC_URL}/cart`}>Check yours cart</Link></button>
                  </div> 
                  :
                  <Row>
                    <Col>
                      <form className={styles.addCartForm} onSubmit={(e) => handleSubmit(e, _id)}>
                        <Quantity value={Number(quantity)} action={handleChange} />
                        <input 
                          type="submit" 
                          onAddToCartClicked={() => addToCart(product._id)}
                          value="+ ADD TO CART" 
                        />
                      </form>
                    </Col>
                  </Row>
                }
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
  match: PropTypes.object,
  className: PropTypes.string,
  product: PropTypes.object,
  fetchProduct: PropTypes.func,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  product: getCurrentProduct(state),
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: id => dispatch(fetchProductDetails(id)),
  addToCart: obj => dispatch(addToCart(obj)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as Product,
  Component as ProductComponent,
};