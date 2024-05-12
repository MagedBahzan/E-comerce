import React from "react";
import ItemsFiltre from "./componants/ItemsFiltre";
import ProductsContainer from "./componants/ProductsContainer";
import "./HomePage-styles.css"

function HomePage() {

  return (
    <div className="home-page">
      <ProductsContainer />
      <ItemsFiltre />
    </div>
  );
}

export default HomePage;
