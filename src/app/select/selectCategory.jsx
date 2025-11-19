"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SelectCategory = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = [
    { id: "1", title: "Business Management", img: "/asset/category-1.png" },
    { id: "2", title: "Art Design", img: "/asset/category-1.png" },
    { id: "3", title: "Personal Development", img: "/asset/category-1.png" },
    { id: "4", title: "Health & Fitness", img: "/asset/category-1.png" },
    { id: "5", title: "Marketing", img: "/asset/category-1.png" },
    { id: "6", title: "Business & Finance", img: "/asset/category-1.png" },
    { id: "7", title: "Computer Science", img: "/asset/category-1.png" },
    { id: "8", title: "Data Science", img: "/asset/category-1.png" },
    { id: "9", title: "Software company", img: "/asset/category-3.png" },
    { id: "10", title: "Video", img: "/asset/category-1.png" },
    { id: "11", title: "Photography", img: "/asset/category-1.png" },
    { id: "12", title: "3d Game Studio", img: "/asset/category-1.png" },
    { id: "13", title: "High Tech Company", img: "/asset/category-1.png" },
  ];

  return (
    <div className="bg-[#F2F4F7] py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto px-6 sm:px-10 md:px-20">

        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="px-4 py-2 bg-white text-gray-500 shadow rounded-full text-xs sm:text-sm">
            Our Course Categories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
            Select The Industry Where You Want To Learn
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 sm:mt-8 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 pr-4 pl-2 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm border transition
                ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white border-gray-200 hover:bg-teal-600 hover:text-white"
                }
              `}
            >
             
              <div className="bg-gray-100 px-1.5 py-1 rounded-full border border-gray-200">
                <Image src={cat.img} width={20} height={20} alt={cat.title} className="shadow-sm" />
              </div>
              <Link href={`/explore/${cat.id}`}>
              {cat.title}</Link>
            </button>
          ))}
        </div>

        {/* Link / CTA */}
        

      </div>
    </div>
  );
};

export default SelectCategory;
