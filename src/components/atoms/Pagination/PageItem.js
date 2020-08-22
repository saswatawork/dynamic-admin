import React from "react";
import PropTypes from "prop-types";
import RBPageItem from "react-bootstrap/PageItem";

const PageItem = ({ children, active, disabled, className, ...props }) => (
  <RBPageItem
    className={className}
    active={active}
    disabled={disabled}
    {...props}
  >
    {children}
  </RBPageItem>
);

PageItem.defaultProps = {
  className: "",
  active: false,
  disabled: false
};

PageItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired
};

export default PageItem;
