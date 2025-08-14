"use client";
import Category from "./(components)/Category";
// import ExcellenceSection from "./(components)/ExcellenceSection";
import Hero from "./(components)/Hero";
// import Hero1 from "./(components)/Hero1";
import Process from "./(components)/Process";
import ProductShowcase from "./(components)/ProductShowCase";
import Question from "./(components)/Question";
import Quote from "./(components)/Quote";
// import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div>
        <Hero />
        <Quote />
        <Category />
        <ProductShowcase />
        <Process />
        {/* <ExcellenceSection /> */}
        <Question />
      </div>
    </>
  );
};

export default Navbar;
