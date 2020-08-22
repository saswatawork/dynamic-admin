import React from "react";
import RBForm from "react-bootstrap/Form";
import PropTypes from "prop-types";
import _ from "lodash";
import "./Input.scss";

/**
 * This is Input Component
 *
 * @component
 * import { Form,Button } from "components/atoms";
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
const Input = ({ type, text, id, className, label, placeholder, ...props }) => (
  <RBForm.Group className={className} controlId={id}>
    {label && (
      <RBForm.Label>{_.replace(label, new RegExp("_", "g"), " ")}</RBForm.Label>
    )}
    <RBForm.Control
      type={type}
      placeholder={_.capitalize(
        _.replace(placeholder, new RegExp("_", "g"), " ")
      )}
      {...props}
    />
    {text && <RBForm.Text className="text-muted">{text}</RBForm.Text>}
  </RBForm.Group>
);

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  className: "",
  text: ""
};

Input.propTypes = {
  /**
   * An unique id should be passed to input
   */
  id: PropTypes.string.isRequired,
  /**
   * Input type
   */
  type: PropTypes.string,
  /**
   * Pass custom class name
   */
  className: PropTypes.string,
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Description for input
   */
  text: PropTypes.string
};

export default Input;
