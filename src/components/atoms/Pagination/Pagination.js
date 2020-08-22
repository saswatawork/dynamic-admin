import React from "react";
import RBPagination from "react-bootstrap/Pagination";
import PropTypes, { any } from "prop-types";

const Pagination = ({ children, size, className }) => (
  <RBPagination className={className} size={size}>
    {children}
  </RBPagination>
);

Pagination.defaultProps = {
  className: "",
  size: "md"
};

Pagination.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "md"]),
  children: PropTypes.arrayOf(any).isRequired
};

export default Pagination;
