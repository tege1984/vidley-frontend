import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
const Table = props => {
  const { data, columns, sortColumn, onSort } = props;
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
