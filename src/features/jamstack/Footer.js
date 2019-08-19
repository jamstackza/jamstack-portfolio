import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Footer extends Component {
  static propTypes = {
    jamstack: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="jamstack-footer">
        Page Content: jamstack/Footer
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
)(Footer);
