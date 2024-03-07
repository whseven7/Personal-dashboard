import React from "react";
import "./home.css";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
import NewsFeed from "../NewsFeed/NewsFeed";
import TaskManager from "../TaskManager/TaskManager";
import QuotesWidget from "../QuotesWidget/QuotesWidget";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <QuotesWidget />
      </div>
      <div className="row d-flex justify-content-center">
        <div className="jumbotron news-background news-jumbotron col-xl-6 col-lg-6 col-md-6">
          <NewsFeed />
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="jumbotron task-background task-jumbotron">
            <TaskManager />
          </div>
          <div className="jumbotron weather-background">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
