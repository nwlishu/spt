"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-lg p-6 mb-4 cursor-pointer hover:bg-gray-100"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between" onClick={onToggle}>
        <h3 className="text-lg font-bold text-gray-900 pr-4">{question}</h3>
        <div className="flex-shrink-0">
          <motion.div
            className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center"
            whileHover={{ backgroundColor: "yellow" }}
            transition={{ duration: 0.2 }}
          >
            <motion.svg
              className="w-4 h-4 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-gray-200">
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Question: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    {
      question: "อะไหล่ตราแตรมีอะไรบ้าง?",
      answer:
        "เรามีอะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มน้ำ อะไหล่เครื่องเลื่อย ซีล และอื่นๆ อีกมากมาย",
    },
    {
      question: "ตราแตรมีเครื่องตัดหญ้าขายไหม?",
      answer:
        "เรามีเครื่องตัดหญ้า TRUMPET รุ่น TR411-2 จัดจำหน่าย เป็นเครื่องตัดหญ้ามาตรฐานญี่ปุ่น ของแท้ 100% รับประกัน 1 ปี (สามารถดูรายละเอียดเพิ่มเติมได้ที่หน้าสินค้า)",
    },
    {
      question: "บริษัท/ร้านตั้งอยู่ที่ไหน?",
      answer:
        "เรามีหน้าร้านให้บริการลูกค้าทุกท่าน บริษัท เอสพีที พาร์ท เทรดดิ้ง จำกัด ตั้งอยู่ เลขที่ 140 ถนนปากน้ำกระโจมทอง แขวงบางพรม เขตตลิ่งชัน กรุงเทพมหานคร 10170",
    },
    {
      question: "หากสินค้าเสียหายเปลี่ยน/คืนสินค้าได้ไหม?",
      answer:
        "หากสินค้าเสียหาย ลูกค้าสามารถแจ้งแอดมินเพื่อเปลี่ยน/คืนสินค้าได้ภายใน 7 วันหลังได้รับสินค้า *เงื่อนไขการคืนสินค้าเป็นไปตามที่บริษัทฯ กำหนด",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            คำถามที่พบบ่อย (FAQ)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            ดูคำถามทั่วไปที่เรามักจะได้รับบ่อย
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">ไม่พบคำตอบที่คุณต้องการ?</p>
          <Link href="/contact">
            <motion.button
              className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              ติดต่อเรา
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Question;
