import React from "react";
import "./NewsFeed.css";

const NewsFeedItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="news-item row d-flex justify-content-center">
        <img src={urlToImage} alt={urlToImage} className="news-img" />
        <h3 className="d-flex justify-content-center">
          <a className="headline" href={url}>
            {title}
          </a>
        </h3>
        <p className="h4 d-flex justify-content-center">{description}</p>
      </div>
    </div>
  );
};

export default NewsFeedItem;
