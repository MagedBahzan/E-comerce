import React from "react";
import "../HomePage-styles.css";

function ProductsContainer() {
  const [theproducts, setTheproducts] = React.useState(null);
  const [counts, setCounts] = React.useState(50);
  React.useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) =>
        setTheproducts(data.products.filter((ele) => ele.id <= counts))
      );
  }, [counts]);

  function nextSlid() {
    setCounts((prev) => prev + 10);
  }

  const displayData = theproducts ? (
    theproducts.map((ele) => {
      return (
        <div key={ele.id} className="item-container">
          <div className="product-image">
            <img src={ele.image} alt="Not Found" />
          </div>
          <h2>{ele.name}</h2>
          <div className="product-inf-prce">
            <p className="item-prce">${ele.price}</p>
            <p>{ele.category}</p>
          </div>
        </div>
      );
    })
  ) : (
    <h1>...laoding</h1>
  );
  return (
    <div className="Products-container">
      <div className="all-Products">{displayData}</div>
      <div>
        <button onClick={nextSlid}>show more</button>
      </div>
    </div>
  );
}

export default ProductsContainer;
