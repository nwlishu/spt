import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import NavbarComponent from "./(components)/Navbar";
import "./globals.css";
import Footer from "./(components)/Footer";
const roboto = Noto_Sans_Thai({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title:
    "SPT PART TRADING CO.,LTD | บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)",
  description:
    "SPT PART TRADING CO.,LTD | บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ) - ผู้นำเข้าและจัดจำหน่ายอะไหล่ทางการเกษตร ",
  authors: [{ name: "SPT PART TRADING CO.,LTD" }],
  creator: "SPT PART TRADING CO.,LTD",
  publisher: "SPT PART TRADING CO.,LTD",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://www.sptparttrading.com/",
    siteName: "SPT PART TRADING CO.,LTD",
    title: "บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)",
    description: "บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด (ร้านต.ทวีกิจ)",
    images: [
      {
        url: "/logoFavi.png",
        alt: "SPT PART TRADING CO.,LTD Logo",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: [
      {
        url: "/logoFavi.png",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
