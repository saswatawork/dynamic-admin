import React from "react";
import { Button, ButtonType, Form, Input } from "components/atoms";
import PropTypes from "prop-types";
import "./Search.scss";

const Search = ({
  className,
  id,
  name,
  value,
  onChange,
  onSearch,
  ...props
}) => {
  return (
    <Form
      className={`search ${className}`}
      onSubmit={event => event.preventDefault()}
    >
      <Input
        className="search__input"
        id={`search-${id}`}
        value={value}
        placeholder={name}
        onChange={event => onChange(event.target.value)}
        {...props}
      />
      <Button type={ButtonType.SUBMIT} onClick={onSearch}>
        Go
      </Button>
    </Form>
  );
};

Search.defaultProps = {
  className: "",
  name: "Search",
  value: ""
};

Search.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
