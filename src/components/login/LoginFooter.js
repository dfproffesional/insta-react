import React, { Component } from 'react';
import './LoginFooterStyle.css';

export class LoginFooter extends Component {
  render() {
    return (
      <div className="footer__content">
        <nav>
          <a href="#">Button#1</a>
          <a href="#">Button#2</a>
          <a href="#">Button#3</a>
          <a href="#">Button#4</a>
          <a href="#">Button#5</a>
          <a href="#">Button#6</a>
          <a href="#">Button#7</a>
          <a href="#">Button#8</a>
          <a href="#">Button#9</a>
        </nav>

        <span>
          Â© 2020 INSTAGRAM FROM FACEBOOK
        </span>
      </div>
    )
  }
}

export default LoginFooter;
