import React, { Component } from 'react';
import './PostsHeaderStyle.css';

export class PostHeader extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="header__logo">
          <a href="/"><img src={require('../../assets/logo.png')} alt="logo"/></a>
        </div>

        <div className="header__search">
          <input type="text" placeholder="Search" />
        </div>

        <nav className="header__nav">
          <div className="nav__container">
            <a href="#">
              <img src={require('../../assets/icons/home-icon.svg')} />
            </a>
            <a href="#">
              <img src={require('../../assets/icons/message-icon.svg')} />
            </a>
            <a href="#">
              <img src={require('../../assets/icons/like-icon.svg')} />
            </a>
            <a href="#">
              <img src={require('../../assets/icons/compas-icon.svg')} />
            </a>
            <a href="#">
              <img src={require('../../assets/icons/user-icon.svg')} />
            </a>
          </div>
        </nav>
      </React.StrictMode>
    )
  }
}

export default PostHeader;
