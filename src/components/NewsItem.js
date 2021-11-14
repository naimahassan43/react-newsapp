import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{}}>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://i2-prod.mirror.co.uk/news/weird-news/article25445750.ece/ALTERNATES/s1200/0_GettyImages-1231262826.jpg"
            }
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer noopener"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
