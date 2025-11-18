"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";

export default function FeaturedCourses() {
   

  // Category buttons
 

  
  const [courses,setCourses] =useState([])
  useEffect(()=>{
    fetch('/courses.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  }
    ,[])
    const [categories,setCategories] =useState([])
  useEffect(()=>{
    fetch('/categories.json')
    .then(res=>res.json())
    .then(data=>setCategories
    (data))
  }
    ,[])
    const [select,setSelect] =useState(null);
    const handleClick=(id)=>{
        setSelect(id)
    }
   const filter = select? courses.filter(c=>c.id==select):courses
  return (
    <section className="py-16 bg-[#f7f9fb]">
     <div className="container mx-auto lg:px-20 ">
         <div className="text-center mb-10">
        <span className="px-4 py-1 bg-white shadow rounded-full text-sm">
          Top Class Courses
        </span>
        <h2 className="text-3xl font-bold mt-4">Explore Featured Courses</h2>
      </div>
        {/* CATEGORY BUTTONS */}
       
        
      <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
         <p onClick={()=>{handleClick(null)}} className="rounded-full hover:text-white border border-gray-300 hover:bg-teal-600 px-6 py-1 cursor-pointer ">All Categories</p>
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={()=>handleClick(cat.id)}
           className="rounded-full hover:text-white cursor-pointer border border-gray-300 hover:bg-teal-600 px-6 py-1 "
          >
            {cat.name}
          </button>
        ))}
      
      </div>
     
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {filter.slice(0,3).map((c, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4 overflow-hidden">
            
            {/* Course image */}
             <Image
                                    src={c.img}
                                    width={400}
                                    height={300}
                                    className="rounded-xl  "
                                    alt="feature steps"
                                  />

            <div className="p-2">
              {/* Free Badge */}
              <span className="text-teal-600 my-3 bg-[#E6F6F4] rounded-full px-3 py-1 text-sm font-semibold">Free</span>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold leading-tight">
                {c.title}
              </h3>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                <span>Lesson {c.lessons}</span>
                <span>• Students {c.students}</span>
                <span>• View: {c.views}</span>
              </div>

              {/* Instructor info */}
              <div className="flex items-center gap-3 mt-4">
                    <Image
                                    src={c.authorImg}
                                    width={34}
                                    height={34}
                                    className="rounded-full  "
                                    alt="feature steps"
                                  />
                <span className="text-sm font-medium">{c.author}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-teal-600 text-sm mt-3">
                <FaStar></FaStar> 
                <FaStar></FaStar> 
                <FaStar></FaStar> 
                <FaStar></FaStar> 
                <FaStar></FaStar> {c.rating}
              </div>

              {/* Price + Button */}
              <div className="flex justify-between mt-5 items-center">
                <span className="font-bold">{c.price}</span>
                <Link href={`explore/${c.id}`}><button className="px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 transition">
                  View Details
                </button></Link>
              </div>

            </div>
          </div>
        ))}
      </div>
     <div className="mx-auto ">
        <Link href="/courses"> <button className="bg-teal-600 text-white mt-10 max-w-2xl   justify-center  px-6 py-3 rounded-full font-semibold">
                        All Courses
                    </button></Link>
     </div>
     </div>
    </section>
  );
}
