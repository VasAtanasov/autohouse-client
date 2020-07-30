import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({ page, onPageChange }) => {
  const [pager, setPager] = React.useState(null);

  React.useEffect(() => {
    let currentPage = page?.number || 0;
    let pageSize = page?.size || 10;
    let totalPages = Math.ceil(page?.totalElements / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 0;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 0;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, page?.totalElements - 1);

    let pages = [...Array(endPage - startPage).keys()].map(
      (i) => startPage + i
    );

    setPager({
      totalItems: page?.totalElements,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    });
  }, [page]);

  const setPage = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    pager && (
      <Pagination>
        <Pagination.First
          className={pager.currentPage === 0 ? 'disabled' : ''}
          onClick={() => setPage(0)}
        />
        <Pagination.Prev
          className={pager.currentPage === 0 ? 'disabled' : ''}
          onClick={() => setPage(pager.currentPage - 1)}
        />
        {pager?.pages.map((page, index) => (
          <Pagination.Item
            key={page + '=' + index}
            className={pager.currentPage === page ? 'active' : ''}
            onClick={() => setPage(page)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          className={
            pager.currentPage === pager.totalPages - 1 ? 'disabled' : ''
          }
          onClick={() => setPage(pager.currentPage + 1)}
        />
        <Pagination.Last
          className={
            pager.currentPage === pager.totalPages - 1 ? 'disabled' : ''
          }
          onClick={() => setPage(pager.totalPages - 1)}
        />
      </Pagination>
    )
  );
};

export default Paginate;
