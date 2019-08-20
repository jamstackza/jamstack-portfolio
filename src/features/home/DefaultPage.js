import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';
import jamstackLogoIcon from '../../images/playground.gif';
import jamstackLogo from '../../images/jamstack-logo.png';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import LayoutUiDesktop from './LayoutUiDesktop';
import LayoutUiMobile from './LayoutUiMobile';
import SideNav from './SideNav';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

/*
  static handleClick() {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-nav-open');
  }; */

  constructor(props) {
    super(props);
    this.state = {addClass: true}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let wrapperClass = ["wrapper"];
    if(this.state.addClass) {
      wrapperClass.push('is-nav-open');
    }
    return (
      <div id="wrapper" className={wrapperClass.join(' ')}>
        <div className='home-side-nav'>

        </div>
        <div className="nav">
          <div className="burger-icon">
            <button onClick={this.toggle.bind(this)}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
          <div className="nav__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus est laudantium libero nam omnis
            optio repellat sit unde voluptatum?
          </div>
        </div>
        <div className='layoutUi'>
          <div className='logo-icon'>
            <img src={jamstackLogoIcon} className="app-logo" alt="logo"/>
          </div>
          <div className='jamstack-logo'>
            <img src={jamstackLogo} className="app-logo" alt="logo"/>
          </div>
          <BrowserView viewClassName='layoutUi-desktop'>
            <LayoutUiDesktop/>
          </BrowserView>
          <MobileView viewClassName='layoutUi-mobile'>
            <LayoutUiMobile/>
          </MobileView>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
