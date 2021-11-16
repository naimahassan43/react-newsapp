import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div className="d-flex justify-content-end position-absolute end-0">
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
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
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on
              {new Date(date).toGMTString()}
            </small>
          </p>
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
};

export default NewsItem;
