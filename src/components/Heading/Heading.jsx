import React from "react";

function Heading() {
  return (
    <div className=" w-fit mx-auto">
      <h2 className="md:text-4xl text-[2rem] font-bold">
        <span className="text-[var(--primary)]">Shop</span> By Category
      </h2>
      <div className="w-30 bg-[var(--accent)] md:mt-4 mt-2 ml-auto h-1"></div>
    </div>
  );
}

export default Heading;
