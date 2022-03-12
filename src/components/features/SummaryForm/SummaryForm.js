/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
//import styles from './SummaryForm.module.scss';
import { postOrder } from '../../../redux/orderRedux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Component extends React.Component {
  
  state = {
    contact: {
      name: '',
      email: '',
      privacy: false,
      terms: false,
    },
    error: null,
  };

  handleChange = ({ target }) => {
    const { contact } = this.state;
    const { value, name, type } = target;
    if (type !== 'checkbox') {
      this.setState({ contact: { ...contact, [name]: value } }, () => console.log(this.state.contact));
    } else {
      this.setState({ contact: { ...contact, [name]: !contact[name] } }, () => console.log(this.state.contact));
    }
  }

  handleSubmit = (e) => {
    const { contact } = this.state;
    const { products, orderValue } = this.props;
    e.preventDefault();

    let error = null;

    if (!contact.name.length || !contact.email.length) error = `Fill your name and e-mail`;
    else if (!contact.privacy || !contact.terms) error = `Accept the consents`;
    else if (contact.name.length > 50) error = `Name must have max. 50 signs`;

    if (!error) {
      const order = {
        status: 'pending',
        value: orderValue,
        products,
        contact,
      };
      console.log(' : handleSubmit -> formData', order);
      this.props.postOrder(order);

      this.setState({
        contact: {
          name: '',
          email: '',
          privacy: false,
          terms: false,
        },
        error: null,
      });
    }
    else this.setState({ error });
  }

  render() {

    const { handleSubmit, handleChange } = this;
    //const { className, children } = this.props;
    const { name, email, privacy, terms } = this.state;

    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name" 
            placeholder="Enter yours name"
            name="name" 
            id="name" 
            required 
            value={name} 
            onChange={handleChange} 
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
            value={email} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Privacy</Form.Label>
          <Form.Control 
            name="privacy" 
            id="privacy" 
            required 
            type="checkbox" 
            checked={privacy}
            value={privacy} 
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            I hereby give consent for my personal data 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Terms</Form.Label>
          <Form.Control 
            name="terms" 
            id="terms" 
            required 
            type="checkbox"
            checked={terms}
            value={terms} 
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            I Agree To Terms.
          </Form.Text>
        </Form.Group>
          
        <Button variant="primary" type="submit" submitForm={true} text={'Order & Pay'} path={'summary'} />
      </Form>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  orderValue: PropTypes.number,
  postOrder: PropTypes.func,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: state.order.products,
});

const mapDispatchToProps = dispatch => ({
  postOrder: (order) => dispatch(postOrder(order)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as SummaryForm,
  ReduxContainer as SummaryForm,
  Component as SummaryFormComponent,
};