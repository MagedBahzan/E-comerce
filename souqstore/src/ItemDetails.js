import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./HomePage-styles.css";

function ItemDetailes() {
  const parm = useParams();
  console.log(parm);
  const [theproducts, setTheproducts] = React.useState(null);
  const [counts, setCounts] = React.useState(25);

  React.useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => setTheproducts(data.products));
  }, []);

  function nextSlid() {
    setCounts((prev) => prev + 25);
    window.scrollTo({
      top: 0,
    });
  }
  function backSlid() {
    setCounts((prev) => prev - 25);
    window.scrollTo({
      top: 0,
    });
  }

  const itmsFltr = theproducts
    ? theproducts.filter((ele) => ele.category === parm.id)
    : null;
  console.log(itmsFltr);

  const itmsshow = theproducts ? (
    itmsFltr.map((ele) => {
      return (
        <NavLink key={ele.id} to={ele.id} className="item-container">
          <div className="product-image">
            <img src={ele.image} alt="Not Found" />
          </div>
          <h2>{ele.name}</h2>
          <div className="product-inf-prce">
            <p className="item-prce">${ele.price}</p>
            <p>{ele.category}</p>
          </div>
        </NavLink>
      );
    })
  ) : (
    <h1>...laoding</h1>
  );
  return (
    <div className="Products-container">
      <div className="all-Products">{itmsshow}</div>
      {theproducts && itmsFltr.length > 25 ? (
        <div className="navgation-btn">
          {theproducts && counts > 25 ? (
            <button onClick={backSlid}>Back</button>
          ) : null}
          {theproducts && theproducts.length === counts ? null : (
            <button onClick={nextSlid}>Next</button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default ItemDetailes;
