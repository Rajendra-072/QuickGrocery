import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");
  const filterItems =
    activeTab == "All"
      ? ProductList
      : ProductList.filter(item => item.category === activeTab);
  const renderCard = filterItems.slice(0, 8).map(product => {
    return <Cards key={product.id} product={product} />;
  });

  return (
    <section className=" max-w-[1300px]  mx-auto px-10 ">
      <div className="pt-25 pb-7">
        <Heading highlight="Our" heading="Products" />
        {/* category */}
        <div className="flex flex-wrap justify-center  my-10 ">
          {categories.map(tab => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg text-[var(--secondary)] my-2 mx-4  px-3 py-1 rounded-lg outline-none cursor-pointer ${
                  activeTab === tab
                    ? " bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] text-white"
                    : "bg-zinc-100 "
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {/* card listing */}
      <div
        className="grid
      md:grid-cols-4 grid-cols-1 gap-9"
      >
        {renderCard}
      </div>
      <div className="mt-15 mx-auto w-fit">
        <Link to="AllProduct">
          <Button content="View All" />
        </Link>
      </div>
    </section>
  );
}

export default Products;
