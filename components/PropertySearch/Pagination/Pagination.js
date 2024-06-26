import React from "react";

export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="max-w-xl mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button key={i} className="btn" onClick={() => onPageClick(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};
