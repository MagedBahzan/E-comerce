import React from "react";
import "../Layout-styles.css";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [navData, setNavData] = React.useState(null);
  const [navBarItems, setNavBarItems] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => setNavData(data.products.map((ele) => ele.category)));
  }, []);

  React.useEffect(() => {
    let xItems = [];
    if (navData) {
      for (let i = 0; i <= navData.length; i++) {
        if (
          navData[i] !== navData[i + 1] &&
          xItems.includes(navData[i]) === false
        ) {
          xItems.push(navData[i]);
        }
      }
      setNavBarItems(xItems);
    }
  }, [navData]);

  const navBar = navBarItems
    ? navBarItems.map((ele, index) => {
        return (
          <div key={index} className="nav-itm-con">
            <NavLink to={ele}>{ele}</NavLink>
          </div>
        );
      })
    : null;

  return (
    <div className="header-section">
      <div className="top-header">
        <NavLink to="/" className="logo">
          <FontAwesomeIcon icon={faCartShopping} />
          <h1>SouqStore</h1>
        </NavLink>
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="wish-list">
          <NavLink>My Wishlist</NavLink>
          <div className="wish-list-icon">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="items-list-count">
              <p id="itemsCounter">{props.itemsCounter}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-bannr">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="todays-Offers">Today's Offers</NavLink>
          <NavLink to="Trending">Trending</NavLink>
          <NavLink to="best-sellers">Best Sellers</NavLink>
          <NavLink to="new-releases">New Releases</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </div>
        <div>
          <NavLink to="login">Login</NavLink>
          <NavLink to="sign-up">Sign Up</NavLink>
        </div>
      </div>
      <div className="nav-bar">{navBar}</div>
    </div>
  );
}

export default Header;
