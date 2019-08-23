import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  componentDidMount() {

  }
  render() {
    return (
      <div className="jamstack-layout">
        {this.props.children}
      </div>
    );
  }
}
