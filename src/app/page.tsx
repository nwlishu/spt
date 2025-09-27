"use client";
import Category from "./(components)/Category";
import Delivery from "./(components)/Delivery";
import Hero from "./(components)/Hero";
import Question from "./(components)/Question";
import Quote from "./(components)/Quote";
import Service from "./(components)/Service";

const Navbar = () => {
  return (
    <>
      <div>
        <Hero />
        <Quote />
        <Category />
        {/* <ProductShowcase /> */}
        {/* <Process /> */}
        <Delivery />
        {/* <ExcellenceSection /> */}
        <Service />
        <Question />
      </div>
    </>
  );
};

export default Navbar;
