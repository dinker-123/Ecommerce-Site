import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/1-removebg-preview.png";
import Style from "./navbar.module.css";
import { useValue } from "../../itemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleSearch } = useValue();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <div className={Style.logo}>
          <img src={Logo} alt="Bazar Apna Logo" /> BAZAR
        </div>
        <div className={Style.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`${Style.menu} ${isMenuOpen ? Style.open : ""}`}>
          <li>
            <Link to="/" className={Style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className={Style.link}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className={Style.link}>
              About
            </Link>
          </li>
          <li>
            <div className={Style.search}>
              <input
                placeholder="Search"
                className={Style.input}
                onChange={handleSearch}
              />
              <button type="button" className={Style.button}>
                Search
              </button>
            </div>
          </li>
        </ul>
        <div className={Style.cta}>
          <form className={Style.search}>
            <Link to="/CardModal" className={Style.button}>
              <span className={Style.shopping}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </Link>
            <Link to="/Login" className={Style.button}>
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
