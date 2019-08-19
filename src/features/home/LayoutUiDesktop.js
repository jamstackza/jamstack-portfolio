import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as THREE from "three";
import WebGLView from './webgl/WebGLView';
import GUIView from './gui/GUIView';

export class LayoutUiDesktop extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  /* mount compononent */
  componentDidMount() {
    this.init = function() {
      this.initWebGL();
      this.initGUI();
      this.addListeners();
      this.animate();
      this.resize();
    };

     this.initWebGL = function() {
       this.webgl = new WebGLView(this);
       this.mount.appendChild(this.webgl.renderer.domElement);
    };

    this.initGUI = function() {
      this.gui = new GUIView(this);
    };

    this.addListeners = function() {
      this.handlerAnimate = this.animate.bind(this);

      window.addEventListener('resize', this.resize.bind(this));
      window.addEventListener('keyup', this.keyup.bind(this));

      const el = this.webgl.renderer.domElement;
      el.addEventListener('click', this.click.bind(this));
    };

    this.animate = function() {
      this.update();
      this.draw();

      this.raf = requestAnimationFrame(this.handlerAnimate);
    };

    // ---------------------------------------------------------------------------------------------
    // PUBLIC
    // ---------------------------------------------------------------------------------------------

    this.update = function() {
      if (this.gui.stats) this.gui.stats.begin();
      if (this.webgl) this.webgl.update();
      if (this.gui) this.gui.update();
    };

    this.draw = function() {
      if (this.webgl) this.webgl.draw();
      if (this.gui.stats) this.gui.stats.end();
    };

    // ---------------------------------------------------------------------------------------------
    // EVENT HANDLERS
    // ---------------------------------------------------------------------------------------------

    this.resize = function() {
      if (this.webgl) this.webgl.resize();
    };

    this.keyup = function(e) {
      // g
      if (e.keyCode === 71) { if (this.gui) this.gui.toggle(); }
    };

    this.click = function(e) {
      this.webgl.next();
    };
  }

  render() {
    return <div className='container' ref={ref => (this.mount = ref)} />;
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutUiDesktop);
