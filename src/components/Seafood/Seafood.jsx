import React from "react";
import CategoryPages from "../CategoryPages/CategoryPages";
import seaFoodImage from "../../assets/seafood-banner.jpg";

function Seafood() {
  return (
    <>
      <CategoryPages
        title="Meat & SeaFood"
        bgImage={seaFoodImage}
        categories={["Meat", "SeaFood"]}
      />
    </>
  );
}

export default Seafood;
