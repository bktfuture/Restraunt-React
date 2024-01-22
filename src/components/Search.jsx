import { useEffect, useState } from "react";

export default function Search({onSearch}) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    onSearch(searchQuery)
  }, [searchQuery])

  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div>
      <input
        type="text"
        name=""
        id="search-input"
        placeholder="Search..."
        onChange={changeHandler}
        value={searchQuery}
      />
      {searchQuery.length > 0 && (
        <button onClick={() => setSearchQuery("")}>Clear</button>
      )}
    </div>
  );
}
