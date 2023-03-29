import React, { useState } from "react";

export default function QuoteButton({ setQuote }) {
  // const [fake, setFake] = useState("");

  const getAnotherQuote = () => {
    fetch("http://localhost:3030/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));

    // console.log(fake);
  };

  return (
    <button
      onClick={getAnotherQuote}
      className="place-self-center w-2/5 mt-10 border-2 border-white rounded hover:bg-white hover:text-violet-950"
    >
      Get Another Quote
    </button>
  );
}
