import React from "react";
import Button from "../Button/Button";
import FreshFruit from "../../assets/fresh-fruits.png";

function Discount() {
  return (
    <section
      className="max-w-[1300px] max-h-screen mx-auto bg-zinc-100 my-20 bg-contain  bg-center bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${FreshFruit})` }}
    >
      <div className="flex md:flex-row flex-col max-w-[1300px] max-h-screen mx-auto p-10 md:bg-transparent bg-zinc-100  flex  ">
        <span className="md:text-9xl text-6xl text-[var(--primary)] font-bold md:transform md:-rotate-90 h-fit md:self-center ">
          20%
        </span>
        <div className="w-[600px]">
          <h3 className="text-zinc-800 md:text-6xl text-4xl font-bold">
            First Order Discount
          </h3>
          <p className="text-zinc-600 my-5">
            Enjoy an exclusive first order discount on our grocery website!
            Shopfresh essentials and save big on your first purchase. Fast
            deliveryand quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
}

export default Discount;
