import ReactPaginateModule from "react-paginate";
import css from "./Pagination.module.css";

const ReactPaginate: typeof ReactPaginateModule =
  (ReactPaginateModule as unknown as { default?: typeof ReactPaginateModule })
    .default ?? ReactPaginateModule;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={(event: { selected: number }) =>
        onPageChange(event.selected + 1)
      }
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      previousLabel="←"
      nextLabel="→"
      containerClassName={css.pagination}
      pageClassName={css.page}
      activeClassName={css.active}
      previousClassName={css.page}
      nextClassName={css.page}
      breakClassName={css.page}
      disabledClassName={css.disabled}
    />
  );
}
