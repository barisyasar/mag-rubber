import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const links = ["about us", "products", "download", "contact"];

export default function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-between align-items-center">
        <div>
          {" "}
          <Link to="/">
            <img src="/assets/images/navBrand.png" alt="" width="150" />
          </Link>
        </div>
        <div>links</div>
      </nav>
    </header>
  );
}
