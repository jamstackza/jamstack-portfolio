import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Mason, { Canvas } from '@mason-api/react-sdk';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  /** 
   * TODO
   */
  componentDidMount() {
    Mason({
      apiKey:'Cy5Xv/3L4/Jf1VMRxPMXcvzaqaTjoAgiOGPcRTkfwBM=',
      projectId: '5d5c59db59434d0003bc13ad',//optional string or array of project id strings to pre-fetch
    });
  }

  /** 
   * TODO
   * @return {!*}
   */
  render() {
    return (
      <Fragment>
      <div className="home-app">
        <Canvas id="5d5c5e8a59434d0003bc1411" className='mason'  />
        <div className="page-container">{this.props.children}</div>
      </div>
      </Fragment>
    );
  }
}
