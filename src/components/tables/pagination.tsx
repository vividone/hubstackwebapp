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
          className="px-6 py-2 rounded-[8px] border border-gray-300"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
      ) : (
        ""
      )}
      {[...Array(Math.round(total / 6)).keys()].map((position) => (
        <div key={position}>
          <button
            className={`px-6 py-2 rounded-[8px] border border-gray-300 ${
              position < page + 2 || position + 1 === total / 6 ? "" : "hidden"
            }`}
            onClick={() => setPage(position)}
          >
            {position + 1}
          </button>
          {position > page + 1 && position + 1 !== total / 6 ? "..." : ""}
        </div>
      ))}
      {total > 6 ? (
        <button
          className="px-6 py-2 rounded-[8px] border border-gray-300"
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
