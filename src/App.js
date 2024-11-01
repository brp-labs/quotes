import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const url = "https://quotes-api-self.vercel.app/quote";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div>
      <div className="quote">
        <span className="wrapper">
          <span className="quotationMark">
            &ldquo;
          </span>  
        </span>
        {quote}
      </div>
      <div className="author">
          &mdash; {author}
      </div>
      <button onClick={getQuote}>Pick a new quote</button>
    </div>
  );
}

export default App;
