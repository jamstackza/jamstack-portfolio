import React, { Component } from 'react';
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import jamstackLogo from '../../images/jamstack-logo.png';

export default class MainNav extends Component {
  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <header className="header header-white">
          <div className="logo-box">
            <img src={jamstackLogo} alt="logo" />
          </div>
          <div className="menu-outer-wrap">
            <div className="menu-wrap">
              <div className="menu menu-hover click-target">
                <span className="menu-line-1" />
                <span className="menu-line-2" />
                <span className="menu-line-3" />
              </div>
            </div>
          </div>
        </header>
        <div className="menu-navigation">
          <div className="menu-overlay click-target" />

          <div className="menu-pre-background" />

          <div className="menu-inner">
            <div className="menu-container">
              <div className="menu-header">
                <h4>Navigate to</h4>
              </div>

              <nav className="navigation">
                <ul className="navigation-list">
                  <li className="navigation-item">
                    Home
                    <i className="icon-arrow-right" />
                    <div className="subnav">
                      <ul className="subnav-list">
                        <li className="subnav-item">
                          <i className="icon-arrow-left" />
                          Home
                        </li>
                        <li className="subnav-item">Home Main</li>
                        <li className="subnav-item">Home Light</li>
                        <li className="subnav-item">Home Dark</li>
                        <li className="subnav-item">Home Video</li>
                      </ul>
                    </div>
                  </li>
                  <li className="navigation-item">About</li>
                  <li className="navigation-item">Services</li>
                  <li className="navigation-item">Portfolio</li>
                  <li className="navigation-item">
                    Blog
                    <i className="icon-arrow-right" />
                    <div className="subnav">
                      <ul className="subnav-list">
                        <li className="subnav-item">
                          <i className="icon-arrow-left" />
                          Blog
                        </li>
                        <li className="subnav-item">Blog</li>
                        <li className="subnav-item">Blog Article</li>
                      </ul>
                    </div>
                  </li>
                  <li className="navigation-item">Contact</li>
                </ul>
              </nav>

              <div className="social social-navigation">
                <div className="social-item">
                  <i className="fab fa-twitter" />
                </div>
                <div className="social-item">
                  <i className="fab fa-instagram" />
                </div>
                <div className="social-item">
                  <i className="fab fa-youtube" />
                </div>
                <div className="social-item">
                  <i className="fab fa-linkedin-in" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
