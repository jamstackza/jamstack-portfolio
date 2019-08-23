import React, { Component } from 'react';
// noinspection ES6CheckImport
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Iframe from 'react-iframe';
import themeLogo from '../../images/theme/logo/logo-white.png';
import landingSlideOne from '../../images/theme/Slider/1.jpg';
import Cursor from '../common/Cursor';

export class LayoutUiDesktop extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-layout-ui-desktop">
        <Cursor></Cursor>


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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutUiDesktop);
