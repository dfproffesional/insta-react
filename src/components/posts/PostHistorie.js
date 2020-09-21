import React, { Component } from "react";
import "./PostHistorieStyle.css";

export class PostHistorie extends Component {
  constructor() {
    super();
    this.state = {
      histories: [],
      isLoad: false
    };
  }

  async ApiNotice() {
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "pageSize=10&" +
      "apiKey=bed662f14f5744e0a8776363c0d9a0d5";
    let req = new Request(url);

    return await fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        console.log(response.articles);
        this.setState({
          histories: response.articles
        });
      });
  }

  canvasHistorie() {
    let canvas = document.querySelectorAll(".history-item canvas");
    //console.log(canvas);
    canvas.forEach((element) => {
      let ctx = element.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#FF0000";
      ctx.arc(33, 33, 31, 0, 2 * Math.PI);
      ctx.stroke();
    });
  }

  componentDidMount() {
    this.setState({
      isLoad: true
    });
    this.ApiNotice();
    this.canvasHistorie();
  }

  componentDidUpdate(prevProps, prevState) {
    this.canvasHistorie();
  }

  render() {
    if (this.state.isLoad) {
      return (
        <div className="list-histories">
          {this.state.histories.map((response, index) => {
            return this.postTags(response, index);
          })}
        </div>
      );
    }

    return <div className="list-histories">Fail</div>;
  }

  postTags(data, index) {
    return (
      <div className="history-item" key={index}>
        <canvas width="70px" height="70px"></canvas>
        <figure className="item__box">
          <img src={data.urlToImage} />
        </figure>
      </div>
    );
  }
}

export default PostHistorie;
