"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import { FaBehance, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e2625] text-white pt-20 pb-10">

     <div className=" px-6 md:px-20 container mx-auto">
         {/* NEWSLETTER SECTION */}
      <div className="border border-gray-700 rounded-xl p-10 max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Subscribe Our Newsletter For <br /> Latest Updates
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
          <div className="flex items-center bg-transparent border border-gray-600 rounded-full px-5 py-3 w-full md:w-[400px]">
            <Mail className="text-gray-300 mr-3" size={18} />
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="bg-transparent outline-none text-gray-300 flex-grow"
            />
          </div>

          <button className="bg-[#04b39c] text-white font-medium px-8 py-3 rounded-full whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* FOOTER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-lg font-bold mb-2">GET IN TOUCH!</h3>
          <div className="w-10 h-[2px] bg-white mb-5"></div>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Fusce varius, dolor tempor interdum tristiquei bibendum.
          </p>

          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-[#04b39c]" />
            <span>(702) 123-1478</span>
          </div>
          
          <span className="text-gray-300 mb-4 block">info@company.com</span>

          <div className="flex items-center gap-4 text-xl mt-4">
            <i className=""><FaFacebook></FaFacebook></i>
            <i className=""><FaInstagram></FaInstagram></i>
            <i className=""><FaBehance></FaBehance></i>
            <i className="fab fa-youtube"><FaYoutube></FaYoutube></i>
          </div>
        </div>

        {/* COMPANY INFO */}
        <div>
          <h3 className="text-lg font-bold mb-2">COMPANY INFO</h3>
          <div className="w-10 h-[2px] bg-white mb-5"></div>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Resource Center</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Instructor</li>
            <li className="hover:text-white cursor-pointer">Become A Teacher</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="text-lg font-bold mb-2">USEFUL LINKS</h3>
          <div className="w-10 h-[2px] bg-white mb-5"></div>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">All Courses</li>
            <li className="hover:text-white cursor-pointer">Digital Marketing</li>
            <li className="hover:text-white cursor-pointer">Design & Branding</li>
            <li className="hover:text-white cursor-pointer">Storytelling & Voice Over</li>
            <li className="hover:text-white cursor-pointer">News & Blogs</li>
          </ul>
        </div>

        {/* RECENT POST */}
        <div>
          <h3 className="text-lg font-bold mb-2">RECENT POST</h3>
          <div className="w-10 h-[2px] bg-white mb-5"></div>

          <div className="space-y-6">
            {/* POST 1 */}
            <div className="flex items-center gap-4 cursor-pointer">
              <Image src="/asset/footer-post-1.png" alt="post1" width={70} height={70} className="rounded-lg object-cover" />
              <div>
                <p className="font-semibold hover:text-white">Where Dreams Find A Home</p>
                <div className="flex items-center text-gray-400 text-sm gap-2">
                  <CalendarDays size={15} />
                  <span>20 April, 2025</span>
                </div>
              </div>
            </div>

            {/* POST 2 */}
            <div className="flex items-center gap-4 cursor-pointer">
              <Image src="/asset/footer-post-2.png" alt="post2" width={70} height={70} className="rounded-lg object-cover" />
              <div>
                <p className="font-semibold hover:text-white">Where Dreams Find A Home</p>
                <div className="flex items-center text-gray-400 text-sm gap-2">
                  <CalendarDays size={15} />
                  <span>20 April, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 mt-16">
        Copyright © 2025 EdCare. All Rights Reserved.
      </div>
     </div>

    </footer>
  );
}