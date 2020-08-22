import React from "react";
import PropTypes, { any } from "prop-types";
import RBTable from "react-bootstrap/Table";

/**
 * This is Table Component
 *
 * @component
 * @example
 *
 * return (
 *  <Table>
 *    <thead>
 *      <th>Name</th>
 *      <th>Email</th>
 *    </thead>
 *    <tbody>
 *      <tr>
 *        <td>Dummy Name</td>
 *        <td>Dummy Email</td>
 *      </tr>
 *      <tr>
 *        <td>Dummy Name 1</td>
 *        <td>Dummy Email 1</td>
 *      </tr>
 *    </tbody>
 *  </Table>
 * )
 */
const Table = ({ children, className, ...props }) => (
  <RBTable className={className} {...props}>
    {children}
  </RBTable>
);

Table.defaultProps = {
  className: ""
};

Table.propTypes = {
  /**
   * Pass Custom className
   */
  className: PropTypes.string,
  /**
   * Pass Table header and body here
   */
  children: PropTypes.arrayOf(any).isRequired
};

export default Table;
