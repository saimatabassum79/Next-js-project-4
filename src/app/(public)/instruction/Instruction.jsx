"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
  { name: "Zaramane Mass Likan", role: "Online Teacher", img: "/asset/team-1.png" },
  { name: "Amelia Grace Lily", role: "Online Teacher", img: "/asset/team-2.png" },
  { name: "Mason Logan Dee", role: "Online Teacher", img: "/asset/team-3.png" },
  { name: "Isabella Charlotte", role: "Online Teacher", img: "/asset/team-4.png" },
];

export default function Instructors() {
  return (
    <div className="py-24 bg-gradient-to-r from-blue-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        
        {/* Top Text */}
        <span className="bg-teal-100 px-3 py-1 rounded-full text-sm">
          Our Instructors
        </span>

        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Explore Our World Best Courses
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {instructors.map((t, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl 
                         p-4 cursor-pointer group transition-all duration-300"
            >
              {/* Image Box */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={t.img}
                  width={300}
                  height={200}
                  alt={t.name}
                  className="rounded-lg w-full h-auto group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-teal-600 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
