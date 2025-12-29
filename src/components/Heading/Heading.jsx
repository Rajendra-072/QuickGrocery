import React from "react";

function Heading(props) {
  return (
    <div className=" w-fit mx-auto">
      <h2 className="md:text-4xl text-[2rem] font-bold">
        <span className="text-[var(--primary)]">{props.highlight}</span>{" "}
        {props.heading}
      </h2>
      <div className="w-30 bg-[var(--accent)] md:mt-4 mt-2 ml-auto h-1"></div>
    </div>
  );
}

export default Heading;
