import React from "react";

export default function Search() {
  return (
    <div>
      <label className="pr-3" htmlFor="search">
        Search:
      </label>
      <input
        className="border-2 border-white rounded bg-transparent "
        type="search"
        id="search"
        name="search"
      />
    </div>
  );
}
