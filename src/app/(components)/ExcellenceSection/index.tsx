"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const StatCard = ({
  number,
  description,
}: {
  number: string;
  description: string;
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-5xl font-bold text-[#21286E] mb-2">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ExcellenceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white lg:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#21286E] mb-6">
              บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)
            </h2>
            <div className="lg:hidden flex justify-center mb-8">
              <Image
                src="/pexels-fabriciohollanda-27670224.jpg"
                alt=""
                width={300} // Set a fixed width
                height={200} // Set a fixed height
                className="w-full h-60 rounded-tl-2xl rounded-br-2xl object-cover shadow-xl"
              />
            </div>
            <p className="text-gray-600 mb-8">
              ด้วยประสบการณ์มากกว่า 30 ปี
              <br />
              เราสัญญาจะยืนหยัด
              ในการเป็นผู้นำด้านอะไหล่การเกษตรเพื่อให้ลูกค้าทุกท่าน
              ได้รับสินค้าที่มีคุณภาพ และบริการที่ดีที่สุด
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <StatCard
                number="95%"
                description="อัตราความพึงพอใจของลูกค้าจากการสำรวจล่าสุด"
              />
              <StatCard
                number="48h"
                description="ระยะเวลาจัดส่งเฉลี่ยสำหรับผลิตภัณฑ์ของเรา"
              />
            </div>

            <Link
              href="/contact"
              className="inline-block bg-[#21286E] text-white hover:bg-[#21286E] px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200"
            >
              ติดต่อเรา
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:h-[500px]"
          >
            <Image
              src="/pexels-fabriciohollanda-27670224.jpg"
              alt="Excellence in Quality"
              fill
              className="hidden lg:block object-cover rounded-tl-2xl rounded-br-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
