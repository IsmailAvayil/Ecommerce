import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-header">
      <div>
        <Link to={`/categories`}>
          <button>categoty List</button>
        </Link>
      </div>
      <div>
        <Link to={`/users`}>
          <button>Users List</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
