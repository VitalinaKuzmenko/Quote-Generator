import React from "react";

export default function Quote({ quote, apiError, typeOfApiError }) {
  return (
    <>
      {apiError === false ? (
        <div className="p-12">
          <p className="text-4xl">{quote.quote}</p>
          <p className="text-2xl text-right pt-5">- {quote.author}</p>
        </div>
      ) : (
        <div className="p-12">
          <p className="text-4xl">
            Sorry, we have {typeOfApiError} Error. Please try to reload page
            later.
          </p>
        </div>
      )}
    </>
  );
}
