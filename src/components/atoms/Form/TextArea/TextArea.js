import React from "react";
import RBForm from "react-bootstrap/Form";
import PropTypes from "prop-types";
import _ from "lodash";
import "./TextArea.scss";

/**
 * This is Text area Component
 *
 * @component
 * import { Form,Button } from "components/atoms";
 * @example
 *
 * return (
 *  <Form>
 *    <TextArea
 *      required
 *      name="description"
 *      placeholder="Description"
 *      id="blog-description"
 *      onChange={event =>{}}
 *    />
 *    <Button>Save</Button>
 *  </Form>
 * )
 */
const TextArea = ({
  rows,
  text,
  id,
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
      as="textarea"
      rows={rows}
      placeholder={_.capitalize(
        _.replace(placeholder, new RegExp("_", "g"), " ")
      )}
      {...props}
    />
    {text && <RBForm.Text className="text-muted">{text}</RBForm.Text>}
  </RBForm.Group>
);

TextArea.defaultProps = {
  label: "",
  placeholder: "",
  className: "",
  text: "",
  rows: 3
};

TextArea.propTypes = {
  /**
   * Unoque id for textarea
   */
  id: PropTypes.string.isRequired,
  /**
   * Number of rows
   */
  rows: PropTypes.number,
  /**
   * Custom class name
   */
  className: PropTypes.string,
  /**
   * Textarea label
   */
  label: PropTypes.string,
  /**
   * Textarea placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Description
   */
  text: PropTypes.string
};

export default TextArea;
