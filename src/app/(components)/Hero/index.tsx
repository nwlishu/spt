"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mt-21 mx-4 md:mx-18 overflow-hidden">
      <motion.div
        className="absolute rounded-xl inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://sptpart-bucket.s3.ap-southeast-1.amazonaws.com/image/home/herograss.png')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-0 bg-black/75 rounded-2xl"
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
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              บริษัท เอสพีที พาร์ท
              <br />
              เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)
              <br />
              <span className="text-4xl lg:text-5xl">
                SPT PART TRADING CO.,LTD.
              </span>
            </motion.h1>

            <hr className="border-gray-300 mb-8" />

            {/* Performance Section */}
            {/* <div className="mb-8">
              <h2 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-6">
                Our Performance
              </h2>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 lg:text-lg">
                    Customer Satisfaction
                  </span>
                  <span className="text-indigo-900 font-semibold lg:text-lg">
                    95%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-900 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 lg:text-lg">
                    Quality rating
                  </span>
                  <span className="text-yellow-500 font-semibold lg:text-lg">
                    82%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 lg:text-lg">
                    Service Excellence
                  </span>
                  <span className="text-yellow-500 font-semibold lg:text-lg">
                    88%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>
            </div> */}
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
            >
              <button className="bg-[#21286E] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-1 border-white">
                ดูสินค้าทั้งหมด
              </button>
              <button className="border-1 border-[#ffff] hover:border-white/60 text-[#ffff] font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10">
                ติดต่อเรา
              </button>
            </motion.div>

            {/* <div className="flex items-center justify-end gap-8 mt-4">
              <div>
                <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-1">
                  DISCOVER
                </h3>
                <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-1">
                  FOR OUR
                </h3>
                <h3 className="text-xl lg:text-3xl font-bold text-gray-900">
                  MACHINES
                </h3>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full p-3 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 14l5-5 5 5H7z" transform="rotate(45 12 12)" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
