/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { SummaryItem } from '../../features/SummaryItem/SummaryItem';
import { addProducts } from '../../../redux/orderRedux';
import { connect } from 'react-redux';
//import styles from './Summary.module.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Component extends React.Component {

  state = {
    name: '',
    email: '',
    privacy: false,
    terms: false,
  };

  componentDidMount() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);

  }
  handlePrivacyChange(event) {
    this.setState({ privacy: !this.state.privacy });
    console.log(this.state.privacy);

  }
  handleTermsChange(event) {
    this.setState({ terms: !this.state.value });
    console.log(this.state.terms);

  }

  handleOrder() {

  }

  render() {
    const { products } = this.props;

    let orderValue = 0;

    products.forEach(({ quantity, price }) => {
      orderValue += (quantity * price);
    });

    return(
      <Container>
        <Row>
          <Col>
            <h1>Order Summary</h1>
            {products.length > 0
              ?
              <div>
                <SummaryItem products={products} orderValue={orderValue} />
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="name" 
                      placeholder="Enter yours name"
                      name="name" 
                      id="name" 
                      required 
                      value={this.state.name} 
                      onChange={this.handleNameChange.bind(this)} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Yours email"
                      name="email" 
                      id="email" 
                      required 
                      value={this.state.email} 
                      onChange={this.handleEmailChange.bind(this)} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Privacy</Form.Label>
                    <Form.Control 
                      name="privacy" 
                      id="privacy" 
                      required 
                      type="checkbox" 
                      value={this.state.privacy} 
                      onChange={this.handlePrivacyChange.bind(this)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Terms</Form.Label>
                    <Form.Control 
                      name="terms" 
                      id="terms" 
                      required 
                      type="checkbox" 
                      value={this.state.terms} 
                      onChange={this.handleTermsChange.bind(this)}
                    />
                  </Form.Group>
        
                  <Button variant="primary" type="submit" action={this.handleOrder.bind(this)} text={'Order & Pay'} path={'summary'}>
                    Submit
                  </Button>
                </Form>
              </div>
              :
              <h1>Order is empty</h1>
            }
          </Col>
        </Row>

      </Container>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  addProducts: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.order.products,
});


const mapDispatchToProps = dispatch => ({
  addProducts: cart => dispatch(addProducts(cart)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Summary,
  ReduxContainer as Summary,
  Component as SummaryComponent,
};
