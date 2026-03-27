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
      className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
