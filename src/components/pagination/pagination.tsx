import React from 'react';

import styles from './pagination.module.scss';
import { PaginationProps } from './pagination.types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.root}>
      <ul className={styles.numbers}>
        {pageNumbers.map((page, idx) => (
          <li key={idx} className={styles.number}>
            {page === '...' ? (
              <span className={styles.dots}>...</span>
            ) : (
              <button
                type="button"
                className={page === currentPage ? styles.active : ''}
                onClick={() => onPageChange(Number(page))}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
