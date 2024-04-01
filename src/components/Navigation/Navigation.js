import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-header">
      <div className="header-logo">
        <a>TABETAI</a>
      </div>
      <div className="navigation-buttons">
        <Link to={`/categories`}>
          <button>Categories List</button>
        </Link>
        <Link to={`/users`}>
          <button>Users List</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
