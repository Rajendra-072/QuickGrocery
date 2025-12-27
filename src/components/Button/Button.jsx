import React from "react";

function Button(props) {
  return (
    <button className="bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] px-6 py-2 rounded-lg text-white md:text-lg text-md font-bold hover:scale-105 hover:transform transition-all duration-200 ease-in-out hover:to-orange-600 cursor-pointer">
      {props.content}
    </button>
  );
}

export default Button;
