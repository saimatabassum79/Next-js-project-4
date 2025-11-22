"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Counter from "../counter/Counter";


const Hero = () => {
  return (
    <section className="bg-[#f2f6fa] py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT TEXT AREA */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <p className="text-gray-700 text-sm font-medium">
              Welcome to Online Education
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Start learning from <br />
            the world’s <span className="text-teal-600">best institutions</span>
          </h1>

          {/* Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-5 flex-wrap mt-5">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-700 transition">
              Get Started
            </button>

            <button className="flex items-center gap-2 text-gray-700 font-medium">
              <Play className="w-5 h-5 bg-white shadow p-1 rounded-full text-teal-600" />
              Watch the video
            </button>
          </div>

          {/* Enrolled Users */}
          <div className="flex items-center justify-center lg:justify-start gap-4 my-7">
            <div className="flex -space-x-3">
              <Image src="/asset/hero-author-1.png" width={40} height={40} alt="user" className="rounded-full" />
              <Image src="/asset/hero-author-2.png" width={40} height={40} alt="user" className="rounded-full" />
              <Image src="/asset/hero-author-3.png" width={40} height={40} alt="user" className="rounded-full" />
              <Image src="/asset/hero-author-4.png" width={40} height={40} alt="user" className="rounded-full" />
            </div>

            <p className="text-gray-600 text-sm md:text-base">
              <span className="font-bold text-gray-900">10k+</span> Enrollment
            </p>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            Explore <span className="text-teal-600 font-bold">1350+ Courses</span> within Subject
          </p>
          
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className=" flex justify-center w-full lg:w-1/2">

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg w-[260px] sm:w-[300px] md:w-[340px] lg:w-[400px]">
            <Image
              src="/asset/hero-img-1.png"
              width={400}
              height={400}
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating Shape */}
       <div className="relative">
           <div className="absolute -right-20 top-30 w-[200px] lg:block hidden">
            <Image src="/asset/hero-shape-1.png" alt="Shape" width={260} height={260} className="object-cover" />
          </div>
       </div>

          {/* Floating Card */}
       <div className="relative">
            <div className="absolute animate-float-x top-40 md:top-60 lg:right-80 bg-white shadow-lg rounded-xl  w-40  py-3 pl-6 lg:block hidden">
            <p className="text-xl sm:text-2xl font-bold text-teal-600">256+</p>
            <p className="text-gray-600 text-xs sm:text-sm">Crashed Courses</p>
          </div>
</div>
<style jsx>{`
            @keyframes floatX {
              0% { transform: translateX(0); }
              50% { transform: translateX(12px); }
              100% { transform: translateX(0); }
            }

            .animate-float-x {
              animation: floatX 3s ease-in-out infinite;
            }
     `}</style>
       
         
        </div>
      </div>
    </section>
  );
};

export default Hero;