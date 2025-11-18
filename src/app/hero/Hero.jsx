"use client";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#F5F7FA] py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm">
              ⚡
            </span>
            <p className="text-teal-600 font-medium text-sm sm:text-base">Welcome to Online Education</p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-gray-900 mb-6">
            Start learning from <br />
            the world’s <span className="text-teal-600">best institutions</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base">
              Get Started
            </button>

            <button className="flex items-center gap-2 text-gray-800 font-semibold text-sm sm:text-base">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 p-2 sm:p-3 border rounded-full text-teal-600 border-teal-600" />
              Watch the video
            </button>
          </div>

          {/* Avatar group */}
          <div className="flex items-center gap-4 mb-2">
            <div className="flex -space-x-3">
              <Image src="/asset/hero-author-1.png" width={32} height={32} className="rounded-full border" alt="" />
              <Image src="/asset/hero-author-2.png" width={32} height={32} className="rounded-full border" alt="" />
              <Image src="/asset/hero-author-3.png" width={32} height={32} className="rounded-full border" alt="" />
              <Image src="/asset/hero-author-4.png" width={32} height={32} className="rounded-full border" alt="" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base">10k Enrollment</p>
          </div>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Explore <span className="text-teal-600 font-semibold">1350+</span> Courses within Subject
          </p>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center md:justify-end">
          {/* Floating box */}
          <div className="absolute animate-float-x top-40 md:top-60 -left-6 md:-left-10 bg-white shadow-lg rounded-xl px-3 py-2 text-center">
            <p className="text-xl sm:text-2xl font-bold text-teal-600">256+</p>
            <p className="text-gray-600 text-xs sm:text-sm">Crashed Courses</p>
          </div>

          {/* Main hero image */}
          <div className="rounded-[25px] sm:rounded-[30px] overflow-hidden">
            <Image
              src="https://html.rrdevs.net/edcare/assets/img/images/hero-img-1.png"
              width={300} // sm
              height={300}
              className="sm:w-[350px] md:w-[400px] lg:mr-25 rounded-[25px] sm:rounded-[30px]"
              alt="Hero student"
            />
          </div>

          {/* Floating shape */}
          <div className="rounded-[25px] absolute top-20 sm:top-28 md:top-30 right-4 sm:right-6 md:right-8 animate-float-x">
            <Image
              src="https://html.rrdevs.net/edcare/assets/img/shapes/hero-shape-1.png"
              width={100} // sm
              height={100}
              className="sm:w-[120px] md:w-[150px]"
              alt="Hero shape"
            />
          </div>

          {/* Animation */}
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
}
