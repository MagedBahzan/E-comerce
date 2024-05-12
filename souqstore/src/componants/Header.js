import React from "react";
import "../Layout-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [navBarItems, setNavBarItems] = React.useState(null);
  const [navBarItems2, setNavBarItems2] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => setNavBarItems(data.products.map((ele) => ele.category)));
  }, []);

  function filterdItems() {
    let xItems = [];
    if (navBarItems) {
      for (let i = 0; i <= navBarItems.length; i++) {
        if (
          navBarItems[i] !== navBarItems[i + 1] &&
          xItems.includes(navBarItems[i]) === false
        ) {
          xItems.push(navBarItems[i]);
        }
      }
      console.log(xItems);
      // setNavBarItems2(xItems);
    }
  }
  filterdItems();

  console.log(navBarItems ? navBarItems2 : null);

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
      {/* <div className="nav-bar">{navBarCat}</div> */}
    </div>
  );
}

export default Header;
