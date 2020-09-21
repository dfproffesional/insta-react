import React, { Component } from 'react';
import './LoginFormStyle.css';
import {Link} from 'react-router-dom';

export class LoginForm extends Component {
  render() {
    const logo = require('../../assets/logo.png');
    return (
      <div className="login__form">
        <h1>
          <img src={logo} alt="insta-logo"/>
        </h1>

        <form className="form">
          <input type="text" placeholder="Phone number, username, or email"/>
          <input type="password" placeholder="Password"/>
          {/* <a className="button" >Log In</a> */}
          <Link className="button" to="/posts">Log In</Link>

          <section className="division">
            <div className="divison__line"></div> or <div className="divison__line"></div>
          </section>

          <section className="facebook">Log in with Facebook</section>
          
          <a href="#">Forgot Password?</a>
        </form>

        
      </div>
    )
  }
}

export default LoginForm
