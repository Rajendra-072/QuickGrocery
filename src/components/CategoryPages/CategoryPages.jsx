import React from "react";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

function CategoryPages({ title, bgImage, categories = [] }) {
  const filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter(item => categories.includes(item.category));

  const renderProducts = filteredItems.map(product => {
    return <Cards product={product} />;
  });
  return (
    <div className="mt-20">
      {/* Banner titel */}
      <div
        className="flex justify-center items-center h-[50vh] bg-cover  relative "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-zinc-800 text-3xl md:text-5xl p-5 font-bold bg-white rounded-xl z-10">
          {title}
        </h1>
        <div className="bg-black/20 absolute inset-0"></div>
      </div>
      {/* product by category wise */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 my-15 md:my-20 max-w-[1300px] mx-auto px-10">
        {renderProducts}
      </div>
    </div>
  );
}

export default CategoryPages;
