"use client";
import React from "react";
import { Calendar, Users, Target, Award, Wrench, Check } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const AboutUs: React.FC = () => {
  const stats = [
    { icon: Calendar, value: "30+", label: "Years Experience" },
    { icon: Users, value: "700+", label: "Trusted Customers" },
    { icon: Wrench, value: "1000+", label: "Product Lines" },
    { icon: Target, value: "100%", label: "Customer Satisfaction" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const leftItem: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightItem: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const icon: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white my-24">
      {/* Hero Section */}
      <div className="bg-[#21286E]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 ">
          <div className="text-center mb-6 sm:mb-10">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffff]"
            >
              เกี่ยวกับบริษัท บริษัท เอสพีที พาร์ท เทรดดิ้ง จำกัด
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2 }}
              className="text-white text-lg mt-2 sm:mt-3 max-w-2xl mx-auto"
            >
              คู่ค้าที่คุณไว้วางใจ
              สำหรับอะไหล่และโซลูชันอุปกรณ์เกษตรครบวงจรมากว่า 30 ปี
            </motion.p>
          </div>
        </section>
      </div>

      {/* Company Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="flex flex-col items-center"
              >
                <stat.icon className="h-8 w-8 text-yellow-400/95 mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              เรื่องราวและความเป็นมา
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600"
            >
              จากจุดเริ่มต้นเล็กๆ
              สู่ผู้เชี่ยวชาญชิ้นส่วนเกษตรอันดับหนึ่งของประเทศไทย
            </motion.p>
          </div>

          {/* Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {/* Item 1 (left) */}
            <motion.div
              variants={leftItem}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <motion.div variants={iconVariants} className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400/95 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <Check className="w-8 h-8" />
                </div>
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Humble Beginnings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  ต.ทวีกิจ เป็นผู้นำเข้าและจัดจำหน่ายอะไหล่ทางการเกษตร อาทิ
                  อะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มน้ำ อะไหล่เครื่องเลื่อย ซีล
                  และอื่นๆ อีกมากมาย เรามีบริการจัดหาสินค้าให้ลูกค้าอย่างครบวงจร
                  จนลูกค้าขนานนามเราว่าเป็น “โดราเอมอนแห่งวงการอะไหล่การเกษตร”
                  สิ่งที่ผู้อื่นไม่มีเราจัดหาให้คุณลูกค้าได้เสมอ
                </p>
              </div>
            </motion.div>

            {/* Item 2 (right) */}
            <motion.div
              variants={rightItem}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <motion.div variants={iconVariants} className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400/95 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <Check className="w-8 h-8" />
                </div>
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Building Trust & Reputation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  มากกว่า 30 ปีที่ ต.ทวีกิจ ได้เติบโตมาจนถึงทุกวันนี้
                  เริ่มต้นจาก ชายคนหนึ่ง
                  ที่กัดฟันหาเลี้ยงครอบครัวจนสามารถเปิดกิจการเป็นของตัวเองได้
                  ด้วยประสบการณ์ที่ยาวนาน รวมกับความซื่อตรงและสุจริต
                  ซึ่งเป็นคติของร้าน จึงทำให้ทุกวันนี้ ต.ทวีกิจ
                  ได้รับความไว้วางใจจากลูกค้าทั่วประเทศกว่า 700 ราย
                  ทั้งในเรื่องคุณภาพสินค้าที่คัดสรรมาอย่างดี ราคาที่เหมาะสม
                  รวมถึงบริการด้วยความจริงใจและเป็นมิตร
                </p>
              </div>
            </motion.div>

            {/* Item 3 (left) */}
            <motion.div
              variants={leftItem}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <motion.div variants={iconVariants} className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400/95 rounded-full flex items-center justify-center text-white">
                  <Check className="w-8 h-8" />
                </div>
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  New Generation, Same Values
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  ณ ปัจจุบัน ร้าน ต.ทวีกิจ ของรุ่นพ่อแม่ ได้ทำการจัดตั้งเป็น
                  “บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด” ในรุ่นลูก
                  โดยได้รับการถ่ายทอดความรู้อย่างมีประสิทธิภาพ
                  เพื่อเข้ามาช่วยกันบริหารกิจการให้เติบโตต่อไป เราสัญญาจะยืนหยัด
                  ยึดมั่น
                  ในการเป็นผู้นำด้านอะไหล่การเกษตรเพื่อให้ลูกค้าทุกท่านได้สินค้าคุณภาพ
                  รวมไปถึงบริการที่ น่าประทับใจต่อไปในอนาคต
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              These principles have guided us for over 30 years and continue to
              shape everything we do today.
            </motion.p>
          </div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={card} className="text-center p-6">
              <motion.div
                variants={icon}
                className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Award className="h-6 w-6 text-yellow-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ซื่อสัตย์และมีจรรยาบรรณ
              </h3>
              <p className="text-gray-600">
                รากฐานของเราสร้างขึ้นบนความซื่อสัตย์และมีจรรยาบรรณ –
                คติประจำใจที่ทำให้เราได้รับความไว้วางใจจากลูกค้ามากกว่า 700
                รายทั่วประเทศ
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={card} className="text-center p-6">
              <motion.div
                variants={icon}
                className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Target className="h-6 w-6 text-yellow-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                การรับประกันคุณภาพ
              </h3>
              <p className="text-gray-600">
                เราคัดสรรและเลือกสินค้าที่มีคุณภาพสูงในราคาที่เหมาะสม
                เพื่อให้ลูกค้าทุกท่านได้รับความคุ้มค่าสูงสุดจากการลงทุน
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={card} className="text-center p-6">
              <motion.div
                variants={icon}
                className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Users className="h-6 w-6 text-yellow-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                บริการจริงใจ
              </h3>
              <p className="text-gray-600">
                วิธีการให้บริการที่เป็นมิตรและจริงใจของเราช่วยสร้างความสัมพันธ์ที่ยั่งยืน
                โดยตั้งอยู่บนพื้นฐานของความไว้วางใจ ความเข้าใจ
                และความใส่ใจอย่างแท้จริงต่อความสำเร็จของลูกค้า
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Your Agricultural Parts Solution
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Join over 700 satisfied customers who trust us as their
            &quot;Doraemon of Agricultural Parts.&quot; Let us help you find
            exactly what you need.
          </motion.p>

          {/* Button */}
          <Link href="/contact" >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="cursor-pointer bg-yellow-400/95 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg transition duration-200"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
