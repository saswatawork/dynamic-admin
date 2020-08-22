import React from "react";
import RBForm from "react-bootstrap/Form";
import PropTypes from "prop-types";

/**
 * This is Form Component wrapper
 *
 * @component
 * import { Button,Input } from "components/atoms";
 * @example
 *
 * return (
 *  <Form>
 *    <Input
 *      required
 *      type="text"
 *      name="username"
 *      placeholder="Username"
 *      id="login-username"
 *      onChange={event =>{}}
 *    />
 *    <Input
 *      required
 *      type="text"
 *      name="password"
 *      placeholder="Password"
 *      id="login-password"
 *      onChange={event =>{}}
 *    />
 *    <Button>Submit</Button>
 *  </Form>
 * )
 */
const Form = ({ children, className, ...props }) => (
  <RBForm className={`form ${className}`} {...props}>
    {children}
  </RBForm>
);

Form.defaultProps = {
  className: ""
};

Form.propTypes = {
  /**
   * Pass Custom className
   */
  className: PropTypes.string,
  /**
   * All the form element passed here
   */
  children: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default Form;
