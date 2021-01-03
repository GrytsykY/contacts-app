// import React from "react";

// export const Pagination = ({
//   totalData,
//   dataPerPage,
//   paginate,
//   currentPage,
// }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   console.log("max-", Math.max(...pageNumbers));

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="pagination  pagination-sm justify-content-center">
//         <li className={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
//           <a className="page-link" href="#" aria-label="Previous">
//             <span aria-hidden="true" onClick={() => paginate(--currentPage)}>
//               &laquo;
//             </span>
//           </a>
//         </li>
//         {pageNumbers.map((number) => (
//           <li className="page-item" key={number}>
//             <a
//               onClick={() => paginate(number)}
//               className={`page-link ${number === currentPage ? "blue" : ""}`}
//               href="!#"
//             >
//               {number}
//             </a>
//           </li>
//         ))}
//         <li
//           className={`page-item ${
//             Math.max(...pageNumbers) === currentPage ? "disabled" : ""
//           }`}
//         >
//           <a className="page-link" href="#" aria-label="Next">
//             <span aria-hidden="true" onClick={() => paginate(++currentPage)}>
//               &raquo;
//             </span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const BasicPagination = ({
  totalData,
  dataPerPage,
  paginate,
  currentPage,
}) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers.length}
        color="primary"
        onChange={(pageNumbers, number) => paginate(number)}
        page={currentPage}
      />
    </div>
  );
};
