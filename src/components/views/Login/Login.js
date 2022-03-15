/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap';
import styles from './Login.module.scss';

const Component = ({ className, isLogged }) => {
  return (
    <main className={clsx(className, styles.root)}>
      {isLogged ?
        <Container>
          <Row>
            <Col>
              <h1>You are logged in</h1>
            </Col>
          </Row>
        </Container>        
        :
        <Container>
          <Row>
            <Col>
              <a className={clsx(styles.loginBtn, styles.loginBtnGoogle)} href="http://localhost:8000/auth/google">
                Login with Google
              </a>
            </Col>            
          </Row>
        </Container>     
      }
    </main>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Login,
  ReduxContainer as Login,
  Component as LoginComponent,
};
