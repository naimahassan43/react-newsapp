import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  //Fetch api data
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=au&apiKey=355dd9a2a1da4b49935696efa443f981&page=1&pageSize=21";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  //Previous button click
  handlePrevClick = async () => {
    console.log("Previous button click");
    let url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=355dd9a2a1da4b49935696efa443f981&page=${
      this.state.page - 1
    }&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  //Next button click
  handleNextClick = async () => {
    console.log("Next button click");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 21)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=355dd9a2a1da4b49935696efa443f981&page=${
        this.state.page + 1
      }&pageSize=21`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
