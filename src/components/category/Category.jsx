import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";

function Category() {
  const rendercard = category.map(card => {
    return (
      // Card
      <div
        className="flex-1 rounded-lg basis-[300px] mt-4 shadow-lg"
        key={card.id}
      >
        {/* card image */}
        <div className="w-full min-h-[30vh] relative -mb-8">
          <img src={card.image} className="absolute bottom-0" />
        </div>
        {/* card content */}
        <div className="bg-zinc-100 pt-10 p-9">
          <h3 className="md:text-3xl text-2xl font-bold text-[var(--secondary)]">
            {card.titel}
          </h3>
          <p className="text-zinc-600 pt-4 pb-10">{card.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });

  return (
    <div className="mt-20 max-w-[1300px]  mx-auto  px-10 ">
      <div>
        <Heading highlight={"Shop"} heading={"By Category"} />
      </div>
      {/* category Cards */}
      <div className="flex flex-wrap gap-x-10 md:mt-15 mt-3  ">
        {rendercard}
      </div>
    </div>
  );
}

export default Category;

const category = [
  {
    id: 1,
    titel: " Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    titel: " Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    titel: " Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
];
