import { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isactive, setIsActive] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const fixHeader = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixHeader);
    return () => window.removeEventListener("scroll", fixHeader);
  });

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <header className={`header ${isactive ? "active" : null}`}>
        <div className="container">
          <h4 className="header__logo">
            Dev 2 <span className="header__logo__orange">Money</span>
          </h4>
          <div className={`header__right ${showNav && "show"}`}>
            <ul className="header__links">
              <Link href="/" className="header__link">
                <a className="link" onClick={closeNav}>
                  Home
                </a>
              </Link>
              <Link href="/blog" className="header__link">
                <a className="link" onClick={closeNav}>
                  Blog
                </a>
              </Link>
              <Link href="/products" className="header__link">
                <a className="link" onClick={closeNav}>
                  Products
                </a>
              </Link>
            </ul>
            <ul className="header__socialLinks">
              <li className="header__socialLink">
                <Link href="https://facebook.com">
                  <a target="_blank">
                    <FaFacebookSquare />
                  </a>
                </Link>
              </li>
              <li className="header__socialLink">
                <Link href="/">
                  <a target="_blank">
                    <FaInstagram />
                  </a>
                </Link>
              </li>
              <li className="header__socialLink">
                <Link href="/">
                  <a target="_blank">
                    <FaTwitterSquare />
                  </a>
                </Link>
              </li>
              <li className="header__socialLink">
                <Link href="/">
                  <a target="_blank">
                    <FaLinkedin />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`header__bars ${showNav && "show"} `}
            onClick={() => setShowNav(!showNav)}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        <div className={`overlay ${showNav && "show"}`} />
      </header>
    </>
  );
};

export default Header;
