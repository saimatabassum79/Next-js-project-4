import Image from "next/image";
import { Calendar, Tag } from "lucide-react";

export default function LatestNewsSection() {
  return (
    <section className="w-full container mx-auto px-4 lg:px-20 py-20 bg-white">
      {/* Title Section */}
      <div className="text-center mb-14">
        <span className="px-6 py-2 bg-base-100 shadow-md border-[#E0E5EB] rounded-full text-sm font-medium border">
          News & Blogs
        </span>
        <h2 className="text-4xl font-bold text-[#0B0F19] mt-4">
          Latest News Updates
        </h2>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-20 px-6">
        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <Image
            src="/asset/about-img-2.jpg"
            alt="News Image 1"
            width={800}
            height={500}
            className="w-full h-[380px] object-cover group-hover:scale-105 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
              LEARNING
            </span>

            <h3 className="text-xl md:text-2xl font-semibold mt-4 max-w-lg">
              Repurpose mission critical action life items rather total linkage suds
            </h3>

            <div className="flex items-center gap-4 mt-4 text-sm opacity-90">
              <span className="flex items-center gap-1"><Calendar size={16}/> August 15, 2025</span>
              <span className="flex items-center gap-1"><Tag size={16}/> Marketing</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <Image
            src="/asset/content-img-2.png"
            alt="News Image 2"
            width={800}
            height={500}
            className="w-full h-[380px] object-cover group-hover:scale-105 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
              LEARNING
            </span>

            <h3 className="text-xl md:text-2xl font-semibold mt-4 max-w-lg">
              Strategies for Managing Stress and Preventing Burnout in Education
            </h3>

            <div className="flex items-center gap-4 mt-4 text-sm opacity-90">
              <span className="flex items-center gap-1"><Calendar size={16}/> August 15, 2025</span>
              <span className="flex items-center gap-1"><Tag size={16}/> Marketing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}