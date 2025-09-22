"use client";
import Category from "./(components)/Category";
import Delivery from "./(components)/Delivery";
// import ExcellenceSection from "./(components)/ExcellenceSection";
import Hero from "./(components)/Hero";
// import Hero1 from "./(components)/Hero1";
// import Process from "./(components)/Process";
// import ProductShowcase from "./(components)/ProductShowCase";
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
