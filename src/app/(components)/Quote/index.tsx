"use client";
import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, description }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-6">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
          {label}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          {value}
        </h2>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

const Quote: React.FC = () => {
  const stats: StatCardProps[] = [
    {
      label: "ก่อตั้งเมื่อ",
      value: "2541",
      description:
        "เราได้ให้ความสำคัญในการปฏิบัติตามมาตรฐาน ISO และ GMP สำหรับทุกผลิตภัณฑ์ของเรา",
    },
    {
      label: "ลูกค้าที่พึงพอใจ",
      value: "200K+",
      description:
        "ลูกค้าของเราไว้วางใจในคุณภาพและบริการของเรา เรามีการกำหนดมาตรฐานที่เน้นย้ำในการสนับสนุนการเติบโตของธุรกิจของคุณ",
    },
    {
      label: "ให้บริการใน",
      value: "77 จังหวัด",
      description:
        "เราให้บริการครอบคลุมทั่วประเทศไทย พร้อมทีมงานมืออาชีพที่พร้อมให้บริการในทุกพื้นที่",
    },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-full">
        {/* Main Quote Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#21286E] mb-12 tracking-tight leading-tight">
            Delivering the right parts, with quality you can rely on.
          </h1>

          {/* Quote */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-gray-200 font-serif">
                &ldquo;
              </div>
              <div className="absolute -bottom-8 -right-4 text-6xl text-gray-200 font-serif">
                &rdquo;
              </div>

              <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-normal italic relative z-10 px-8">
                บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)
                ศูนย์รวมอะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มชัก ซิล คอนเดนเซอร์
                จำหน่ายทั้งค้าส่งและค้าปลีก
                ด้วยความมุ่งมั่นในการคัดสรรสินค้าคุณภาพและการบริการที่ตอบโจทย์ความต้องการของลูกค้าอย่างครบวงจร
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8 md:px-12 lg:px-16 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                label={stat.label}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
