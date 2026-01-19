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
  LogOut, // নতুন আইকন
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
// NextAuth এর জন্য ইমপোর্ট
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession(); // সেশন ডাটা চেক
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items?.reduce((total, item) => total + item.quantity, 0);
  const count2 = useSelector((state) => state.wishlist.count2);
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
            {/* LOGIN / LOGOUT LOGIC HERE */}
            <div className="flex items-center gap-2 cursor-pointer">
              <User size={15} />
              {session ? (
                <div className="flex items-center gap-3">
                  <span className="font-medium text-teal-400">Hi, {session.user.name.split(' ')[0]}</span>
                  <button 
                    onClick={() => signOut()} 
                    className="flex items-center gap-1 bg-red-500/20 px-2 py-0.5 rounded hover:bg-red-500 transition-all"
                  >
                    <LogOut size={12} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <span onClick={() => signIn()} className="cursor-pointer hover:text-teal-400 transition-colors">
                  Login / Register
                </span>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3 border-l border-gray-600 pl-3 ml-1">
              <span>Follow Us</span>
              <FaFacebook size={19} className="hover:text-teal-400 cursor-pointer" />
              <FaInstagram size={19} className="hover:text-teal-400 cursor-pointer" />
              <FaBehance size={19} className="hover:text-teal-400 cursor-pointer" />
              <FaYoutube size={19} className="hover:text-teal-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="container bg-white mx-auto px-4 md:px-20 py-3 flex items-center justify-between">
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
          <div className="bg-gray-100 rounded-full w-full flex items-center px-4 py-2 gap-2 border border-transparent focus-within:border-teal-600 transition-all">
            <select className="bg-transparent outline-none text-gray-600 text-sm border-r border-gray-300 pr-2">
              <option>Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow bg-transparent outline-none text-sm"
            />
            <button className="bg-teal-600 text-white px-5 py-2 rounded-full flex items-center gap-1 hover:bg-teal-700 transition-colors">
              <Search size={16} />
              search
            </button>
          </div>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Heart size={24} className="text-gray-700 hover:text-teal-600 transition-colors" />
            <span className="absolute -top-3 -right-2 bg-teal-600 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
              {count2}
            </span>
          </div>

          <Link href="/cartList">
            <div className="relative cursor-pointer">
              <ShoppingCart size={24} className="text-gray-700 hover:text-teal-600 transition-colors" />
              {totalQuantity > 0 && (
                <span className="absolute -top-3 -right-2 bg-teal-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-[12px] font-bold">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>

          {/* Dashboard/Profile Button (Dynamic) */}
          {session ? (
            <Link href="/dashboard">
              <button className="hidden md:block bg-[#1c2b32] text-white px-5 py-2 rounded-full hover:bg-teal-600 transition-all text-sm font-semibold">
                Dashboard
              </button>
            </Link>
          ) : (
            <button className="hidden md:block bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-[#1c2b32] transition-all text-sm font-semibold">
              Start Free Trial
            </button>
          )}

          {/* Mobile menu icon */}
          <button className="md:hidden text-gray-800" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* NAVBAR (Desktop Only) */}
      <nav className="hidden md:block border-t bg-white border-gray-200">
        <div className="container mx-auto px-4 md:px-20">
          <ul className="flex items-center gap-10 py-4 text-gray-700 font-semibold text-sm">
            <li className="flex items-center gap-2 cursor-pointer group">
              <BiSolidCategory className="text-teal-600 text-xl group-hover:scale-110 transition-transform" />
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
        <div className="md:hidden bg-white shadow-xl border-t fixed w-full z-50 animate-slide-down">
          <ul className="flex flex-col gap-4 py-6 px-6 text-gray-700 font-semibold">
            <Link href="/" onClick={() => setMobileMenu(false)} className={isActive("/")}>HOME</Link>
            <Link href="/courses" onClick={() => setMobileMenu(false)} className={isActive("/courses")}>COURSES</Link>
            <Link href="/shop" onClick={() => setMobileMenu(false)} className={isActive("/shop")}>SHOP</Link>
            <Link href="/about" onClick={() => setMobileMenu(false)} className={isActive("/about")}>ABOUT</Link>
            <Link href="/blog" onClick={() => setMobileMenu(false)} className={isActive("/blog")}>BLOG</Link>
            <Link href="/contact" onClick={() => setMobileMenu(false)} className={isActive("/contact")}>CONTACT</Link>
            <hr />
            {session ? (
               <button onClick={() => signOut()} className="text-red-600 flex items-center gap-2">
                 <LogOut size={18} /> Logout
               </button>
            ) : (
               <button onClick={() => signIn()} className="text-teal-600 flex items-center gap-2">
                 <User size={18} /> Login / Register
               </button>
            )}
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