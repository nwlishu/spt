import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="px-2 lg:px-16">
      <footer className="bg-[#21286E] text-gray-300 rounded-lg">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section - Logo, Address, Social Media */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="bg-white rounded-lg p-2 w-24 h-24 flex flex-col items-center justify-center">
                <Image src="/logo_KP_2.svg" alt="" width={112} height={112} />
              </div>

              {/* Address */}
              <div className="text-sm leading-relaxed max-w-3/4">
                เลขที่ 140 ถนนปากน้ำกระโจมทอง แขวงบางพรม เขตตลิ่งชัน
                กรุงเทพมหานคร 10170
              </div>

              {/* Social Media Icons */}
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
            </div>

            {/* Middle Section - Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-300">Quick Links</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white transform rotate-45"></div>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    เกี่ยวกับเรา
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white transform rotate-45"></div>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    สินค้า
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white transform rotate-45"></div>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    ติดต่อเรา
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-300">Email</h3>
                <p className="text-sm">KPkasetparts@hotmail.co.th</p>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-300">Phone</h3>
                <div className="space-y-1 text-sm">
                  <p>02-435-5049</p>
                  <p>081-855-2903</p>
                  <p>080-963-0655</p>
                </div>
              </div>

              {/* FAX */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-300">FAX</h3>
                <p className="text-sm">02-8834521</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="border-t border-white">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="text-xs text-white">
                © 2025 KPkasetparts CO., LTD. All rights reserved.
              </div>
              <div className="flex space-x-6 text-xs text-white">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
