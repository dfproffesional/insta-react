import React, { Component } from "react";
import "./LoginImageStyle.css";

// posts images
import Post1 from "../../assets/img/posts/image_1.jpg";
import Post2 from "../../assets/img/posts/image_2.jpg";
import Post3 from "../../assets/img/posts/image_3.jpg";
import Post4 from "../../assets/img/posts/image_4.jpg";
import Post5 from "../../assets/img/posts/image_5.jpg";

export class LoginImagePhone extends Component {
  constructor() {
    super();
    this.state = {
      images: document.getElementsByClassName("image__item")
    };
  }

  fadeOutHandler() {
    let number = 4;
    let images = this.state.images;
    let clean = [];

    this.state.fadeOutHandler = setInterval(() => {
      if (!!images[number] === false) clearInterval(this.fadeOutHandler);
      if (number > 0) {
        images[number].classList.add("image__item-fade_out");
        number--;
      } else {
        clean = [];
        number = 4;

        clean.push(images[0], images[1], images[2], images[3]);
        images[4].classList.remove("image__item-fade_out");

        setTimeout(() => {
          clean.map((value) => {
            value.classList.remove("image__item-fade_out");
          });
        }, 2000);
      }
      // console.log(images[number]);
    }, 4000);
  }

  componentDidMount() {
    this.fadeOutHandler();
  }

  componentWillUnmount() {
    clearInterval(this.state.fadeOutHandler);
  }

  render() {
    return (
      <div className="login__image">
        <img className="image__item" src={Post1} alt="image-1" />
        <img className="image__item" src={Post2} alt="image-2" />
        <img className="image__item" src={Post3} alt="image-3" />
        <img className="image__item" src={Post4} alt="image-4" />
        <img className="image__item" src={Post5} alt="image-5" />
      </div>
    );
  }
}

export default LoginImagePhone;
