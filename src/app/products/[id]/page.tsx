"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../data.json";

type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  rating: number;
  specs?: Record<string, string>;
};

type CatalogProduct = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  rating: number;
};

const catalog: CatalogProduct[] = data as unknown as CatalogProduct[];

function formatPrice(value: number) {
  return `฿${value.toLocaleString()}`;
}

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < full; i++) stars.push(<span key={`f-${i}`}>★</span>);
  if (half) stars.push(<span key="h">☆</span>);
  for (let i = stars.length; i < 5; i++)
    stars.push(<span key={`e-${i}`}>☆</span>);
  return <span className="text-yellow-500">{stars}</span>;
}

type TabKey = "description" | "specs" | "shipping";
const tabs: { key: TabKey; label: string }[] = [
  { key: "description", label: "รายละเอียด" },
  { key: "specs", label: "สเปค" },
  { key: "shipping", label: "การจัดส่ง" },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const productId = Number(id);
  const item = useMemo(
    () => catalog.find((p) => p.id === productId),
    [productId]
  );

  // Hooks must be called unconditionally (before potential early returns)
  const [activeImage, setActiveImage] = useState(0);
  // const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  if (!item) return notFound();

  const product: Product = {
    id: item.id,
    title: item.title,
    description: item.description,
    images: [item.image],
    price: item.price,
    originalPrice: item.originalPrice,
    category: item.category,
    inStock: item.inStock,
    rating: item.rating,
  };

  // const canDecrease = quantity > 1;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-20" />

      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.title}</span>
      </nav>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div>
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white shadow flex items-center justify-center">
              <Image
                src={product.images[activeImage]}
                alt={product.title}
                fill
                className="object-contain p-2 bg-gray-50" // ✅ show whole image
                priority
              />
              {/* {product.originalPrice &&
                product.originalPrice > product.price && (
                  <div className="absolute left-4 top-4 rounded-full bg-red-500/95 text-white px-3 py-1 text-xs font-semibold">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </div>
                )} */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/40 text-white flex items-center justify-center text-lg font-semibold">
                  Out of Stock
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden rounded-xl border transition flex items-center justify-center`}
                  aria-label={`Preview ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt="thumb"
                    fill
                    className={`object-contain p-1 ${
                      activeImage === idx
                        ? "border-[#21286E] ring-2 ring-[#21286E]/30"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info / Purchase */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="ml-1">{product.rating.toFixed(1)}</span>
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="inline-flex items-center gap-2">
                <span className="rounded-full bg-yellow-100 text-yellow-800 px-2 py-0.5 text-xs font-semibold">
                  {product.category}
                </span>
              </span>
            </div>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-3xl font-extrabold text-[#21286E]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-base text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
            </div>

            {/* Quantity and CTA */}
            <div className="mt-6  items-center gap-3">
              <p className="text-sm text-gray-600 mb-3">ช่องทางการสั่งซื้อ</p>

              <div className="flex space-x-2 items-center">
                <div className="w-10 h-10  flex items-center justify-center">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/KasetParts"
                  >
                    <Image
                      src="/facebook.svg"
                      width="112"
                      height="112"
                      alt=""
                      className="object-contain"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10   flex items-center justify-center">
                  <Link target="_blank" href="https://th.shp.ee/MtEHvTE">
                    <Image
                      src="/shopee.svg"
                      width="112"
                      height="112"
                      alt=""
                      className="object-contain"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10   flex items-center justify-center">
                  <Link
                    target="_blank"
                    href="https://vt.tiktok.com/ZSkV1J3or/?page=TikTokShop"
                  >
                    <Image
                      src="/tiktok.svg"
                      width="112"
                      height="112"
                      alt=""
                      className="object-contain"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10   flex items-center justify-center">
                  <Link target="_blank" href="https://lin.ee/lPNKgys">
                    <Image
                      src="/line.svg"
                      width="112"
                      height="112"
                      alt=""
                      className="object-contain"
                    />
                  </Link>
                </div>
                <div className="w-8 h-8   flex items-center justify-center">
                  <Link target="_blank" href="https://s.lazada.co.th/s.Ci92F">
                    <Image
                      src="/lazada.png"
                      width="112"
                      height="112"
                      alt=""
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>

              {/* <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white">
                <button
                  className={`px-3 py-2 text-lg ${
                    canDecrease
                      ? "text-gray-700 hover:bg-gray-50"
                      : "text-gray-300"
                  }`}
                  onClick={() => canDecrease && setQuantity((q) => q - 1)}
                  disabled={!canDecrease}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center font-semibold">
                  {quantity}
                </span>
                <button
                  className="px-3 py-2 text-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                className={`flex-1 rounded-xl px-5 py-3 font-semibold text-sm transition-colors ${
                  product.inStock
                    ? "bg-yellow-400 text-[#21286E] hover:bg-yellow-300"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!product.inStock}
              >
                Add to Cart
              </button>

              <button className="rounded-xl px-5 py-3 font-semibold text-sm bg-[#21286E] text-white hover:bg-[#1b235d]">
                Buy Now
              </button> */}
            </div>

            {/* Shipping badges */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">Ships with:</p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="relative inline-block h-6 w-12">
                  <Image
                    src="/flash.png"
                    alt="Flash Express"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative inline-block h-6 w-12">
                  <Image
                    src="/spx.png"
                    alt="SPX Express"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative inline-block h-6 w-12">
                  <Image
                    src="/kex_1.png"
                    alt="KEX Express"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="relative inline-block h-6 w-6">
                  <Image
                    src="/delivery.svg"
                    alt="Regional Transport"
                    fill
                    className="object-contain"
                  />
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex items-center gap-2 border-b border-gray-200">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                      activeTab === key
                        ? "border-[#21286E] text-[#21286E]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-b-xl p-4 sm:p-5 shadow-sm">
                {activeTab === "description" && (
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                )}
                {activeTab === "specs" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.specs ? (
                      Object.entries(product.specs).map(([k, v]) => (
                        <div
                          key={k}
                          className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
                        >
                          <span className="text-gray-600 text-sm">{k}</span>
                          <span className="text-gray-900 font-medium text-sm">
                            {v}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No specifications available.
                      </p>
                    )}
                  </div>
                )}
                {activeTab === "shipping" && (
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                    <li>จัดส่งภายใน 48 ชั่วโมงสำหรับพื้นที่ส่วนใหญ่</li>
                    <li>
                      รองรับ Flash Express / SPX Express / KEX Express
                      และขนส่งประจำภาค
                    </li>
                    <li>มีหมายเลขติดตามพัสดุทุกคำสั่งซื้อ</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Related Products
            </h2>
            <Link
              href="/products"
              className="text-sm text-[#21286E] hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog
              .filter((rp) => rp.id !== product.id)
              .slice(0, 3)
              .map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.id}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-md transition"
                >
                  <div className="relative h-80">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-yellow-400/95 text-[#21286E] px-3 py-1 text-xs font-bold">
                      {rp.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {rp.title}
                      </h3>
                      <span className="text-xs text-gray-500">
                        ⭐ {rp.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-[#21286E] font-bold">
                        {formatPrice(rp.price)}
                      </span>
                      {rp.originalPrice && rp.originalPrice > rp.price && (
                        <span className="text-xs text-gray-400 line-through">
                          {formatPrice(rp.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
