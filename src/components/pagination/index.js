import React from "react";
import styles from "./pagination.module.scss";

export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = Array.from({ length: nPages }, (_, i) => i + 1);

  const handleOnScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.paginationAlignment}>
      {/* Prev Button */}
      <div
        className={`${styles.text} ${currentPage === 1 ? styles.disabled : ""}`}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            handleOnScrollToTop();
          }
        }}
      >
        Prev
      </div>

      {/* Page Numbers */}
      {pageNumbers.map((page) => {
        if (page === currentPage) {
          return (
            <div
              key={page}
              className={`${styles.round} ${styles.active}`}
              onClick={() => {
                setCurrentPage(page);
                handleOnScrollToTop();
              }}
            >
              {page}
            </div>
          );
        } else if (
          page === 1 ||
          page === nPages ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        ) {
          return (
            <div
              key={page}
              className={styles.round}
              onClick={() => {
                setCurrentPage(page);
                handleOnScrollToTop();
              }}
            >
              {page}
            </div>
          );
        } else if (
          (page === currentPage - 2 && currentPage > 4) ||
          (page === currentPage + 2 && currentPage < nPages - 3)
        ) {
          return (
            <div key={page} className={styles.round}>
              ...
            </div>
          );
        }
        return null;
      })}

      {/* Next Button */}
      <div
        className={`${styles.text} ${currentPage === nPages ? styles.disabled : ""}`}
        onClick={() => {
          if (currentPage < nPages) {
            setCurrentPage(currentPage + 1);
            handleOnScrollToTop();
          }
        }}
      >
        Next
      </div>
    </div>
  );
}
