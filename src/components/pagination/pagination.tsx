import React, { useState, useEffect } from 'react';

import styles from './pagination.module.scss';
import { PaginationProps } from './pagination.types';
import Container from '@ui/container/container';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (windowWidth < 768) {
      if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1, 2, '...', totalPages);
      }
    } else {
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
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <ul className={styles.pages}>
          {pageNumbers.map((page, idx) => (
            <li key={idx} className={styles.page}>
              {page === '...' ? (
                <span className={styles.dots}>...</span>
              ) : (
                <button
                  type="button"
                  className={`${styles.button} ${page === currentPage ? styles.currentPage : ''}`}
                  onClick={() => onPageChange(Number(page))}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Pagination;
