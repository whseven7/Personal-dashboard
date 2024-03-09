const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const NEWS_API_KEY = "f0b1c1a3f15e4916adb00abf15e91874"; 

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

app.get("/", (req, res) => {
  res.json("Hello")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app };
