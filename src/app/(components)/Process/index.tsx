"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex items-start space-x-4">
        {/* Step Number */}
        <div className="flex-shrink-0">
          <span className="text-base font-medium text-gray-900">
            ({number})
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
            {title}
          </h3>
          <p className="leading-relaxed text-sm md:text-base text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const processSteps: ProcessStepProps[] = [
    {
      number: "01",
      title: "การจัดส่งที่รวดเร็ว",
      description:
        "เรามุ่งมั่นในการเพิ่มประสิทธิภาพเพื่อให้แน่ใจว่าผลิตภัณฑ์ของคุณจะถูกจัดส่งโดยไม่ล่าช้า",
    },
    {
      number: "02",
      title: "การจัดส่งที่น่าเชื่อถือ",
      description:
        "ไว้วางใจทีมงานของเราในการจัดส่งคำสั่งซื้อของคุณ อย่างตรงเวลาและถูกต้องทุกครั้ง",
    },
    {
      number: "03",
      title: "ความพึงพอใจของลูกค้า",
      description: "ความพึงพอใจของคุณคือสิ่งที่เราคำนึงถึงเป็นอันดับแรก",
    },
    {
      number: "04",
      title: "สั่งซื้อเลย",
      description:
        "สัมผัสประสบการณ์บริการจัดส่งที่รวดเร็วของเรา โดยสั่งซื้อวันนี้",
    },
  ];

  return (
    <section className="bg-white pt-20 px-6">
      <div className="relative container mx-auto px-6 flex items-center">
        <div className="w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              การจัดส่งและการขนส่ง
            </motion.h1>
          </div>

          {/* Process Steps */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="space-y-0"
            >
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </motion.div>
          </div>

          {/* Shipping Partners */}
          <div className="max-w-7xl mx-auto mt-16">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
              >
                พาร์ทเนอร์ขนส่งของเรา
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-gray-600 text-sm md:text-base"
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
        </div>
      </div>
    </section>
  );
};

export default Process;
