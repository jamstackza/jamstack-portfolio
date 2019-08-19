import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import LayoutUiDesktop from './LayoutUiDesktop';
import LayoutUiMobile from './LayoutUiMobile';

export class DefaultPage extends Component {
  static propTypes = {
    jamstack: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="jamstack-default-page">
        <BrowserView viewClassName='layoutUi-desktop'>
          <LayoutUiDesktop />
        </BrowserView>
        <MobileView viewClassName='layoutUi-mobile'>
          <LayoutUiMobile />
        </MobileView>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    jamstack: state.jamstack,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
