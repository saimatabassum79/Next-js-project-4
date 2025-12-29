"use client";
import Image from "next/image";
import { Play, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container px-7 sm:px-10 md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="flex flex-col sm:flex-row gap-3 relative">
            <div className="flex flex-col">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/asset/about-img-1.jpg"
                  width={280}
                  height={280}
                  className="rounded-tr-3xl sm:rounded-tr-4xl rounded-bl-3xl sm:rounded-bl-4xl border shadow-lg mb-4 sm:mb-6"
                  alt="Video student"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-teal-600 shadow-lg rounded-tr-3xl sm:rounded-tr-4xl rounded-bl-3xl sm:rounded-bl-4xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3"
              >
                <Headphones className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <p className="text-white text-xs sm:text-sm">Online Support</p>
                  <p className="text-white text-lg sm:text-xl font-bold">+258 152 3659</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/asset/about-img-2.jpg"
                width={280}
                height={280}
                className="rounded-br-3xl sm:rounded-br-4xl rounded-tl-3xl sm:rounded-tl-4xl border mt-12 sm:mt-20 shadow-lg"
                alt="Group study"
              />
            </motion.div>
          </div>

          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-36 sm:top-40 md:top-44 left-16 sm:left-20 bg-white shadow-2xl p-3 sm:p-4 rounded-full hover:bg-teal-600 transition"
          >
            <Play className="text-teal-600 hover:text-white w-8 h-8 sm:w-10 sm:h-10" />
          </motion.button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-teal-100 text-teal-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-3 font-semibold text-sm sm:text-base">
            Get More About Us
          </button>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight mb-3 sm:mb-2">
            Over 10 Years in Distant learning <br />
            for Skill Development
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            Compellingly procrastinate equity invested markets with efficient process improvements.
            Authoritatively optimize low-risk metrics and plug-and-play potentialities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="bg-white p-3 sm:p-4 rounded-full border border-gray-200">
                <Image
                  src="/asset/about-1 (1).png"
                  width={28}
                  height={28}
                  className="shadow-lg"
                  alt="Icon 1"
                />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-teal-600">9.5k+</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Total active students taking gifted courses
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="bg-white p-3 sm:p-4 rounded-full border border-gray-200">
                <Image
                  src="/asset/about-2.png"
                  width={28}
                  height={28}
                  className="shadow-lg"
                  alt="Icon 2"
                />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-teal-600">6.7k+</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Total active students taking gifted courses
                </p>
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-teal-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-teal-700 transition"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
