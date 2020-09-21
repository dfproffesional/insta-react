import React, { Component } from "react";
import "./PostListStyle.css";

export class PostList extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      isLoad: false
    };
  }

  async ApiNotice() {
    let url =
      "https://newsapi.org/v2/everything?" +
      "language=es&" +
      "pageSize=40&" +
      "q=covid&" +
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
          articles: response.articles
        });
      });
  }

  splitNotice() {
    let char = document.querySelectorAll(".post__feed p");
    char.forEach((element) => {
      let pagraph = element.innerHTML.split(" ");

      if (pagraph.length > 30) {
        while (pagraph.length > 30) {
          pagraph.pop();
        }
        element.innerHTML = pagraph.join(" ") + "...";
      }
    });
  }
  componentDidMount() {
    this.setState({
      isLoad: true
    });
    this.ApiNotice();
  }
  componentDidUpdate(prevProps, prevState) {
    this.splitNotice();
  }

  render() {
    if (this.state.isLoad) {
      return (
        <div className="list-posts">
          {this.state.articles.map((response, index) => {
            return this.postTags(response, index);
          })}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  postTags(data, index) {
    return (
      <article className="post" key={index}>
        <header className="post__title">
          <strong>{data.source.name}</strong>
        </header>
        <figure className="post__image">
          <img src={data.urlToImage} />
        </figure>
        <section className="post__feed">
          <strong>{data.title}</strong>
          <p
            onLoad={() => {
              alert("hi");
            }}
          >
            {data.content}
          </p>
        </section>
      </article>
    );
  }
}

export default PostList;
