import React, { useEffect, useState } from "react";

export default function Search({ setQuote }) {
  const [newQuote, setNewQuote] = useState("");
  const [quotes, setQuotes] = useState({});
  const [error, setError] = useState(false);

  //getting all the quotes that are in API
  useEffect(() => {
    fetch("https://vitalina-kuzmenko-quoteserver.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.log(error));
  }, []);

  //changing quote on page if quotes include it
  const changeQuote = (event) => {
    setError(false);

    setNewQuote(event.target.value.toLowerCase());
    console.log("change is ", event.target.value);
    const filterQuote = quotes.find((quote) => {
      return (
        quote.quote.toLowerCase().includes(newQuote) ||
        quote.author.toLowerCase().includes(newQuote)
      );
    });
    //changing quote on page
    filterQuote === undefined ? setError(true) : setQuote(filterQuote);
  };

  return (
    <div>
      <label className="pr-3 text-2xl" htmlFor="search">
        Search quote:
      </label>
      <input
        onChange={changeQuote}
        className="text-2xl border-2 border-white rounded bg-transparent "
        type="search"
        id="search"
        name="search"
      />
      {error === true && (
        <p className="mt-5 text-2xl">
          Sorry, there is no quote including this word
        </p>
      )}
    </div>
  );
}
