"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoursePageBanner({title,subtitle}) {
  return (
    <section
      className="relative w-full h-[250px] md:h-[300px] lg:h-[390px] flex items-center overflow-hidden bg-cover mb-10 mt-1"
      style={{
        backgroundImage: "url('/asset/page-header-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT SIDE WHITE GRADIENT OVERLAY */}
      <div
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0) 90%)",
        }}
      ></div>

      {/* Left Text */}
      <div className="container mx-auto px-5 md:px-30 relative z-20">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
         {title}
        </h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          <Link href="/">Home</Link> <span className="text-teal-500 font-semibold"> / {subtitle}</span>
        </p>
      </div>

      {/* Right Side Decoration Circle */}
      <div className="absolute right-3 md:right-5 bottom-5 md:bottom-70 w-20 h-20 md:w-35 md:h-32 opacity-80 z-20">
        <Image
          src="/asset/page-header-shape-3.png"
          alt="Decoration Circle"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}