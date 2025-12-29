import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../category/Category";
import Values from "../Values/Values";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
    </>
  );
}

export default Home;
