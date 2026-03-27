const Pagination = ({ total, perPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="pagination">
      <button
        className={currentPage === 1 ? "disabled" : ""}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className={currentPage === totalPages ? "disabled" : ""}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
