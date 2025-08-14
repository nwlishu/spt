"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection1: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('/herograss.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-blue-900/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-yellow-400/90 text-gray-900 rounded-full text-sm font-semibold mb-6 shadow-lg"
              >
                <span className="mr-2">🏭</span>
                Established 1994
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-2xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                บริษัท เอสพีที พาร์ท
                <br />
                เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)
                <br />
                <span className="text-lg lg:text-5xl">
                  SPT PART TRADING CO.,LTD.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-green-50 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                ผู้นำด้านอะไหล่การเกษตรครบวงจร ด้วยประสบการณ์มากกว่า 30 ปี
                รับประกันคุณภาพและบริการที่ดีที่สุด
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <span className="text-green-100 text-sm font-medium">
                    อะไหล่ครบครัน
                  </span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <span className="text-green-100 text-sm font-medium">
                    จัดส่งรวดเร็ว
                  </span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <span className="text-green-100 text-sm font-medium">
                    คุณภาพสูง
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="bg-[#21286E] hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  ดูสินค้าทั้งหมด
                </button>
                <button className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10">
                  ติดต่อเรา
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Image Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚜</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Agricultural Parts
                    </h3>
                    <p className="text-gray-600 text-sm">Complete Solutions</p>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">30+</div>
                    <div className="text-xs text-gray-700">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-xs text-green-100">
                      Happy Customers
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-green-400/20 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Bottom Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  95%
                </div>
                <div className="text-green-100 text-sm">
                  Customer Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  24/7
                </div>
                <div className="text-green-100 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  500+
                </div>
                <div className="text-green-100 text-sm">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  Fast
                </div>
                <div className="text-green-100 text-sm">Delivery Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
