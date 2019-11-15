import React from "react";

const Pagination = props => {
  const { pages, nextPage, currentPage } = props;
  const pageLinks = [];
  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i ? "active" : "";
    pageLinks.push(
      <li key={i} onClick={() => nextPage(i)}>
        <a href="#" className={`${active}`}>
          {i}
        </a>
      </li>
    );
  }
  console.log("PageLinks", pageLinks);
  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <li onClick={() => nextPage(currentPage - 1)}>
          <a href="#!">&laquo;</a>
        </li>
      ) : (
        ""
      )}
      {pageLinks}
      {currentPage < pages + 1 ? (
        <li onClick={() => nextPage(currentPage + 1)}>
          <a href="#!">&raquo;</a>
        </li>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
