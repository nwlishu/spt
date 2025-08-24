"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !(event.target as Element).closest(".navbar-container")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`bg-white py-4 px-6 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between navbar-container">
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
          <Link
            href="/products"
            className="text-[#21286E] hover:text-blue-600 transition-colors font-bold"
          >
            สินค้า
          </Link>
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
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-white border-t border-gray-200 py-4 px-6 space-y-4">
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
          <Link
            href="/products"
            className="block text-[#21286E] hover:text-blue-600 transition-colors font-bold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            สินค้า
          </Link>
          <Link href="/contact">
            <button className="w-full bg-indigo-900 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition-colors">
              ติดต่อเรา
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
