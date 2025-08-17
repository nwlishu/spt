// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// const AboutUsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Split Background */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#21286E]">
//         {/* Split Background */}
//         {/* <div className="absolute inset-0 flex">
//           <div className="w-1/2 bg-gray-900"></div>
//           <div className="w-1/2 bg-gray-100"></div>
//         </div> */}

//         {/* Content Overlay */}
//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-6xl lg:text-8xl font-bold mb-6 tracking-wide">
//             เกี่ยวกับเรา
//           </h1>
//           <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
//             A place for people who want to keep less, but better.
//           </p>
//           <div className="text-sm text-gray-300">Home &gt; About Us</div>
//         </div>
//       </section>

//       {/* WE ARE SPT Section */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Column - Text Content */}
//             <div className="space-y-8">
//               <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-wide">
//                 WE ARE SPT
//               </h2>
//               <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
//                 <p>
//                   ต.ทวีกิจ เป็นผู้นำเข้าและจัดจำหน่ายอะไหล่ทางการเกษตร อาทิ
//                   อะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มน้ำ อะไหล่เครื่องเลื่อย ซีล
//                   และอื่นๆ อีกมากมาย เรามีบริการจัดหาสินค้าให้ลูกค้าอย่างครบวงจร
//                   จนลูกค้าขนานนามเราว่าเป็น “โดราเอมอนแห่งวงการอะไหล่การเกษตร”
//                   สิ่งที่ผู้อื่นไม่มีเราจัดหาให้คุณลูกค้าได้เสมอ
//                 </p>
//                 <p>
//                   มากกว่า 30 ปีที่ ต.ทวีกิจ ได้เติบโตมาจนถึงทุกวันนี้
//                   เริ่มต้นจาก ชายคนหนึ่ง
//                   ที่กัดฟันหาเลี้ยงครอบครัวจนสามารถเปิดกิจการเป็นของตัวเองได้
//                   ด้วยประสบการณ์ที่ยาวนาน รวมกับความซื่อตรงและสุจริต
//                   ซึ่งเป็นคติของร้าน จึงทำให้ทุกวันนี้ ต.ทวีกิจ
//                   ได้รับความไว้วางใจจากลูกค้าทั่วประเทศกว่า 700 ราย
//                   ทั้งในเรื่องคุณภาพสินค้าที่คัดสรรมาอย่างดี ราคาที่เหมาะสม
//                   รวมถึงบริการด้วยความจริงใจและเป็นมิตร
//                 </p>
//                 <p>
//                   ณ ปัจจุบัน ร้าน ต.ทวีกิจ ของรุ่นพ่อแม่ ได้ทำการจัดตั้งเป็น
//                   “บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด” ในรุ่นลูก
//                   โดยได้รับการถ่ายทอดความรู้อย่างมีประสิทธิภาพ
//                   เพื่อเข้ามาช่วยกันบริหารกิจการให้เติบโตต่อไป เราสัญญาจะยืนหยัด
//                   ยึดมั่น
//                   ในการเป็นผู้นำด้านอะไหล่การเกษตรเพื่อให้ลูกค้าทุกท่านได้สินค้าคุณภาพ
//                   รวมไปถึงบริการที่ น่าประทับใจต่อไปในอนาคต
//                 </p>
//               </div>
//               <div className="pt-8">
//                 <div className="text-2xl font-bold text-gray-900">
//                   SPT Part Trading
//                 </div>
//                 <div className="text-gray-600">Co., Ltd.</div>
//               </div>
//             </div>

//             {/* Right Column - Image */}
//             <div className="relative">
//               <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
//                 {/* Placeholder for company image - replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-12 h-12 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                         />
//                       </svg>
//                     </div>
//                     <p className="text-gray-600">Company Image</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US Section with Collaborative Image */}
//       <section className="py-24 px-6 bg-gray-50">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Column - Collaborative Image */}
//             <div className="relative">
//               <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
//                 {/* Placeholder for collaborative image - replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-blue-100 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-12 h-12 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                         />
//                       </svg>
//                     </div>
//                     <p className="text-gray-600">Team Collaboration</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Features Grid */}
//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 tracking-wide">
//                 WHY CHOOSE US
//               </h2>
//               <div className="grid grid-cols-2 gap-8">
//                 {/* Feature 1 */}
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-blue-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       CREATIVE SOLUTIONS
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Innovative approaches to agricultural challenges
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 2 */}
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-yellow-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       EASY TO CUSTOMIZE
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Tailored solutions for your specific needs
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 3 */}
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-blue-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       EXPERT SUPPORT
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Professional technical assistance 24/7
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 4 */}
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-yellow-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       QUALITY ASSURANCE
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Premium products that meet high standards
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 5 */}
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-blue-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       OPTIMIZATION
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Efficiency improvements for your operations
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 6 */}
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-yellow-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       DEVELOPMENT
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Continuous improvement and innovation
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MEET OUR TEAM Section */}
//       <section className="py-24 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
//               <span className="inline-block w-8 h-0.5 bg-yellow-500 align-middle mr-4"></span>
//               MEET OUR TEAM
//               <span className="inline-block w-8 h-0.5 bg-yellow-500 align-middle ml-4"></span>
//             </h2>
//             <p className="text-xl text-gray-600">We Are The Best Team</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Team Member 1 */}
//             <Card className="border-0 shadow-lg overflow-hidden">
//               <div className="w-full h-80 bg-gray-200">
//                 {/* Placeholder for team member image - replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-10 h-10 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </div>
//                     <p className="text-gray-600">Team Member</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   JOHN SMITH
//                 </h3>
//                 <p className="text-gray-600 mb-4">CEO & Founder</p>
//                 <div className="flex justify-center space-x-3">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Team Member 2 */}
//             <Card className="border-0 shadow-lg overflow-hidden">
//               <div className="w-full h-80 bg-gray-200">
//                 {/* Placeholder for team member image - replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-10 h-10 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </div>
//                     <p className="text-gray-600">Team Member</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   MARIAN RIVERA
//                 </h3>
//                 <p className="text-gray-600 mb-4">Co-Founder</p>
//                 <div className="flex justify-center space-x-3">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Team Member 3 */}
//             <Card className="border-0 shadow-lg overflow-hidden">
//               <div className="w-full h-80 bg-gray-200">
//                 {/* Placeholder for team member image - replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-10 h-10 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </div>
//                     <p className="text-gray-600">Team Member</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   SARAH JOHNSON
//                 </h3>
//                 <p className="text-gray-600 mb-4">Technical Director</p>
//                 <div className="flex justify-center space-x-3">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 ">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#21286E] mb-6 tracking-wide">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-[#21286E] mb-8 max-w-2xl mx-auto">
//             Contact us today to discuss your agricultural machinery and spare
//             parts needs. Our team is ready to help you find the right solutions.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 border-0 px-8 py-3"
//             >
//               Contact Us
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-[#21286E] text-[#21286E] hover:bg-[#21286E] hover:text-white px-8 py-3"
//             >
//               View Products
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUsPage;

import React from "react";
import {
  Calendar,
  Users,
  Target,
  Award,
  Wrench,
  // Droplets,
  Check,
} from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white my-24">
      {/* Hero Section */}
      <div className="bg-[#21286E]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 ">
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffff]">
              เกี่ยวกับบริษัท บริษัท เอสพีที พาร์ท เทรดดิ้ง จำกัด
            </h1>
            <p className="text-white text-lg mt-2 sm:mt-3 max-w-2xl mx-auto">
              คู่ค้าที่คุณไว้วางใจ
              สำหรับอะไหล่และโซลูชันอุปกรณ์เกษตรครบวงจรมากว่า 30 ปี
            </p>
          </div>
        </section>
      </div>

      {/* Company Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 text-yellow-400/95 mb-2" />
              <div className="text-3xl font-bold text-gray-900">30+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-yellow-400/95 mb-2" />
              <div className="text-3xl font-bold text-gray-900">700+</div>
              <div className="text-gray-600">Trusted Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="h-8 w-8 text-yellow-400/95 mb-2" />
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Product Lines</div>
            </div>
            <div className="flex flex-col items-center">
              <Target className="h-8 w-8 text-yellow-400/95 mb-2" />
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              เรื่องราวและความเป็นมา
            </h2>
            <p className="text-lg text-gray-600">
              {/* From humble beginnings to Thailand&apos;s leading agricultural
              parts specialist */}
              จากจุดเริ่มต้นเล็กๆ
              สู่ผู้เชี่ยวชาญชิ้นส่วนเกษตรอันดับหนึ่งของประเทศไทย
            </p>
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400/95 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <Check className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Humble Beginnings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  ต.ทวีกิจ เป็นผู้นำเข้าและจัดจำหน่ายอะไหล่ทางการเกษตร อาทิ
                  อะไหล่เครื่องตัดหญ้า อะไหล่ปั๊มน้ำ อะไหล่เครื่องเลื่อย ซีล
                  และอื่นๆ อีกมากมาย เรามีบริการจัดหาสินค้าให้ลูกค้าอย่างครบวงจร
                  จนลูกค้าขนานนามเราว่าเป็น “โดราเอมอนแห่งวงการอะไหล่การเกษตร”
                  สิ่งที่ผู้อื่นไม่มีเราจัดหาให้คุณลูกค้าได้เสมอ
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400/95 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <Check className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Building Trust & Reputation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  มากกว่า 30 ปีที่ ต.ทวีกิจ ได้เติบโตมาจนถึงทุกวันนี้
                  เริ่มต้นจาก ชายคนหนึ่ง
                  ที่กัดฟันหาเลี้ยงครอบครัวจนสามารถเปิดกิจการเป็นของตัวเองได้
                  ด้วยประสบการณ์ที่ยาวนาน รวมกับความซื่อตรงและสุจริต
                  ซึ่งเป็นคติของร้าน จึงทำให้ทุกวันนี้ ต.ทวีกิจ
                  ได้รับความไว้วางใจจากลูกค้าทั่วประเทศกว่า 700 ราย
                  ทั้งในเรื่องคุณภาพสินค้าที่คัดสรรมาอย่างดี ราคาที่เหมาะสม
                  รวมถึงบริการด้วยความจริงใจและเป็นมิตร
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400/95 rounded-full flex items-center justify-center text-white">
                  <Check className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  New Generation, Same Values
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  ณ ปัจจุบัน ร้าน ต.ทวีกิจ ของรุ่นพ่อแม่ ได้ทำการจัดตั้งเป็น
                  “บริษัท เอส พี ที พาร์ท เทรดดิ้ง จำกัด” ในรุ่นลูก
                  โดยได้รับการถ่ายทอดความรู้อย่างมีประสิทธิภาพ
                  เพื่อเข้ามาช่วยกันบริหารกิจการให้เติบโตต่อไป เราสัญญาจะยืนหยัด
                  ยึดมั่น
                  ในการเป็นผู้นำด้านอะไหล่การเกษตรเพื่อให้ลูกค้าทุกท่านได้สินค้าคุณภาพ
                  รวมไปถึงบริการที่ น่าประทับใจต่อไปในอนาคต
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ความเชี่ยวชาญของเรา
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              เรานำเข้าและจัดจำหน่ายอะไหล่อุปกรณ์การเกษตรครบวงจร พร้อมให้บริการโซลูชันการจัดหาแบบครบทุกความต้องการของคุณ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                อะไหล่เครื่องตัดหญ้า
              </h3>
              <p className="text-gray-600">
                Complete range of grass cutter and mower parts from leading
                manufacturers, ensuring your equipment runs smoothly and
                efficiently.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Water Pump Components
              </h3>
              <p className="text-gray-600">
                High-quality water pump parts and accessories for agricultural
                irrigation systems, maintaining optimal water flow for your
                operations.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comprehensive Solutions
              </h3>
              <p className="text-gray-600">
                Chainsaw parts, seals, and countless other agricultural
                equipment components. If others don&apos;t have it, we&apos;ll
                source it for you.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles have guided us for over 30 years and continue to
              shape everything we do today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ซื่อสัตย์และมีจรรยาบรรณ
              </h3>
              <p className="text-gray-600">
                รากฐานของเราสร้างขึ้นบนความซื่อสัตย์และมีจรรยาบรรณ –
                คติประจำใจที่ทำให้เราได้รับความไว้วางใจจากลูกค้ามากกว่า 700
                รายทั่วประเทศ
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                การรับประกันคุณภาพ
              </h3>
              <p className="text-gray-600">
                เราคัดสรรและเลือกสินค้าที่มีคุณภาพสูงในราคาที่เหมาะสม
                เพื่อให้ลูกค้าทุกท่านได้รับความคุ้มค่าสูงสุดจากการลงทุน
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                บริการจริงใจ
              </h3>
              <p className="text-gray-600">
                วิธีการให้บริการที่เป็นมิตรและจริงใจของเราช่วยสร้างความสัมพันธ์ที่ยั่งยืน
                โดยตั้งอยู่บนพื้นฐานของความไว้วางใจ ความเข้าใจ
                และความใส่ใจอย่างแท้จริงต่อความสำเร็จของลูกค้า
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white-900 text-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Your Agricultural Parts Solution
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join over 700 satisfied customers who trust us as their
            &quot;Doraemon of Agricultural Parts.&quot; Let us help you find
            exactly what you need.
          </p>
          <button className="bg-yellow-400/95 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg transition duration-200">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
