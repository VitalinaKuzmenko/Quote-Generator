import React from "react";

export default function Quote({ quote }) {
  return (
    <div className="p-12">
      <p className="text-4xl">{quote.quote}</p>
      <p className="text-2xl text-right pt-5">{quote.author}</p>
    </div>
  );
}
