"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const instructors = [
  { name: "Mason D. Logan", role: "It Trainer", img: "/asset/team-men-1.png" },
  { name: "Scarlett Hannah", role: "It Trainer", img: "/asset/team-men-2.png" },
  { name: "Chloe Smith", role: "It Trainer", img: "/asset/team-men-3.png" },
  { name: "Madison Chloe", role: "It Trainer", img: "/asset/team-men-4.png" },
];

export default function Instructors() {
  return (
    <div className="py-20 px-5 container mx-auto sm:px-6 md:px-20">
      <div className=" mx-auto text-center">
        
        {/* Section Header */}
        <span className="bg-teal-100 px-3 py-1 rounded-full text-sm">
          Our Instructors
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Explore Our World's Best Courses
        </h2>

        {/* Grid Trainers */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          
          {instructors.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-5 cursor-pointer transition"
            >
              {/* Image Section */}
              <div className="w-full bg-gradient-to-t from-[#D9F1EF] to-white rounded-xl flex justify-center p-3">
                <Image
                  src={t.img}
                  width={250}
                  height={250}
                  alt={t.name}
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Text + Social */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-teal-600 text-md">{t.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center mt-3 gap-2 sm:gap-3">
                  {[FaFacebook, FaInstagram, FaBehance, FaYoutube].map(
                    (Icon, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-300 p-2 rounded-full hover:bg-teal-500 transition"
                      >
                        <Icon className="text-teal-500 hover:text-white" size={15} />
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}
