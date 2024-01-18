import { useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "600px",
        margin: "auto",
      }}
    >
      <input
        type="text"
        name=""
        id="search-input"
        placeholder="Search..."
        onChange={changeHandler}
        value={searchQuery}
      />
      {searchQuery.length > 0 && (
        <button id="search-btn" onClick={() => setSearchQuery("")}>
          Clear
        </button>
      )}
    </div>
  );
}
