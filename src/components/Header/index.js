import React, { useRef, useEffect } from "react";
import "../../assets/css/components/Headers/header.css";
import { Link } from "react-router-dom";
import "../../assets/css/components/Headers/components/NavToggler/navToggler.css";
import triangle from "../../assets/images/triangles.svg";
import trianglesReverse from "../../assets/images/trianglesReverse.svg";
import { menuScroll } from "../../utils/scroll";

export default function Header() {
  const toggle = useRef();
  const navLightbox = useRef();
  const navMenu = useRef();
  const toggleContent = useRef();

  const onToggle = () => {
    const classList = toggle.current.classList;
    const lightbox = navLightbox.current.classList;
    const nav = navMenu.current.classList;
    const toggleContentCl = toggleContent.current.classList;

    if (classList.contains("open")) {
      navLightbox.current.style.backgroundImage = `url(${trianglesReverse})`;
      setTimeout(() => {
        classList.remove("open");
        lightbox.remove("active");
        nav.remove("active");
        toggleContentCl.remove("active");
      }, 100);
    } else {
      navLightbox.current.style.backgroundImage = `url(${triangle})`;
      classList.add("open");
      lightbox.add("active");
      nav.add("active");
      toggleContentCl.add("active");
    }
  };

  const links = ["about us", "products", "download", "contact"].map((link) => (
    <Link className="btn-nav align-self-center" to="/">
      {link}
    </Link>
  ));

  return (
    <header>
      <nav
        id="navbar"
        className="container-fluid border-bottom d-flex justify-content-between align-items-center"
        ref={navMenu}
      >
        <div>
          <Link to="/" className="main-logo">
            <img src="/assets/images/navBrand.png" alt="" width="100" />
          </Link>
        </div>
        <div className="d-flex">
          {links}
          <div className="btn-nav-wrapper">
            <Link className="btn-nav" to="/">
              <img src="/assets/images/mag-store.png" alt="" width="75" />
            </Link>
          </div>
          <div className="wrapper-menu " ref={toggle} onClick={onToggle}>
            <div className="line-menu half start"></div>
            <div className="line-menu mid"></div>
            <div className="line-menu half end"></div>
          </div>
        </div>
      </nav>

      <div className="nav-toggler" ref={toggleContent}>
        <div className="container">
          <div className="row mx-5">
            <div className="col-4 px-5">
              <p className="page-title">PRODUCTS</p>
              <ul>
                <li>
                  <a href="x">valves</a>
                </li>
                <li>
                  <a href="x">vibration-couplings</a>
                </li>
                <li>
                  <a href="x">couplings</a>
                </li>
                <li>
                  <a href="x">stators</a>
                </li>
                <li>
                  <a href="x">pumps</a>
                </li>
                <li>
                  <a href="x">engine gaskets</a>
                </li>
                <li>
                  <a href="x">mounts</a>
                </li>
                <li>
                  <a href="x">operator cables</a>
                </li>
                <li>
                  <a href="x">electrical harness sets</a>
                </li>
                <li>
                  <a href="x">viscous Mounts - Cushions</a>
                </li>
                <li>
                  <a href="x">pads</a>
                </li>
                <li>
                  <a href="x">dampers</a>
                </li>
                <li>
                  <a href="x">kits</a>
                </li>
                <li>
                  <a href="x">pin seals</a>
                </li>
                <li>
                  <a href="x">seals</a>
                </li>
                <li>
                  <a href="x">nıtır graders inserts</a>
                </li>
                <li>
                  <a href="x">spherical Roller Bearings</a>
                </li>
                <li>
                  <a href="x">pre-cleaner group assemblies</a>
                </li>
                <li>
                  <a href="x">fuel caps</a>
                </li>
              </ul>
            </div>
            <div className="col-4 px-5">
              <br />
              <br />
              <br />
              <ul>
                <li>
                  <a href="x">pulleys</a>
                </li>
                <li>
                  <a href="x">fans</a>
                </li>
                <li>
                  <a href="x">operator seats</a>
                </li>
                <li>
                  <a href="x">bushings</a>
                </li>
                <li>
                  <a href="x">suspension rubber springs</a>
                </li>
              </ul>

              <p className="page-title">PRODUCTS</p>
              <p className="page-title">download</p>
              <p className="page-title">info</p>

              <ul>
                <li>
                  <a href="x">Work with us</a>
                </li>
                <li>
                  <a href="x">privacy policy</a>
                </li>
                <li>
                  <a href="x">personal data retention policy</a>
                </li>
                <li>
                  <a href="x">customers Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-4 px-5">
              <p className="page-title">the group</p>
              <ul>
                <li>
                  <a href="x">gökçek group</a>
                </li>
                <li>
                  <a href="x">privacy policy</a>
                </li>
                <li>
                  <a href="x">mag manifacturing &amp; parts</a>
                </li>
                <li>
                  <a href="x">mag electronics</a>
                </li>
              </ul>
              <p className="page-title">contact</p>
              <p className="page-title">social</p>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/assets/images/facebook.png"
                  alt="facebook"
                  width="45"
                />
                <img
                  src="/assets/images/instagram.png"
                  alt="instagram"
                  width="45"
                />
                <img
                  src="/assets/images/linkedin.png"
                  alt="linkedin"
                  width="45"
                />
              </div>
              <br />

              <div className="d-flex justify-content-center align-items-center languages mt-4">
                <span>EN</span>
                <span>TR</span>
                <span>RU</span>
              </div>

              <div className="text-center mt-5">
                <img
                  src="/assets/images/mag-store-white.png"
                  alt="mag-store-white"
                  width="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-transition" ref={navLightbox}>
        <div class="layer"></div>
      </div>
    </header>
  );
}
