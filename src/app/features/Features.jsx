"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Career Opportunities in EdCare",
    desc: "Appropriately recapitalize cooperative catalysts change through prospective leadership nvisioneer goal-oriented",
    image:
      "/asset/video-img-1.png",
  },
  {
    id: 2,
    title: "Become A Partner Of EdCare",
    desc: "Appropriately recapitalize cooperative catalysts change through prospective leadership nvisioneer goal-oriented",
    image:
      "/asset/video-img-2.png",
  },
];

export default function OurFeaturesSection() {
  return (
    <section className="py-20 container mx-auto lg:px-20 px-4">
      {/* Top heading */}
      <div className="text-center mb-14">
        <span className="px-5 py-2 rounded-full bg-[#E9FDF7] text-[#00B894] text-sm font-medium inline-flex items-center gap-2">
          <Play size={14} /> Our Features
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
          Founded by Industry Leaders With <br /> Large Scale Business
        </h2>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
        {features.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl  p-4 shadow-md bg-base-100 hover:shadow-md transition"
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white hover:bg-teal-500  w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                  <Play size={32} className="text-[#00B894] hover:text-white" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center px-6 py-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}