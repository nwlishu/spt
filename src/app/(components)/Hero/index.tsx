"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mt-21 mx-4 md:mx-18 overflow-hidden">
      <motion.div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay for text readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-0 bg-black/75"
        />
      </motion.div>
      <motion.div
        className="relative container mx-auto px-2 md:px-6 flex items-center h-[calc(100vh-96px)] mt-16 mb-16 lg:mt-0 lg:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="w-full md:max-full lg:max-w-3/4">
          {/* Main Content Card */}
          <div className=" p-8">
            {/* Company Name */}
            <motion.h1
              className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              บริษัท เอสพีที พาร์ท
              <br />
              เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)
              <br />
              <span className="text-3xl lg:text-5xl">
                SPT PART TRADING CO.,LTD.
              </span>
            </motion.h1>

            <hr className="border-gray-300 mb-8" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <p className=" text-xl text-white lg:text-2xl">
                ศูนย์รวมอะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มชัก ซิล คอนเดนเซอร์
                ค้าส่ง-ค้าปลีก แบบครบวงจร ด้วยประสบการณ์มากกว่า 30 ปี
                เราสัญญาจะยืนหยัด
                ในการเป็นผู้นำด้านอะไหล่การเกษตรเพื่อให้ลูกค้าทุกท่าน
                ได้รับสินค้าที่มีคุณภาพ และบริการที่ดีที่สุด
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8"
            >
              <Link href="/products" className="w-full sm:w-auto">
                <button
                  className="cursor-pointer w-full sm:w-auto bg-[#21286E] text-white font-bold 
      py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base lg:text-lg 
      rounded-full shadow-lg transition-all duration-300 transform 
      hover:scale-105 hover:shadow-xl border border-white"
                >
                  ดูสินค้าทั้งหมด
                </button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <button
                  className="cursor-pointer w-full sm:w-auto border border-white/80 text-white font-semibold 
      py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base lg:text-lg 
      rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  ติดต่อเรา
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
