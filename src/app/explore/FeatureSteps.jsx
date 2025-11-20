"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSteps() {
  const steps = [
    {
      title: "Book Free Consultation",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/promo-img-1.png"
    },
    {
      title: "Make Easy Payment",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/promo-img-2.png"
    },
    {
      title: "Schedule First Lesson",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/promo-img-3.png"
    },
  ];

  return (
    <section className="bg-[#191B20] py-16">
      <div className="container mx-auto px-5 lg:px-20">

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center my-7"
        >
          <button className="bg-white text-sm text-gray-500 px-4 py-2 rounded-full mb-6">
            Why Choose Us
          </button>
          <h1 className="text-white font-bold text-3xl">
            Explore Yourself All Over The World
          </h1>
        </motion.div>

        {/* Stagger Animation for Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        >
          {steps.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-white px-6 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  className="rounded-[35px] my-4"
                  alt="feature steps"
                />
              </motion.div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-70 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
