/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InfoOrder } from '../../common/InfoOrder/InfoOrder';
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
    const { products, orderValue, success } = this.props;
    e.preventDefault();

    let error = null;

    if (!contact.name.length || !contact.email.length) error = `Fill your name and e-mail`;
    else if (!contact.privacy || !contact.terms) error = `Accept the consents`;
    else if (contact.name.length > 50) error = `Name must have max. 50 signs`;

    if (!error) {
      const order = {
        status: 'ordered',
        value: orderValue,
        products,
        contact,
      };
      this.props.postOrder(order);

      if (success) {
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
    }
    else this.setState({ error });
  }

  render() {

    const { handleSubmit, handleChange } = this;
    const { loading, loadingError, success, products, lastOrder } = this.props;
    const { name, email, privacy, terms } = this.state;

    return (
      
      <Form onSubmit={(e) => handleSubmit(e)}>
        {(!loading && !loadingError && success) && <InfoOrder variant={'success'}>{`Orders ${lastOrder} has been placed`}</InfoOrder>}
        {(loadingError) && <InfoOrder variant={'error'}>{loadingError}</InfoOrder>}
        {(!loading && products.length > 0) &&
          (
            <div>
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
            </div>
          )}
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
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
  success: PropTypes.bool,
  lastOrder: PropTypes.string,
};

const mapStateToProps = state => ({
  products: state.order.products,
  loading: state.order.loading.active,
  loadingError: state.order.loading.error,
  success: state.order.loading.success,
  lastOrder: state.order.lastOrder,
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
