import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './TopBar.module.scss';
import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';

const Component = (isLogged) => (
  <div className={styles.root}>
    <div className={'container'}>
      <Row>
        <Col xs={8} className={styles.topCoupon}>
          <p>Save 15% off your first order</p>
        </Col>
        <Col className={`col ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                {isLogged 
                  ? <p className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={() => {
                    updateLoginStatus('logout');
                  }}
                  >
                    Log Out</p>
                  : <p className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Log In</p>
                }
              </a>
            </li>
            <li>
              <a href='/register'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <span>Register</span>
              </a>
            </li>
            <li>
              <a href='/cart'>
                <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
                <span>Cart</span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

Component.propTypes = {
  updateLoginStatus: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  //Component as TopBar,
  Container as TopBar,
  Component as TopBarComponent,
};
