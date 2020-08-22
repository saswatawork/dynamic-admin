import React from "react";
import PropTypes from "prop-types";
import RBButtonGroup from "react-bootstrap/ButtonGroup";

/**
 * This is Button Group Component
 *
 * @component
 * import { Button } from "components/atoms/Button";
 * @example
 *
 * return (
 *  <ButtonGroup>
 *    <Button>Left</Button>
 *    <Button>Middle</Button>
 *    <Button>Right</Button>
 *  </ButtonGroup>
 * )
 */
const ButtonGroup = ({ children, className, ...props }) => (
  <RBButtonGroup className={className} {...props}>
    {children}
  </RBButtonGroup>
);

ButtonGroup.defaultProps = {
  className: ""
};

ButtonGroup.propTypes = {
  /**
   * Pass Custom className
   */
  className: PropTypes.string,
  /**
   * Keep multple button
   */
  children: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default ButtonGroup;
