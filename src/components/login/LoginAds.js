import React, { Component } from 'react';
import './LoginAdsStyle.css';

export class LoginAds extends Component {
  render() {
    const img = [
      require('../../assets/apple-app.png'),
      require('../../assets/android-app.png')
    ]
    return (
      <div className="login__ads">
        <p>Get the app.</p>
        <section className="ad__apps">
          <img src={img[0]} alt=""/>
          <img src={img[1]} alt=""/>
        </section>
      </div>
    )
  }
}

export default LoginAds;
