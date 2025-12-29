"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-6 md:px-20 py-10">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-9">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="shadow-lg rounded-xl  hover:shadow-md transition bg-base-100 hover:scale-105 duration-300"
          >
            {/* Image wrapper */}
            <div className="relative w-full h-65 rounded-t-xl overflow-hidden object-cover">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
              />
            </div>

            {/* Card Content */}
            <div className="p-3 space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {blog.date}
                </span>

                <span className="flex items-center gap-1">
                  <Tag size={14} /> {blog.category}
                </span>
              </div>

              <h3 className="font-semibold text-[17px] leading-snug">
                {blog.title}
              </h3>

              <button className="mt-3 border text-black border-gray-200 px-4 py-2 rounded-full text-sm hover:bg-teal-500 hover:text-white transition flex gap-2 items-center font-medium">
                Read More <span className="  "> <FaArrowRight className=""/></span>
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}