import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class CssCard extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="common-css-card">
        <div id='wrap'>
          <input className='trigger' name='rad' type='radio'/>
          <input className='trigger' name='rad' type='radio'/>
          <input className='trigger' name='rad' type='radio'/>
          <input className='trigger' name='rad' type='radio'/>
          <input className='trigger' name='rad' type='radio'/>
          <input className='trigger' name='rad' type='radio'/>
          <input className='trigger' name='rad' type='radio'/>
          <input checked='checked' className='trigger' name='rad' type='radio'/>
          <div className='innerwrap'>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <div className='cards'>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>Hey Now</span>Somebody</h1>
                    <div className='text'>
                      <p>Well the years start coming and they don't stop coming</p>
                    </div>
                    <div className='link'>
                      <p>Fed to the rules and I hit the ground running</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>You're an All-Star</span>once told</h1>
                    <div className='text'>
                      <p>Didn't make sense not to live for fun</p>
                    </div>
                    <div className='link'>
                      <p>Your brain gits smart but your head gits dumb</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>Get your game on</span>me the world</h1>
                    <div className='text'>
                      <p>So much to do, so much to see</p>
                    </div>
                    <div className='link'>
                      <p>So what's wrong with taking the back streets?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>go play</span>was gonna</h1>
                    <div className='text'>
                      <p>You'll never know if you don't go You'll never shine if you
                        don't glow</p>
                    </div>
                    <div className='link'>
                      <p>It's a cool place and they say it gits colder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>Hey Now</span>roll me</h1>
                    <div className='text'>
                      <p>You're bundled up now, wait till you git older But the meteor
                        men beg to differ</p>
                    </div>
                    <div className='link'>
                      <p>Judging by the hole in the satellite picture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>you're a rockstar</span>I ain't the</h1>
                    <div className='text'>
                      <p>The ice we skate is getting pretty thin</p>
                    </div>
                    <div className='link'>
                      <p>The water's getting warm so you might as well swim</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>get the show on</span>sharpest tool</h1>
                    <div className='text'>
                      <p>My world's on fire, how about yours? That's the way I like it
                        and I never get bored</p>
                    </div>
                    <div className='link'>
                      <p>Somebody once asked could I spare some change for gas?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cardwrap'>
                <div className='card'>
                  <div className='inner'>
                    <h1><span>get paid</span>in the shed</h1>
                    <div className='text'>
                      <p>I need to get myself away from this place I said yep what a
                        concept</p>
                    </div>
                    <div className='link'>
                      <p>I could use a little fuel myself And we could all use a little
                        change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(CssCard);
