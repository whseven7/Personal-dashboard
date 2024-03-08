import React from "react";
import { useState, useEffect } from "react";
import "./NewsFeed.css";
import NewsFeedItem from "./NewsFeedItem";
import axios from "axios";

const NewsFeed = () => {
  //If you'd like to test on your local machine change use the news_api below and comment out the news_api using the env variable

  // const news_api = "f0b1c1a3f15e4916adb00abf15e91874";

  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("australia");

  const getArticles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/news", {
        params: {
          q: searchValue, // or any other query you want
        },
      });
      setArticles(response.data);
    } catch (error) {
      console.log("Error fetching News data:", error);
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() === "") {
      console.error("Please enter a valid city name");
      return;
    }
    getArticles();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getArticles();
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="container">
      <div className="news-title d-flex justify-content-center">
        News Widget
      </div>
      <div className="top-bar row justify-content-center my-3">
        <input
          type="text"
          className="city-input col-4"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="search-icon col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            onClick={handleSearch}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>

      <div className="">
        {articles.map((article) => {
          return (
            <NewsFeedItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsFeed;
