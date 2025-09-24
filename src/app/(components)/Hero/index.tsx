"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const heroImages = [
    "/hero1.webp",
    "/hero5.webp", 
    "/hero6.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative mt-28 mx-4 md:mx-18 overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0 z-0  overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt={`Hero Background ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
   
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 
                   transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 
                   transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        className="relative container mx-auto px-2 md:px-6 flex items-center h-[calc(50vh-96px)] md:h-[calc(100vh-96px)] mt-16 mb-16 lg:mt-0 lg:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="w-full md:max-full lg:max-w-3/4">
          {/* Main Content Card */}
          <div className="p-8">
            {/* Company Name */}
            {/* <motion.h1
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

            <hr className="border-gray-300 mb-8" /> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <p className="text-xl text-white lg:text-2xl">
                ศูนย์รวมอะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มชัก ซิล คอนเดนเซอร์
                ค้าส่ง-ค้าปลีก แบบครบวงจร ด้วยประสบการณ์มากกว่า 30 ปี
                เราสัญญาจะยืนหยัด
                ในการเป็นผู้นำด้านอะไหล่การเกษตรเพื่อให้ลูกค้าทุกท่าน
                ได้รับสินค้าที่มีคุณภาพ และบริการที่ดีที่สุด
              </p>
            </motion.div> */}

            {/* CTA Button */}
            {/* <motion.div
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
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
