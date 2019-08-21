import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mason, { Canvas } from '@mason-api/react-sdk';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  componentDidMount() {
    Mason({
      apiKey: 'Cy5Xv/3L4/Jf1VMRxPMXcvzaqaTjoAgiOGPcRTkfwBM=',
      projectId: '5d5c59db59434d0003bc13ad',
    });
  }
  render() {
    return (
      <div className="jamstack-layout">
        <Canvas id="5d5c5e8a59434d0003bc1411" />
        {this.props.children}
      </div>
    );
  }
}
