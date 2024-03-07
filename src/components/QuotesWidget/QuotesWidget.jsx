import React, { useEffect, useState } from "react";
import "./QuotesWidget.css";

const QuotesWidget = () => {
  const [quotes, setQuotes] = useState("");

  const displayQuotes = async () => {
    // fetching quotable api
    try {
      const quotes_api = "https://quotable.io/random";
      const response = await fetch(quotes_api);
      let data = await response.json();
      console.log(data);
      setQuotes(data.content);
    } catch (error) {
      console.log("Error fetching quotes data", error);
    }
  };
  useEffect(() => {
    displayQuotes();
  }, []);
  return (
    <div className="container-quotes mt-5">
      <div className="quotes-title d-flex justify-content-center h4">
        Quotes of the Day
      </div>
      <div className="quotes-box d-flex justify-content-center">"{quotes}"</div>

      <div className="d-flex justify-content-center">
        <button className="mt-3 btn btn-primary" onClick={displayQuotes}>
          Regenerate
        </button>
      </div>
    </div>
  );
};

export default QuotesWidget;
