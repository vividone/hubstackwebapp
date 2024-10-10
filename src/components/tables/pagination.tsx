import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

type pagination = {
  total: number;
  page: number;
  setPage: (aug0: number) => void;
};

export default function Pagination({ total, page, setPage }: pagination) {
  return (
    <ResponsivePagination
      current={page}
      total={total}
      onPageChange={setPage}
    />
  );
}
