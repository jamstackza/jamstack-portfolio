import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Workspace extends Component {
  static propTypes = {
    jamstack: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="jamstack-workspace">
        Page Content: jamstack/Workspace
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
)(Workspace);
