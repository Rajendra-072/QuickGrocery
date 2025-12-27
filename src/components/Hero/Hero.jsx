import React from "react";
import grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className=" max-w-[1300px] max-h-screen mx-auto px-10  md:flex items-center md:mt-22 mt-30">
      {/* hero content */}
      <div className="flex-1 ">
        <span className="bg-orange-100 text-[var(--primary)] md:text-lg text-md px-5 py-2 rounded-full ">
          Export Best Quality
        </span>
        <h1 className=" md:text-6xl/18 text-4xl/10 font-bold mt-3">
          {" "}
          Tasty Organic <br />
          <span className="text-[var(--primary)]">Fruits</span> &{" "}
          <span className="text-[var(--primary)]">Veggies</span>
          <br /> In Your City
        </h1>
        <p className="text-zinc-600 md:text-lg text-md  mt-4 mb-10 max-w-[500px]">
          Bred for a high content of beneficial substances. Our products are all
          fresh and healthy.
        </p>
        <Button content="Shop Now" />
      </div>
      {/* hero img */}
      <div className="flex-1 md:mt mt-6 ">
        <img src={grocery} alt="Hero image" />
      </div>
    </section>
  );
}

export default Hero;
