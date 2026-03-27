import { useCallback } from "react";

const SearchBar = ({ search, setSearch }) => {
  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search jobs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
