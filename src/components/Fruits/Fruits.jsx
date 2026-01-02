import React from "react";
import CategoryPages from "../CategoryPages/CategoryPages";
import bgFruits from "../../assets/fruits-banner.jpg";

function Fruits() {
  return (
    <>
      <CategoryPages
        title="Fruits & Veggies"
        bgImage={bgFruits}
        categories={["Fruits", "Vegetables"]}
      />
    </>
  );
}

export default Fruits;
