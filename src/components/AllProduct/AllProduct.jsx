import React from "react";
import CategoryPages from "../CategoryPages/CategoryPages";
import allProductImage from "../../assets/all-banner.jpg";

function AllProduct() {
  return (
    <>
      <CategoryPages
        title="All Products"
        bgImage={allProductImage}
        categories={["All"]}
      />
    </>
  );
}

export default AllProduct;
