const Pagination = ({ total, perPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-2">
      <button
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
