"use client";

import Link from "next/link";
// Next.js এর Image কম্পোনেন্ট ইম্পোর্ট করা হয়েছে
import Image from "next/image";

export default function Banner({ title, subtitle }) {
  return (
    <div>
      <div
        className="relative bg-no-repeat h-[300px] bg-right"
        style={{
          backgroundColor: "#F3F7FB",
          backgroundImage: `
            linear-gradient(to right, rgba(243,247,251,1), rgba(243,247,251,0)),
            url('/asset/page-header-bg.png')
          `,
          backgroundSize: "cover",
        }}
      >
        {/* Floating Shape */}
        <div className="absolute bottom-2 container mx-auto left-3 w-40 h-40">
          {/* <img> tag পরিবর্তন করে <Image /> করা হয়েছে */}
          <Image
            src="/asset/page-header-shape-1.png"
            alt="decorative shape"
            width={160} // w-40 মানে ১৬০ পিক্সেল
            height={160} // h-40 মানে ১৬০ পিক্সেল
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title + Breadcrumb */}
        <div className="absolute flex flex-col top-32 left-70 -translate-x-1/2">
          <h1 className="text-3xl font-bold">{title || "Contact Us"}</h1>

          <p className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Link href="/">
              <span className="text-gray-800">Home </span>
            </Link>
            <span className="text-teal-600"> / {subtitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
}