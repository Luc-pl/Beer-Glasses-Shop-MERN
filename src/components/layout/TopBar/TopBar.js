/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavButton } from '../../common/NavButton/NavButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './TopBar.module.scss';
import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';

class Component extends React.Component {

  state = {
    isOpen: false,
  }

  handleMenuClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    const { isLogged } = this.props;
  
    return (
      <section className={styles.root}>
        <div className='container'>
          <Row>
            <Col xs={8} className={styles.topCoupon}>
              <p>Save 15% off your first order</p>
            </Col>
            <Col style={isOpen ? this.classes.menu : null} className={`col ${styles.topMenu}`}>
              <ul>
                <li>
                  <NavButton text={'Cart'} path={'cart'} />
                </li>
                <li>
                  <NavButton text={'Contact'} path={'contact'} />
                </li>
                <li>
                  {isLogged
                    ?
                    <NavButton text={'Log out'} path={'logout'} />
                    :
                    <NavButton text={'Log in'} path={'login'} />}
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>      
    );
  }
  
}

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

Component.propTypes = {
  isLogged: PropTypes.func,
  updateLoginStatus: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Container as TopBar,
  Component as TopBarComponent,
};
