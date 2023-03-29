import "./App.css";
import Quote from "./Quote";
import QuoteButton from "./QuoteButton";
import Search from "./Search";
import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  });

  return (
    <div className="App">
      <div className="p-10 flex flex-col text-3xl">
        <Search />
        <QuoteButton setQuote={setQuote} />
        <Quote quote={quote} />
      </div>
    </div>
  );
}

export default App;
