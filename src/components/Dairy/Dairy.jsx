import React from "react";
import CategoryPages from "../CategoryPages/CategoryPages";
import dairyImage from "../../assets/dairy-banner.jpg";

function Dairy() {
  return (
    <>
      <CategoryPages
        title="Dairy & Eggs"
        bgImage={dairyImage}
        categories={["Dairy"]}
      />
    </>
  );
}

export default Dairy;
