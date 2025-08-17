"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "./data.json";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  rating: number;
};

const allProducts: Product[] = data;

const categories: string[] = [
  "All",
  "กรองน้ำมัน",
  "กระบอกเพลา",
  "ก็อกน้ำมัน",
  "ก้านสูบ",
  "แกนเพลา",
  "แกนเพลาหัวเกียร์/เฟืองเดือยหัวเกียร์",
  "ขาตั้งเครื่องตัดหญ้า",
  "คลัชผ้า/เฉพาะสปริงคลัชผ้า/สกรูยึดคลัชผ้า",
  "คอยล์ CDI",
  "คาร์บูเรเตอร์",
  "จานยึดใบมีด",
  "จานเอ็นตัดหญ้า/หัวเอ็นตัดหญ้า",
  "ชุดปลอกสายอ่อน/เฉพาะสายข้ออ่อน",
  "ชุดสตาร์ทเครื่องตัดหญ้า",
  "ชุดเสื้อสูบพร้อมลูกสูบ",
  "ตัวแบ่งรับน้ำหนัก/ที่ล็อกเพลา",
  "ถ้วยคลัช",
  "ถ้วยยึดใบมีด",
  "ถังน้ำมัน/เฉพาะฝาถังน้ำมัน",
  "ท่อไอเสีย",
  "ที่กันหญ้า",
  "น็อต/สกรู เกลียวซ้าย",
  "เบาะหุ้มกระบอก",
  "ใบมีดตัดหญ้า",
  "มือเร่งเครื่องตัดหญ้า",
];

const formatPrice = (price: number) => `฿${price.toLocaleString()}`;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [categoryQuery, setCategoryQuery] = useState("");
  const catRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!catRef.current) return;
      if (!catRef.current.contains(e.target as Node)) setIsCatOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const filteredCategories = useMemo(() => {
    const q = categoryQuery.trim().toLowerCase();
    return categories.filter((c) => c.toLowerCase().includes(q));
  }, [categoryQuery]);

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat =
        selectedCategory === "All" || p.category === selectedCategory;
      const term = search.trim().toLowerCase();
      const matchSearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, search]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage, pageSize]);

  const startItem = filtered.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endItem = Math.min(filtered.length, safePage * pageSize);

  const goToPage = (page: number) => {
    if (page < 1) return setCurrentPage(1);
    if (page > totalPages) return setCurrentPage(totalPages);
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1; // neighbors around current
    const left = Math.max(2, safePage - delta);
    const right = Math.min(totalPages - 1, safePage + delta);

    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Account for fixed navbar */}
      <div className="pt-20" />

      {/* Header */}
      <div className="bg-[#21286E]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 ">
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffff]">
              สินค้าของเรา
            </h1>
            <p className="text-white text-lg mt-2 sm:mt-3 max-w-2xl mx-auto">
              เลือกชมสินค้าของเราและกรองตามหมวดหมู่
            </p>
          </div>
        </section>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 border-y border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-3">
          {/* Category Dropdown */}
          <div ref={catRef} className="relative w-full sm:w-80">
            <button
              type="button"
              onClick={() => setIsCatOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl border border-[#21286E]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#21286E] hover:border-[#21286E]"
              aria-haspopup="listbox"
              aria-expanded={isCatOpen}
            >
              <span className="truncate">{selectedCategory}</span>
              <span
                className={`transition-transform ${
                  isCatOpen ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            {isCatOpen && (
              <div className="absolute z-50 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-lg">
                <div className="p-2">
                  <input
                    value={categoryQuery}
                    onChange={(e) => setCategoryQuery(e.target.value)}
                    placeholder="ค้นหาหมวดหมู่..."
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#21286E]"
                    onKeyDown={(e) => e.key === "Escape" && setIsCatOpen(false)}
                    autoFocus
                  />
                </div>
                <div className="max-h-64 overflow-auto p-1">
                  {filteredCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCatOpen(false);
                        setCategoryQuery("");
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                        selectedCategory === cat
                          ? "bg-gray-100 font-semibold"
                          : ""
                      }`}
                      role="option"
                      aria-selected={selectedCategory === cat}
                    >
                      <span className="truncate">{cat}</span>
                      {selectedCategory === cat && (
                        <span className="text-[#21286E]">✓</span>
                      )}
                    </button>
                  ))}
                  {filteredCategories.length === 0 && (
                    <div className="px-3 py-6 text-center text-sm text-gray-500">
                      ไม่พบหมวดหมู่ที่ค้นหา
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-80">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none ring-0 focus:border-[#21286E]"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                ⌕
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-600">
            No products found.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginated.map((p) => (
                <article
                  key={`${p.id}-${safePage}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <Link
                    href={`/products/${p.id}`}
                    className="relative h-52 md:h-96 block"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain p-2" 
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="rounded-full bg-yellow-400/95 text-[#21286E] px-3 py-1 text-xs font-bold">
                        {p.category}
                      </span>
                      {!p.inStock && (
                        <span className="rounded-full bg-red-500 text-white px-3 py-1 text-xs font-semibold">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    {p.originalPrice && p.originalPrice > p.price && (
                      <div className="absolute right-3 top-3 rounded-full bg-red-500 text-white px-3 py-1 text-xs font-semibold">
                        Save {formatPrice(p.originalPrice - p.price)}
                      </div>
                    )}
                  </Link>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                      <Link
                        href={`/products/${p.id}`}
                        className="hover:underline"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {p.description}
                    </p>

                    <div className="mt-4 flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-bold text-[#21286E]">
                          {formatPrice(p.price)}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-gray-500">
                        ⭐ {p.rating.toFixed(1)}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-start ">
                      <Link
                        href={`/products/${p.id}`}
                        className="rounded-xl px-4 py-2.5 text-sm font-semibold  border  h text-center w-full bg-yellow-400 text-[#21286E] hover:bg-yellow-300"
                      >
                        ดูรายละเอียด
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Showing {startItem}-{endItem} of {filtered.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                    safePage === 1
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-[#21286E] border-[#21286E]/30 hover:border-[#21286E]"
                  }`}
                >
                  Prev
                </button>

                {getPageNumbers().map((p, idx) =>
                  typeof p === "number" ? (
                    <button
                      key={idx}
                      onClick={() => goToPage(p)}
                      className={`min-w-9 px-3 py-2 rounded-lg border text-sm font-semibold ${
                        safePage === p
                          ? "bg-[#21286E] text-white border-[#21286E]"
                          : "bg-white text-[#21286E] border-[#21286E]/30 hover:border-[#21286E]"
                      }`}
                    >
                      {p}
                    </button>
                  ) : (
                    <span key={idx} className="px-2 text-gray-400 select-none">
                      {p}
                    </span>
                  )
                )}

                <button
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                    safePage === totalPages
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-[#21286E] border-[#21286E]/30 hover:border-[#21286E]"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
