const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();


const app = express();
app.use(cors());
// const PORT = process.env.PORT || 3000;

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API; 

app.use(cors());

app.get("/news", async (req, res) => {
  try {
    const query = req.query.q || "help";
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        language: "en",
        sortBy: "popularity",
        page: 1, // Change this to the country code you want news from
        apiKey: NEWS_API_KEY,
      },
    });
    const news = response.data.articles;
    res.json(news);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = { app };
