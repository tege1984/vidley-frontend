import React from "react";
import PropTypes from "prop-types";

const ListGroup = props => {
  const { currentFilter, items, onFilterChange } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item._id}
          style={{ cursor: "pointer" }}
          onClick={() => onFilterChange(item.name)}
          className={
            item.name === currentFilter
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  currentFilter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired
};

export default ListGroup;
