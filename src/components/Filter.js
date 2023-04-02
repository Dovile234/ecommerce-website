import React from "react";
import { NavLink } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filter-wrap">
      <div className="filter">
        <ul className="filter-list">
          <li className="filter-item">
            <NavLink to="/shop/all">All</NavLink>
          </li>
          <li className="filter-item">
            <NavLink to="/shop/tables">Tables</NavLink>
          </li>
          <li className="filter-item">
            <NavLink to="/shop/chairs">Chairs</NavLink>
          </li>
          <li className="filter-item">
            <NavLink to="/shop/sofas">Sofas</NavLink>
          </li>
          <li className="filter-item">
            <NavLink to="/shop/lighting">Lighting</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
