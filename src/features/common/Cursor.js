import React, { Component } from 'react';

export default class Cursor extends Component {
  static propTypes = {};

  componentDidMount() {
    function cursorInit() {
      let clientX = -100;
      let clientY = -100;

      const innerCursor = document.querySelector('.cursor');
      const itemCursor = document.querySelector('.cursor-item');

      var cw = innerCursor.offsetWidth / 2;
      var ch = innerCursor.offsetHeight / 2;

      const initCursor = () => {
        document.addEventListener('mousemove', e => {
          clientX = e.clientX;
          clientY = e.clientY;
        });

        const render = () => {
          innerCursor.style.transform = `translate(${clientX - cw}px, ${clientY - ch}px)`;

          requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
      };
      initCursor();
      const button = document.querySelectorAll(['button', 'a', '.click-target']);

      for (let i = 0; i < button.length; i++) {
        const el = button[i];

        el.addEventListener('mouseenter', e => {
          itemCursor.classList.add('cursor-big');
        });
        el.addEventListener('mouseleave', e => {
          itemCursor.classList.remove('cursor-big');
        });
      }
      const cursorColor = document.querySelectorAll('.cursor-color');

      for (let i = 0; i < cursorColor.length; i++) {
        const el = cursorColor[i];

        el.addEventListener('mouseenter', e => {
          itemCursor.classList.add('cursor-alt');
        });
        el.addEventListener('mouseleave', e => {
          itemCursor.classList.remove('cursor-alt');
        });
      }
    }
    cursorInit();
  }

  render() {
    return (
      <div className="cursor">
        <div id="cursor" className="cursor-item"></div>
      </div>
    );
  }
}
