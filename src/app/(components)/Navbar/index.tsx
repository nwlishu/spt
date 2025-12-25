"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import TopBar from "../Topbar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<number | null>(null);

  // Dropdown menu data structure
  const dropdownMenuData = [
    {
      title: "อะไหล่เครื่องตัดหญ้า",
      items: [
        { label: "กระบอกเพลา", href: "#", isLink: true },
        { label: "ขาตั้งเครื่อง", href: "#", isLink: true },
        { label: "คลัชผ้า", href: "#", isLink: true },
        { label: "คอยล์ CDI", href: "#", isLink: true },
        { label: "คาร์บูเรเตอร์", href: "#", isLink: true },
        { label: "จานเอ็นตัดหญ้า", href: "#", isLink: true },
        { label: "ชุดสตาร์ท", href: "#", isLink: true },
        { label: "ถังน้ำมัน", href: "#", isLink: true },
        { label: "ถ้วยคลัช", href: "#", isLink: true },
        { label: "ถ้วยยึดใบมีด", href: "#", isLink: true },
        { label: "ที่กันหญ้า", href: "#", isLink: true },
        { label: "ท่อไอเสีย", href: "#", isLink: true },
        { label: "ที่ล็อคเพลา", href: "#", isLink: true },
        { label: "น็อตเกลียวซ้าย", href: "#", isLink: true },
        { label: "ปะเก็นชุด", href: "#", isLink: true },
        { label: "มือเร่งพร้อมสวิทช์", href: "#", isLink: true },
        { label: "สกรูเกลียวซ้าย", href: "#", isLink: true },
        { label: "สายข้ออ่อน", href: "#", isLink: true },
        { label: "สายคันเร่ง", href: "#", isLink: true },
        { label: "สายสะพาย", href: "#", isLink: true },
        { label: "สายเอ็นตัดหญ้า", href: "#", isLink: true },
        { label: "อุปกรณ์ป้องกัน", href: "#", isLink: true },
        { label: "หน้าแปลนกกหาง", href: "#", isLink: true },
        { label: "หม้อกรองอากาศ", href: "#", isLink: true },
        { label: "หัวเกียร์", href: "#", isLink: true },
        { label: "หัวเทียน TTK", href: "#", isLink: true },
        { label: "หูเกี่ยวสายสะพาย", href: "#", isLink: true },
        { label: "เสื้อสูบ+ชุดลูกสูบ", href: "#", isLink: true },
        { label: "แกนเพลา", href: "#", isLink: true },
        { label: "ใบมีดตัดหญ้า", href: "#", isLink: true },
      ],
    },
    {
      title: "อะไหล่เครื่องพ่นยา",
      items: [
        // { label: "Baby & Toddler", href: "#", isLink: false },
        // { label: "Little Kids", href: "#", isLink: false },
        // { label: "Big Kids", href: "#", isLink: false },
        // { label: "Boys", href: "#", isLink: false },
        // { label: "Girls", href: "#", isLink: false },
      ],
    },
    {
      title: "อะไหล่ปั๊มชัก",
      items: [
        // { label: "All Shoes", href: "#", isLink: false },
        // { label: "High Top", href: "#", isLink: false },
        // { label: "Low Top", href: "#", isLink: false },
        // { label: "Slip-ons", href: "#", isLink: false },
      ],
    },
    {
      title: "ซีล",
      items: [
        // { label: "T-Shirts", href: "#", isLink: false },
        // { label: "Jackets", href: "#", isLink: false },
        // { label: "Pants & Shorts", href: "#", isLink: false },
        // { label: "Matching Sets", href: "#", isLink: false },
      ],
    },
    {
      title: "คอนเดนเซอร์",
      items: [
        // { label: "T-Shirts", href: "#", isLink: false },
        // { label: "Jackets", href: "#", isLink: false },
        // { label: "Pants & Shorts", href: "#", isLink: false },
        // { label: "Matching Sets", href: "#", isLink: false },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !(event.target as Element).closest(".navbar-container") &&
        !(event.target as Element).closest(".mobile-menu")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`bg-background fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <TopBar />

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between navbar-container">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="">
              <Image src={Logo} alt="" width={140} height={140} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-16">
            <Link
              href="/"
              className="text-[#21286E] hover:text-blue-600 transition-colors font-bold"
            >
              หน้าแรก
            </Link>
            <Link
              href="/about"
              className="text-[#21286E] hover:text-blue-600 transition-colors font-bold"
            >
              เกี่ยวกับเรา
            </Link>

            {/* Fixed Dropdown - wrapper contains both trigger and dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <Link
                href="/products?page=1"
                className="text-[#21286E] hover:text-blue-600 font-bold cursor-pointer py-4 flex items-center gap-1 transition-colors"
              >
                สินค้า
                <svg
                  className={`w-4 h-4 transition-all duration-200 ${
                    isProductOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown with padding-top to bridge the gap */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                  isProductOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-dropdown border border-border rounded-xl shadow-dropdown min-w-[900px] p-8 bg-white">
                  <div className="grid grid-cols-[200px_1px_1fr] gap-8 text-sm">
                    {/* Left Column: All Categories */}
                    <div>
                      <h3 className="font-bold text-[#21286E] mb-4">หมวดหมู่</h3>
                      <div className="space-y-3">
                        {dropdownMenuData.map((column, columnIndex) => (
                          <div
                            key={columnIndex}
                            className={`text-[#21286E] hover:text-blue-600 cursor-pointer transition-colors block ${
                              selectedCategory === columnIndex ? 'font-bold' : ''
                            }`}
                            onMouseEnter={() => setSelectedCategory(columnIndex)}
                          >
                            <Link
                              href={`/products?page=1&category=${encodeURIComponent(
                                column.title
                              )}`}
                              onClick={() => setIsProductOpen(false)}
                            >
                              {column.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="bg-gray-300"></div>

                    {/* Right Column: Subcategories (shown only if they exist) */}
                    <div className="relative">
                      {dropdownMenuData[selectedCategory].items.length > 0 ? (
                        <>
                          <Link
                            href={`/products?page=1&category=${encodeURIComponent(
                              dropdownMenuData[selectedCategory].title
                            )}`}
                            className="font-bold text-[#21286E] hover:text-blue-600 cursor-pointer transition-colors block mb-4"
                            onClick={() => setIsProductOpen(false)}
                          >
                            {dropdownMenuData[selectedCategory].title}
                          </Link>
                          <div className="columns-2 gap-x-8 mb-4">
                            {dropdownMenuData[selectedCategory].items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={`/products?page=1&subcategory=${encodeURIComponent(item.label)}`}
                                className="text-muted-foreground hover:text-blue-600 transition-colors text-sm block py-1"
                                onClick={() => setIsProductOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>

                          {/* View All Button */}
                          {/* <div className="flex justify-end mt-6">
                            <Link
                              href={`/products?page=1&category=${encodeURIComponent(
                                dropdownMenuData[selectedCategory].title
                              )}`}
                              onClick={() => setIsProductOpen(false)}
                            >
                              <button className="bg-yellow-500 text-[#21286E] px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-bold flex items-center gap-2">
                                ดูทั้งหมด →
                              </button>
                            </Link>
                          </div> */}
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <Link href="/contact">
            <button className="hidden lg:block bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors cursor-pointer">
              ติดต่อเรา
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#21286E] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#21286E] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#21286E] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          } overflow-y-auto`}
        >
          <div className="bg-background border-t border-border py-4 space-y-4 px-6">
            <Link
              href="/"
              className="block text-[#21286E] hover:text-blue-600 transition-colors font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              หน้าแรก
            </Link>
            <Link
              href="/about"
              className="block text-[#21286E] hover:text-blue-600 transition-colors font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </Link>

            {/* Mobile Products Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                className="w-full flex items-center justify-between text-[#21286E] hover:text-blue-600 transition-colors font-bold py-2"
              >
                <span>สินค้า</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileProductOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Categories List */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isMobileProductOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="pl-4 space-y-2">
                  {dropdownMenuData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-1">
                      {/* Category Row */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/products?page=1&category=${encodeURIComponent(
                            category.title
                          )}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex-1 text-[#21286E] hover:text-blue-600 py-2 text-sm font-semibold"
                        >
                          {category.title}
                        </Link>
                        {category.items.length > 0 && (
                          <button
                            onClick={() =>
                              setMobileExpandedCategory(
                                mobileExpandedCategory === categoryIndex
                                  ? null
                                  : categoryIndex
                              )
                            }
                            className="p-2 text-[#21286E] hover:text-blue-600"
                          >
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                mobileExpandedCategory === categoryIndex
                                  ? "rotate-180"
                                  : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Subcategories */}
                      {category.items.length > 0 && (
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            mobileExpandedCategory === categoryIndex
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-y-auto`}
                        >
                          <div className="pl-4 space-y-1">
                            {category.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={`/products?page=1&subcategory=${encodeURIComponent(
                                  item.label
                                )}`}
                                className="block text-gray-600 hover:text-blue-600 py-1.5 text-xs"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact">
              <button className="w-full bg-indigo-900 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition-colors">
                ติดต่อเรา
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
