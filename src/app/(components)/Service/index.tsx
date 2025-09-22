import React from "react";
import { RotateCcw, Shield, Truck } from "lucide-react";
import { motion } from "framer-motion";

const ServiceGuaranteeSection: React.FC = () => {
  return (
    <section className="bg-yellow-500 py-48 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
          >
            การบริการลูกค้า
          </motion.h2>
        </div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Exchange/Return Policy */}
          <motion.div className="flex flex-col items-center text-center border border-yellow-600 p-16 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <RotateCcw className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              รับเปลี่ยน-คืนสินค้า
            </h3>
            <p className="text-gray-600 text-lg">ภายใน 7 วัน</p>
          </motion.div>

          {/* 1 Year Warranty */}
          <div className="flex flex-col items-center text-center border border-yellow-600 p-16 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Shield className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              รับประกัน 1 ปี
            </h3>
            <p className="text-gray-600 text-lg">(เฉพาะรายการสินค้าที่กำหนด)</p>
          </div>

          {/* Fast Delivery */}
          <div className="flex flex-col items-center text-center border border-yellow-600 p-16 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Truck className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              จัดส่งเร็วทั่วประเทศ
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGuaranteeSection;
