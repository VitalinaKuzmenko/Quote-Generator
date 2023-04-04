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
    fetch("https://vitalina-kuzmenko-quoteserver.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => {
        setApiError(true);
        setTypeOfApiError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="bg-white/10 rounded-xl p-10 flex flex-col text-3xl mobile-window">
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
      <footer>
        <p>
          <a
            className="font-bold link"
            rel="norefferer"
            target="_blank"
            href="https://github.com/VitalinaKuzmenko/Quote-Generator"
          >
            Open-source code
          </a>
          , by Vitalina Kuzmenko
        </p>
      </footer>
    </div>
  );
}

export default App;
