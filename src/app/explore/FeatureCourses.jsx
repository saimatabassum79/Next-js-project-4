"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FeaturedCourses() {
  const [active, setActive] = useState(null);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleClick = (id) => {
    setActive(id);
  };

  const filteredCourses = active
    ? courses.filter((course) => course.id === active)
    : courses;

  return (
    <section className="py-16 bg-[#f7f9fb]">
      <div className="container mx-auto lg:px-20 px-3">
        
        {/* Title animation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="px-4 py-1 bg-white shadow rounded-full text-sm">
            Top Class Courses
          </span>
          <h2 className="text-3xl font-bold mt-4">Explore Featured Courses</h2>
        </motion.div>

        {/* CATEGORY BUTTONS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-12"
        >
          {/* ALL categories button */}
          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(null)}
            className={`rounded-full border border-gray-300 px-6 py-1 cursor-pointer ${
              !active
                ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                : "bg-base-100 shadow-md text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"
            }`}
          >
            All Categories
          </motion.p>

          {categories.map((cat, i) => (
            <motion.button
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick(cat.id)}
              className={`rounded-full cursor-pointer border border-gray-300 px-6 py-1 ${
                active === cat.id
                  ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                  : "bg-base-100 text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* COURSES CARDS */}
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
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCourses.slice(0, 3).map((c, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow rounded-xl p-4 overflow-hidden cursor-pointer"
              >
                {/* Course image */}
                <Image
                  src={c.img}
                  width={400}
                  height={300}
                  className="rounded-xl"
                  alt="feature steps"
                />

                <div className="p-2">
                  <p className="text-teal-600 my-3 text-start bg-[#E6F6F4] rounded-full px-3 py-1 text-sm font-semibold">
                    Free
                  </p>

                  <h3 className="mt-3 text-lg text-start font-semibold leading-tight">
                    {c.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                    <span>Lesson {c.lessons}</span>
                    <span>• Students {c.students}</span>
                    <span>• View: {c.views}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={c.authorImg}
                      width={34}
                      height={34}
                      className="rounded-full"
                      alt="instructor"
                    />
                    <span className="text-sm font-medium">{c.author}</span>
                  </div>

                  <div className="flex items-center gap-1 text-teal-600 text-sm mt-3">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    {c.rating}
                  </div>

                  <div className="flex justify-between mt-5 items-center">
                    <span className="font-bold">{c.price}</span>
                    <Link href={`explore/${c.id}`}>
                      <button className="px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 transition">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Courses Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10"
          >
            <Link href="/courses">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
                All Courses
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
