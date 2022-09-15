import React, { useRef } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const links = ["about us", "products", "download", "contact"].map((link) => (
    <Link className="btn-nav align-self-center" to="/">
      {link}
    </Link>
  ));

  const toggle = useRef();
  const onToggle = () => {
    const classList = toggle.current.classList;
    if (classList.contains("open")) classList.remove("open");
    else classList.add("open");
  };

  return (
    <header>
      <nav className="border-bottom d-flex justify-content-between align-items-center">
        <div>
          {" "}
          <Link to="/">
            <img src="/assets/images/navBrand.png" alt="" width="150" />
          </Link>
        </div>
        <div className="d-flex">
          {links}{" "}
          <div className="btn-nav-wrapper">
            <Link className="btn-nav" to="/">
              <img src="/assets/images/mag-store.png" alt="" width="100" />
            </Link>
          </div>
          <div className="wrapper-menu" ref={toggle} onClick={onToggle}>
            <div className="line-menu half start"></div>
            <div className="line-menu mid"></div>
            <div className="line-menu half end"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
