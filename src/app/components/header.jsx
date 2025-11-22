"use client";
import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import { usePathname } from "next/navigation";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state)=>state.cart.count);
  const count2 = useSelector((state)=>state.wishlist.count2)
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const isActive = (path) =>
    pathname === path ? "text-teal-600 font-semibold" : "hover:text-teal-600";

  return (
    <header className="w-full shadow-sm ">
      {/* TOP BAR */}
      <div className="bg-[#1c2b32] text-white text-xs py-2">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={13} /> <span>256 214 203 215</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              <MapPin size={13} /> <span>258 Helano Street</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              <Clock size={13} /> <span>Mon - Sat: 8am - 3pm</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User size={15} />
            <span className="cursor-pointer">Login / Register</span>

            <div className="hidden lg:flex items-center gap-3">
              <span>Follow Us</span>
              <FaFacebook size={19} />
              <FaInstagram size={19} />
              <FaBehance size={19} />
              <FaYoutube size={19} />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="container mx-auto  px-4 md:px-20 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://html.rrdevs.net/edcare/assets/img/logo/logo-1.png"
            alt="logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* SEARCH (hidden in mobile) */}
        <div className="hidden md:flex flex-grow max-w-[600px] mx-6">
          <div className="bg-gray-100 rounded-full w-full flex items-center px-4 py-2 gap-2">
            <select className="bg-transparent outline-none text-gray-600">
              <option>Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow bg-transparent outline-none"
            />
            <button className="bg-teal-600 text-white px-5 py-2 rounded-full flex items-center gap-1">
              <Search size={16} />
              search
            </button>
          </div>
        </div>
        {/* ICONS */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Heart size={24} className="text-gray-700" />
            <span className="absolute -top-3 -right-2 bg-teal-600 text-white text-[14px] w-6 h-6 flex items-center justify-center rounded-full">
              {count2}
            </span>
          </div>

          <Link href="/cartList"><div className="relative">
            <ShoppingCart size={24} className="text-gray-700" />
            <span className="absolute -top-3 -right-2 bg-teal-600 text-white text-[14px] w-6 h-6 flex items-center justify-center rounded-full">
                {count}
            </span>
          </div></Link>

          {/* Desktop Button */}
          <button className="hidden md:block bg-teal-600 text-white px-5 py-2 rounded-full">
            Start Free Trial
          </button>

          {/* Mobile menu icon */}
          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* NAVBAR (Desktop Only) */}
      <nav className="hidden md:block border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-20">
          <ul className="flex items-center gap-10 py-4 text-gray-700 font-semibold">
            <li className="flex items-center gap-2 cursor-pointer">
              <BiSolidCategory className="text-teal-600 text-xl" />
              CATEGORIES
            </li>

            <Link href="/" className={isActive("/")}>HOME</Link>
            <Link href="/courses" className={isActive("/courses")}>COURSES</Link>
            <Link href="/shop" className={isActive("/shop")}>SHOP</Link>
            <Link href="/about" className={isActive("/about")}>ABOUT</Link>
            <Link href="/blog" className={isActive("/blog")}>BLOG</Link>
            <Link href="/contact" className={isActive("/contact")}>CONTACT</Link>
            
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg border-t animate-slide-down">
          <ul className="flex flex-col gap-4 py-4 px-6 text-gray-700 font-semibold">
            <Link href="/" onClick={() => setMobileMenu(false)} className={isActive("/")}>HOME</Link>
            <Link href="/courses" onClick={() => setMobileMenu(false)} className={isActive("/courses")}>COURSES</Link>
            <Link href="/shop" onClick={() => setMobileMenu(false)} className={isActive("/shop")}>SHOP</Link>
            <Link href="/about" onClick={() => setMobileMenu(false)} className={isActive("/about")}>ABOUT</Link>
            <Link href="/blog" onClick={() => setMobileMenu(false)} className={isActive("/blog")}>BLOG</Link>
            <Link href="/contact" onClick={() => setMobileMenu(false)} className={isActive("/contact")}>CONTACT</Link>
          </ul>
        </div>
      )}

      {/* Animation Style */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
