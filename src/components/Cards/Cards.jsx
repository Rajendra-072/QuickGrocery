import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

function Cards({ product }) {
  return (
    <div className="bg-zinc-100 shadow-lg p-5 ">
      {/* Card Icons */}
      <div className="flex justify-between">
        <span className="text-2xl text-zinc-300">
          <FaHeart />
        </span>
        <button className="text-white bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] px-4 py-3 rounded-lg ">
          <FaPlus />
        </button>
      </div>
      {/* Card image */}
      <div className="w-full h-50 ">
        <img
          src={product.image}
          className="w-full h-full object-contain mx-auto"
        />
      </div>
      {/* Card contant */}
      <div className=" text-center">
        <h3 className="text-2xl">{product.name}</h3>
        <p className="text-xl font-bold mt-3 mb-2">
          ${product.price.toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
}

export default Cards;
