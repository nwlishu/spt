"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Delivery: React.FC = () => {
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
            พาร์ทเนอร์ขนส่งของเรา
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto leading-relaxed font-light"
          >
            Flash Express / SPX Express / KEX Express และขนส่งประจำภาค
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {/* Flash Express */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="w-28 h-16 relative">
              <Image
                src="/flash.png"
                alt="Flash Express"
                fill
                className="object-contain"
              />
            </div>
            <span className="mt-3 text-sm text-gray-700 font-medium">
              Flash Express
            </span>
          </div>

          {/* SPX Express */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="w-28 h-16 relative">
              <Image
                src="/spx.png"
                alt="SPX Express"
                fill
                className="object-contain"
              />
            </div>
            <span className="mt-3 text-sm text-gray-700 font-medium">
              SPX Express
            </span>
          </div>

          {/* KEX Express */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="w-28 h-16 relative">
              <Image
                src="/kex_1.png"
                alt="KEX Express"
                fill
                className="object-contain"
              />
            </div>
            <span className="mt-3 text-sm text-gray-700 font-medium">
              KEX Express
            </span>
          </div>

          {/* Regional Transport */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="w-28 h-16 relative">
              <Image
                src="/delivery.svg"
                alt="KEX Express"
                fill
                className="object-contain"
              />
            </div>
            <span className="mt-3 text-sm text-gray-700 font-medium">
              ขนส่งประจำภาค
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Delivery;
