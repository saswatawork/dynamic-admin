import React from "react";
import RBForm from "react-bootstrap/Form";
import PropTypes from "prop-types";
import _ from "lodash";
import "./Select.scss";

/**
 * This is Select Component
 *
 * @component
 * import { Form,Button } from "components/atoms";
 * @example
 *
 * return (
 *  <Form>
 *    <Select
 *      required
 *      name="description"
 *      placeholder="Description"
 *      id="blog-description"
 *      onChange={event =>{}}
 *    >
 *      <option>1</option>
 *      <option>2</option>
 *      <option>3</option>
 *      <option>4</option>
 *      <option>5</option>
 *    </Select>
 *    <Button>Save</Button>
 *  </Form>
 * )
 */
const Select = ({
  text,
  id,
  children,
  className,
  label,
  placeholder,
  ...props
}) => (
  <RBForm.Group className={className} controlId={id}>
    {label && (
      <RBForm.Label>{_.replace(label, new RegExp("_", "g"), " ")}</RBForm.Label>
    )}
    <RBForm.Control
      as="select"
      placeholder={_.capitalize(
        _.replace(placeholder, new RegExp("_", "g"), " ")
      )}
      {...props}
    >
      {children}
    </RBForm.Control>
    {text && <RBForm.Text className="text-muted">{text}</RBForm.Text>}
  </RBForm.Group>
);

Select.defaultProps = {
  label: "",
  placeholder: "",
  className: "",
  text: ""
};

Select.propTypes = {
  /**
   * Unoque id for Select
   */
  id: PropTypes.string.isRequired,
  /**
   * Custom class name
   */
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  /**
   * Custom class name
   */
  className: PropTypes.string,
  /**
   * Select label
   */
  label: PropTypes.string,
  /**
   * Select placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Description
   */
  text: PropTypes.string
};

export default Select;
