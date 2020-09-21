import React, { Component } from 'react';
import './LoginSignUpStyle.css';

export class LoginSignUp extends Component {
  render() {
    return (
      <div className="login__signup">
        <a href="#"> Don't have an account? <strong>Sign up</strong></a>
      </div>
    )
  }
}

export default LoginSignUp;