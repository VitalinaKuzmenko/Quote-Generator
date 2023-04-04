import React from "react";

export default function QuoteButton({
  setQuote,
  setApiError,
  setTypeOfApiError,
}) {
  const getAnotherQuote = () => {
    fetch("https://vitalina-kuzmenko-quoteserver.glitch.me/quotes/random")
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
      className="place-self-center w-60 mt-10 border-2 text-2xl border-white rounded hover:bg-white hover:text-violet-950 ease-in duration-300"
    >
      Get Another Quote
    </button>
  );
}
