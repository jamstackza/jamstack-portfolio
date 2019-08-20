import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SideNav extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <div className='home-side-nav'>
          <header className="header">
            <div className="header-nav">
              <Link className="header-nav__item" to="/">ReactAnimations</Link>
              <Link className="header-nav__item" to="/ReactReveal/">ReactReveal</Link>
              <Link className="header-nav__item" to="/ExampleCss/">ExampleCss</Link>
              <Link className="header-nav__item" to="/ReactTransitionGroup/">ReactTransitionGroup</Link>
              <Link className="header-nav__item" to="/AntDesign/">AntDesign</Link>
            </div>
            <a href="https://github.com/nozhenkoD/react-animation-2019" className="header__link">GitHub</a>
          </header>
        </div>
      </Fragment>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNav);
