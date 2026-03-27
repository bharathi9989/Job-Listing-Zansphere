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
      type="text"
      placeholder="Search jobs..."
      value={search}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
