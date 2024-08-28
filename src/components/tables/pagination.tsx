type pagination = {
  total: number;
  page: number;
  setPage: (aug0: number) => void;
};

export default function Pagination({ total, page, setPage }: pagination) {
  return (
    <div className="flex items-center justify-center gap-2">
      {page > 0 ? (
        <button
          className="px-3 py-1 rounded-[8px] border border-gray-300"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
      ) : (
        ""
      )}
      {total > 6 && page < 2 ? (
        <button
          className="px-3 py-1 rounded-[8px] border border-gray-300"
          onClick={() => setPage(0)}
        >
          1
        </button>
      ) : (
        "---"
      )}
      {total > 12 && page < 3 ? (
        <button
          className="px-3 py-1 rounded-[8px] border border-gray-300"
          onClick={() => setPage(1)}
        >
          2
        </button>
      ) : (
        "---"
      )}
      {[...Array(Math.round(total / 6)).keys()].map((position) => (
        <div key={position}>
          <button
            className={`px-3 py-1 rounded-[8px] border border-gray-300 ${
              position < page + 2 || position + 1 === total / 6 ? "" : "hidden"
            }`}
            onClick={() => setPage(position + 3)}
          >
            {position + 3}
          </button>
          {position > page + 1 && position + 1 !== total / 6 ? "..." : ""}
        </div>
      ))}
      {total > 6 ? (
        <button
          className="px-3 py-1 rounded-[8px] border border-gray-300"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
