import Link from "next/link";
import React from "react";
import Image from "next/image";

const TopBar = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/KasetParts",
      src: "/facebook.svg",
      size: "w-8 h-8",
    },
    {
      href: "https://th.shp.ee/MtEHvTE",
      src: "/shopee.svg",
      size: "w-8 h-8",
    },
    {
      href: "https://vt.tiktok.com/ZSkV1J3or/?page=TikTokShop",
      src: "/tiktok.svg",
      size: "w-8 h-8",
    },
    {
      href: "https://lin.ee/lPNKgys",
      src: "/line.svg",
      size: "w-8 h-8",
    },
    {
      href: "https://s.lazada.co.th/s.Ci92F",
      src: "/lazada.png",
      size: "w-6 h-6",
    },
  ];
  return (
    <div className=" bg-[#21286E] text-white">
      <div className="flex justify-between px-4 md:px-16 items-center">
        <div>
          <p className="text-sm md:text-base"> บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ) </p>
        </div>
        <div className="flex space-x-2 items-center">
          {socialLinks.map(({ href, src, size }, index) => (
            <div
              key={index}
              className={`${size} flex items-center justify-center`}
            >
              <Link target="_blank" href={href}>
                <Image
                  src={src}
                  width="112"
                  height="112"
                  alt=""
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
