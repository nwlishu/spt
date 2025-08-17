// pages/products-showcase.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const InfoCard = ({
  title,
  description,
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-50 p-6 rounded-xl"
    >
      <h3 className="text-lg font-semibold text-[#15274B] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  imagePath?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  price,
  imagePath,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="h-64 bg-gray-300 relative overflow-hidden">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l2.5-3.21L14.5 17H9zm0-9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-1">{subtitle}</p>
        <p className="text-2xl font-bold text-gray-900">{price}</p>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  const products: ProductCardProps[] = [
    {
      title: "เฟืองเดือยหัวเกียร์ G4K หัวเหลี่ยม",
      subtitle: "แกนเพลาหัวเกียร์/เฟืองเดือยหัวเกียร์",
      price: "550 THB",
      imagePath: "/G4K.webp",
    },
    {
      title: "ถังน้ำมัน+ฝา UMK435 ถังล่าง",
      subtitle: "ถังน้ำมัน/เฉพาะฝาถังน้ำมัน",
      price: "190 THB",
      imagePath: "/P7262969.webp",
    },
    {
      title: "สปริงคลัชผ้า NB411 ขาเหล็ก",
      subtitle: "คลัชผ้า/เฉพาะสปริงคลัชผ้า/สกรูยึดคลัชผ้า",
      price: "9 THB",
      imagePath: "/NB411-1.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-8 flex flex-col md:flex-row md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[#21286E]] text-sm font-semibold tracking-wider uppercase">
                สินค้าของเรา
              </span>
              <div className="w-20 h-1 bg-[#21286E] mt-2" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#21286E] mb-6">
              อะไหล่และอุปกรณ์เครื่องตัดหญ้าคุณภาพสูงหลากหลายประเภทของเรา
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[#21286E] mb-8 ">
              ที่บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ) <br />
              เรามีความภูมิใจในการนำเสนออะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มชัก ซิล
              และคอนเดนเซอร์คุณภาพสูงจากแบรนด์ที่เราคัดสรรอย่างพิถีพิถันตลอดกระบวนการ
              ความมุ่งมั่นของเราในด้านคุณภาพและความพึงพอใจของลูกค้าคือแรงขับเคลื่อนที่ทำให้เรายืนหยัดและเติบโตในตลาดอย่างต่อเนื่อง
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-4 ">
              <InfoCard
                title="อะไหล่เครื่องตัดหญ้าและอุปกรณ์เสริม"
                description="ผลิตภัณฑ์คุณภาพที่ผ่านการคัดสรรอย่างพิถีพิถัน เพื่อรองรับความต้องการงานซ่อมบำรุงและการใช้งานในทุกระดับ"
                delay={0.4}
              />
              <InfoCard
                title="การรับประกันคุณภาพ"
                description="ด้วยระบบการตรวจสอบสินค้าที่เชื่อถือได้ เรามั่นใจว่าสามารถรองรับการจัดส่งอะไหล่เครื่องตัดหญ้าและอุปกรณ์ต่างๆ ได้อย่างรวดเร็วและตรงเวลา"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
        {/* Products Section */}
        <div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
                imagePath={product.imagePath}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-end">
            <button className="bg-[#21286E] text-white px-8 py-2 rounded-full hover:bg--[#21286E] transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
              ชมทั้งหมด
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
