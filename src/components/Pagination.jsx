import React from "react";

const Pagination = props => {
  const { pages, nextPage, currentPage } = props;
  const pageLinks = [];
  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i ? "active" : "";
    pageLinks.push(
      <li className={`${active}`} key={i} onClick={() => nextPage(i)}>
        <a href="#">{i}</a>
      </li>
    );
  }
  console.log("PageLinks", pageLinks);
  return <div className="pagination">{pageLinks}</div>;
};

export default Pagination;

//<a href="#">&laquo;</a>
//   <a href="#">&raquo;</a>
