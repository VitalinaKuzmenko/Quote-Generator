import "./App.css";
import Quote from "./Quote";
import QuoteButton from "./QuoteButton";
import Search from "./Search";
import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  });
  const [apiError, setApiError] = useState(false);
  const [typeOfApiError, setTypeOfApiError] = useState([]);

  useEffect(() => {
    setApiError(false);
    fetch("https://vitalina-kuzmenko-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => {
        setApiError(true);
        setTypeOfApiError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="p-10 flex flex-col text-3xl">
        <Search setQuote={setQuote} />
        <QuoteButton
          setQuote={setQuote}
          setApiError={setApiError}
          setTypeOfApiError={setTypeOfApiError}
        />
        <Quote
          quote={quote}
          apiError={apiError}
          typeOfApiError={typeOfApiError}
        />
      </div>
    </div>
  );
}

export default App;
