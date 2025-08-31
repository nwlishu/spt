import React from "react";
import { RotateCcw, Shield, Truck } from "lucide-react";

const ServiceGuaranteeSection: React.FC = () => {
  return (
    <section className="bg-yellow-500 py-48 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            การบริการลูกค้า
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Exchange/Return Policy */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <RotateCcw className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              รับเปลี่ยน-คืนสินค้า
            </h3>
            <p className="text-gray-600 text-lg">ภายใน 7 วัน</p>
          </div>

          {/* 1 Year Warranty */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Shield className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              รับประกัน 1 ปี
            </h3>
            <p className="text-gray-500 text-sm">(เฉพาะสินค้าหรือของขนตฺ)</p>
          </div>

          {/* Fast Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Truck className="w-16 h-16 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              จัดส่งเร็วทั่วประเทศ
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGuaranteeSection;
