"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Move constants outside component to prevent recreation
const HERO_IMAGES = ["/hero1.webp", "/hero5.webp", "/hero6.webp"] as const;
const AUTO_SLIDE_INTERVAL = 5000;
const SLIDE_TRANSITION_DURATION = 0.7;

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);

  const heroImagesLength = useMemo(() => HERO_IMAGES.length, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImagesLength);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImagesLength]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImagesLength);
    setIsAutoPlaying(false);
  }, [heroImagesLength]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImagesLength) % heroImagesLength
    );
    setIsAutoPlaying(false);
  }, [heroImagesLength]);

  const goToSlide = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <section className="relative mt-28 mx-4 md:mx-18 overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: SLIDE_TRANSITION_DURATION, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {!imageLoadError ? (
              <Image
                src={HERO_IMAGES[currentImageIndex]}
                alt={`Hero Background ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority={currentImageIndex === 0}
                onError={() => setImageLoadError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Failed to load image</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10
                   bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 md:p-3
                   transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous image"
        type="button"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10
                   bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 md:p-3
                   transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next image"
        type="button"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentImageIndex ? "true" : "false"}
            type="button"
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
          <div className="p-8">
            {/* Content removed - add back if needed */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
