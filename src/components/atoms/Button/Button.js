import React from "react";
import RBButton from "react-bootstrap/Button";
import PropTypes from "prop-types";

/**
 * Button variant string values.
 * @enum {string}
 */
export const ButtonVariant = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  DARK: "dark",
  LIGHT: "light",
  LINK: "link",
  OUTLINEPRIMARY: "outline-primary",
  OUTLINESECONDARY: "outline-secondary",
  OUTLINESUCCESS: "outline-success",
  OUTLINEDANGER: "outline-danger",
  OUTLINEWARNING: "outline-warning",
  OUTLINEINFO: "outline-info",
  OUTLINEDARK: "outline-dark",
  OUTLINELIGHT: "outline-light",
  OUTLINELINK: "outline-link"
};

/**
 * Button size string values.
 * @enum {string}
 */
export const ButtonSize = {
  SM: "sm",
  MD: "md",
  LG: "lg"
};

/**
 * Button type string values.
 * @enum {string}
 */
export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit"
};

/**
 * This is Button Component
 *
 * @component
 * @example
 * return (
 *  <Button
 *    variant="primary"
 *    type="button"
 *    size="lg"
 *    className="btn btn-submit"
 *    active
 *    block
 *  >
 *    Button
 *  </Button>
 * )
 */
const Button = props => {
  const { className, children, size, type, variant } = props;
  return (
    <RBButton
      className={className}
      type={type}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </RBButton>
  );
};

Button.defaultProps = {
  active: false,
  block: false,
  className: "",
  disabled: false,
  href: "",
  size: ButtonSize.MD,
  variant: ButtonVariant.PRIMARY,
  type: ButtonType.SUBMIT
};

Button.propTypes = {
  /**
   * Manually set the visual state of the button to :active
   */
  active: PropTypes.bool,
  /**
   * Spans the full width of the Button parent
   */
  block: PropTypes.bool,
  /**
   * Disables the Button, preventing mouse events, even if the underlying component is an element
   */
  disabled: PropTypes.bool,
  /**
   * Pass custom class name, multiple class name will be sent with space separator e.g. className="btn btn-submit"
   */
  className: PropTypes.string,
  /**
   * Button name
   */
  children: PropTypes.string.isRequired,
  /**
   * 	Providing a href will render an element, styled as a button.
   */
  href: PropTypes.string,
  /**
   * 	Button size small or large
   */
  size: PropTypes.oneOf(Object.values(ButtonSize)),
  /**
   * 	Specifies a large or small button.
   */
  type: PropTypes.oneOf(Object.values(ButtonType)),
  /**
   * 	Button variant will style the button component as per variant
   */
  variant: PropTypes.oneOf(Object.values(ButtonVariant))
};

export default Button;
