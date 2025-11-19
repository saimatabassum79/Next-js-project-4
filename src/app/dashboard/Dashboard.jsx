"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FaqDashboard() {
  const [open, setOpen] = useState(0);

  const faq = [
    {
      q: "What courses do you offer?",
      a: "We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences.",
    },
    {
      q: "How can teachers effectively manage a diverse classroom?",
      a: "We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences.",
    },
    {
      q: "How is special education delivered in inclusive classrooms?",
      a: "We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences.",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 lg:px-20">
      {/* Responsive grid — Left image, right FAQ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

        {/* Image section */}
        <div className="relative w-full flex justify-center">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/asset/faq-img.png"
            alt="Dashboard Preview"
            className="rounded-xl w-full max-w-md lg:max-w-md shadow-lg"
          />

          {/* Floating box */}
          <div className="absolute bottom-4 sm:bottom-20 left-1/2 -translate-x-1/2 
                          lg:left-auto lg:right-60 
                          bg-white p-4 lg:p-5 w-52 rounded-lg shadow-md ">
            <p className="text-gray-600 text-sm mb-2">Total Students</p>
            <div className="flex -space-x-2">
              <Image src="/asset/hero-author-1.png" width={35} height={35} className="rounded-full border" alt="" />
              <Image src="/asset/hero-author-2.png" width={35} height={35} className="rounded-full border" alt="" />
              <Image src="/asset/hero-author-3.png" width={35} height={35} className="rounded-full border" alt="" />
              <Image src="/asset/hero-author-4.png" width={35} height={35} className="rounded-full border" alt="" />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <span className="text-sm bg-teal-100 px-3 py-1 rounded-full">
            Most Asked Question
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
            Powerful Dashboard And High Performance Framework
          </h2>

          <div className="mt-6 space-y-4">
            {faq.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg border-gray-300 p-4 cursor-pointer bg-white"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="font-semibold flex justify-between">
                  {item.q}
                  <span>{open === i ? "▲" : "▼"}</span>
                </div>

                {open === i && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-gray-600"
                  >
                    {item.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
