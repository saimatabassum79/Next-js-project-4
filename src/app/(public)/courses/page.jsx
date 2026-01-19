"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa"; // FaHeart যোগ করা হয়েছে
import CoursePageBanner from "../coursePageBanner/CoursePageBanner";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToWishlist } from "../../redux/wishListSlice"; // উইশলিস্ট ইম্পোর্ট

const CoursesPage = () => {
    const dispatch = useDispatch();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.error("Error fetching courses:", err));
    }, []);

    return (
        <div className="py-10">
            <CoursePageBanner title="Course Page" subtitle="Course Page" />
            
            <div className="container mx-auto lg:px-20 px-5 ">
                <div className="text-center lg:mt-14 mt-8 mb-10">
                    <span className="px-4 py-1 bg-white shadow rounded-full text-sm">
                        Top Class Courses
                    </span>
                    <h2 className="text-3xl font-bold mt-4">Explore Featured Courses</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses?.map((c) => (
                        <div key={c.id || c.title} className="bg-white shadow rounded-xl p-4 overflow-hidden flex flex-col h-full relative group">
                            
                            {/* Course image */}
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={c.img}
                                    fill
                                    className="rounded-xl object-cover"
                                    alt={c.title || "course image"}
                                />
                                {/* Image এর উপরে উইশলিস্ট বাটন (ঐচ্ছিক ডিজাইন) */}
                                <button 
                                    onClick={() => dispatch(addToWishlist(c))}
                                    className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 rounded-full transition-all shadow-sm cursor-pointer"
                                    title="Add to Wishlist"
                                >
                                    <FaHeart size={18} />
                                </button>
                            </div>

                            <div className="p-2 flex-grow">
                                <div className="my-3">
                                    <span className="text-teal-600 bg-[#E6F6F4] rounded-full px-3 py-1 text-sm font-semibold">
                                        Free
                                    </span>
                                </div>

                                <h3 className="mt-3 text-lg font-semibold leading-tight min-h-[3rem]">
                                    {c.title}
                                </h3>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                                    <span>Lesson {c.lessons}</span>
                                    <span>• Students {c.students}</span>
                                    <span>• View: {c.views}</span>
                                </div>

                                <div className="flex items-center gap-3 mt-4">
                                    <Image
                                        src={c.authorImg}
                                        width={34}
                                        height={34}
                                        className="rounded-full"
                                        alt={c.author || "author"}
                                    />
                                    <span className="text-sm font-medium">{c.author}</span>
                                </div>

                                <div className="flex items-center gap-1 text-teal-600 text-sm mt-3">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                    <span className="ml-1">{c.rating}</span>
                                </div>

                                <p className="font-bold text-start my-4 text-xl">{c.price}</p>
                            </div>

                            {/* --- Buttons Section --- */}
                            <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-50">
                                <div className="flex gap-2">
                                    {/* Add to Cart Button */}
                                    <button 
                                        className="flex-1 cursor-pointer px-3 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-700 transition whitespace-nowrap"
                                        onClick={() => dispatch(addToCart(c))}
                                    >
                                        Add To Cart
                                    </button>

                                    {/* Wishlist Button (In row) */}
                                    <button 
                                        className="px-3 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                                        onClick={() => dispatch(addToWishlist(c))}
                                    >
                                        <FaHeart />
                                    </button>
                                </div>
                                
                                <Link href={`explore/${c.id}`} className="w-full">
                                    <button className="w-full px-3 py-2.5 border border-gray-200 text-xs font-bold rounded-xl hover:bg-gray-50 cursor-pointer transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;