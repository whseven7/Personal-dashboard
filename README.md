# Description

Personal Dashboard website with 4 main features which are: Quotes of the Day widget, News widget, Weather widget, and Task Manager.

---

## How to setup and run on local machine

- run `npm install`.

- run `npm run dev` to start a development server.

#### Notes

- Uncomment the API in NewsFeed.jsx line 10 and commented out line 25 env variable api to make the API working for the Weather Widget.

- In NewsFeed, follow direction on line 13 to be able to run on local machine

- Uncomment the API in WeatherWidget.jsx line 24 and commented out line 11 env variable api to make the API working for the Weather Widget.

## Technologies Used

- Bootstrap: Utilizing Bootstrap framework for responsive layout and pre-designed components.

- JavaScript: Adding interactivity and dynamic elements to enhance user experience.

- JSX: extension for JavaScript which allows to write HTML-like code directly within JavaScript.

- dotenv (link): used to manage sensitive information and configuration settings in Node.js applications.

- Vite: A build tool that offers fast development server and hot module replacement (HMR) capabilities.

- Express: backend server to fetch the data from the NewsAPI, which need to be fetched through localhost instead of browser for the free plan.

