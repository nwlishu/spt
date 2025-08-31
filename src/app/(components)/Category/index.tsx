"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CategoryCardProps {
  number: string;
  title: string;
  image?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Card Container with wave-like bottom */}
      <div className="bg-gray-200 rounded-xl h-48 md:h-56 lg:h-64 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
        {/* Image Container */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
            />
          ) : (
            <div className="text-gray-500 text-4xl opacity-50">🏔️</div>
          )}
        </div>

        {/* Wave-like bottom cutout */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 ">
          {/* Wave pattern for different cards */}
          <div className="relative h-full">
            {/* Content overlay on the wave area */}
            <div className="absolute bottom-4 left-4 text-white">
              {/* <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 drop-shadow-lg">
                {number}
              </h3> */}
              <div className="bg-yellow-500 p-2 rounded-full px-4 border-1 ">
                <p className="text-sm md:text-base lg:text-base font-medium drop-shadow-md text-[#21286E] ">
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  const categories: CategoryCardProps[] = [
    {
      number: "24+",
      title: "อะไหล่เครื่องตัดหญ้า",
      isFirst: true,
      image: "/category/1_อะไหล่เครื่องตัดหญ้า.webp",
    },
    {
      number: "200",
      title: "อะไหล่เครื่องพ่นยา",
      image: "/category/2_อะไหล่เครื่องพ่นยา.webp",
    },
    {
      number: "200",
      title: "อะไหล่ปั๊มน้ำ",
      image: "/category/3_อะไหล่ปั๊มชัก.webp",
    },
    {
      number: "200",
      title: "คอนเดนเซอร์",
      image: "/category/4_คอนเดนเซอร์.webp",
      isLast: true,
    },
    {
      number: "200",
      title: "ซีล",
      image: "/category/5_ซีล.webp",
      isLast: true,
    },
  ];

  return (
    <section className="bg-[#21286E] py-20 px-6">
      <div className="container mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide"
          >
            สินค้าตราแตร
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto leading-relaxed font-light"
          >
            สินค้าตราแตร (TRUMPET) ของเรา มีรายการสินค้าให้เลือกมากกว่า 3,000
            รายการ ตอบโจทย์ทุกความต้องการของคุณ
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              number={category.number}
              title={category.title}
              image={category.image}
              isFirst={index === 0}
              isLast={index === categories.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
