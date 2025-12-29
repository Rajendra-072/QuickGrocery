import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import BasketImg from "../../assets/basket-full-vegetables.png";

function Values() {
  const leftValues = Value.slice(0, 2).map(item => {
    return (
      <div
        className="flex md:flex-row-reverse items-center gap-6"
        key={item.id}
      >
        <div>
          <span className="flex justify-center items-center bg-[var(--primary)] rounded-full p-6 text-white text-2xl">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-[var(--secondary)] font-bold md:text-3xl text-2xl">
            {item.titel}
          </h3>
          <p className="text-zinc-600">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = Value.slice(2).map(item => {
    return (
      <div className="flex flex-row items-center gap-6" key={item.id}>
        <div>
          <span className="flex justify-center items-center bg-[var(--primary)] rounded-full p-6 text-white text-2xl">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-[var(--secondary)] font-bold md:text-3xl text-2xl">
            {item.titel}
          </h3>
          <p className="text-zinc-600">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1300px]  mx-auto px-10">
      {/* Heading */}
      <div className=" py-20">
        <Heading highlight="Our" heading="Value" />
      </div>
      <div className="flex md:flex-row flex-col gap-8 mt-10">
        {/* left value */}
        <div className="flex  flex-col justify-between gap-10">
          {leftValues}
        </div>
        {/* image */}
        <div className="md:flex w-1/2 hidden ">
          <img src={BasketImg} alt="values image" />
        </div>
        {/* Right value */}
        <div className="flex flex-col justify-between gap-10">
          {rightValues}
        </div>
      </div>
    </section>
  );
}

export default Values;

const Value = [
  {
    id: 1,
    titel: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    titel: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    titel: "Food Safety",
    para: "Food Safety is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    titel: "100% Orgenic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
