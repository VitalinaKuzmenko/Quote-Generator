import React from "react";

export default function QuoteButton({
  setQuote,
  setApiError,
  setTypeOfApiError,
}) {
  const getAnotherQuote = () => {
    fetch("https://vitalina-kuzmenko-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch(
        (error) =>
          function () {
            setApiError(true);
            setTypeOfApiError(error);
          }
      );
  };

  return (
    <button
      onClick={getAnotherQuote}
      className="place-self-center w-2/5 mt-10 border-2 text-2xl border-white rounded hover:bg-white hover:text-violet-950"
    >
      Get Another Quote
    </button>
  );
}
