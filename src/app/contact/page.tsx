"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - LawnMaster Pro</title>
        <meta
          name="description"
          content="Contact LawnMaster Pro for all your lawn mower needs. Sales, service, and support available."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen my-24">
        {/* Page Header */}
        <div className="bg-[#21286E] md:px-8">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 ">
            <div className="text-center mb-6 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffff]">
                Get In Touch
              </h1>
              <p className="text-white text-lg mt-2 sm:mt-3 max-w-2xl mx-auto">
                Ready to transform your lawn? Contact us for expert advice,
                product information, or to schedule a service appointment.
              </p>
            </div>
          </section>
        </div>
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        1234 Green Valley Road
                        <br />
                        Springfield, IL 62701
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        (555) 123-LAWN
                        <br />
                        (555) 123-5296
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        info@lawnmasterpro.com
                        <br />
                        sales@lawnmasterpro.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Service */}
              {/* <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Emergency Repairs</h3>
                <p className="mb-4 text-red-100">
                  Need urgent lawn mower repair? We offer emergency service
                  calls.
                </p>
                <p className="text-2xl font-bold">(555) 911-LAWN</p>
                <p className="text-sm text-red-100 mt-2">24/7 Emergency Line</p>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] md:h-[650px]"
              >
                <Image
                  src="/map.webp"
                  alt="Office Location Map"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.7626502676617!2d100.44707099839478!3d13.747165200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2998c6f5d7237%3A0x8616fe2d72cee20b!2z4Lij4LmJ4Liy4LiZIOC4lS7guJfguKfguLXguIHguLTguIggKFRUSykg4Lit4Liw4LmE4Lir4Lil4LmI4LiB4Liy4Lij4LmA4LiB4Lip4LiV4Lij!5e0!3m2!1sen!2sth!4v1755336429137!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Additional Services Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose LawnMaster Pro?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Service
                </h4>
                <p className="text-gray-600">
                  20+ years of lawn mower expertise and certified technicians.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Fast Response
                </h4>
                <p className="text-gray-600">
                  Same-day service calls and quick turnaround on repairs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Best Prices
                </h4>
                <p className="text-gray-600">
                  Competitive pricing and price matching on all lawn mowers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Warranty
                </h4>
                <p className="text-gray-600">
                  Comprehensive warranty coverage and guaranteed satisfaction.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
