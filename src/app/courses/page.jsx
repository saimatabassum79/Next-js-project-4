"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import CoursePageBanner from "../coursePageBanner/CoursePageBanner";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const page = () => {
    const dispatch = useDispatch();
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }
        , [])
    return (
        <div className="py-10">
            <CoursePageBanner title="Course Page" subtitle="Course Page"></CoursePageBanner>
            <div className="container mx-auto lg:px-20 px-5 ">

                <div className="text-center mb-10">
                    <span className="px-4 py-1 bg-white shadow rounded-full text-sm">
                        Top Class Courses
                    </span>
                    <h2 className="text-3xl font-bold mt-4">Explore Featured Courses</h2>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses?.map((c, i) => (
                        <div key={i} className="bg-white shadow rounded-xl p-4 overflow-hidden">

                            {/* Course image */}
                            <Image
                                src={c.img}
                                width={400}
                                height={300}
                                className="rounded-xl  "
                                alt="feature steps"
                            />

                            <div className="p-2">
                                {/* Free Badge */}
                                <span className="text-teal-600 my-3 bg-[#E6F6F4] rounded-full px-3 py-1 text-sm font-semibold">Free</span>

                                {/* Title */}
                                <h3 className="mt-3 text-lg font-semibold leading-tight">
                                    {c.title}
                                </h3>

                                {/* Meta info */}
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                                    <span>Lesson {c.lessons}</span>
                                    <span>• Students {c.students}</span>
                                    <span>• View: {c.views}</span>
                                </div>

                                {/* Instructor info */}
                                <div className="flex items-center gap-3 mt-4">
                                    <Image
                                        src={c.authorImg}
                                        width={34}
                                        height={34}
                                        className="rounded-full  "
                                        alt="feature steps"
                                    />
                                    <span className="text-sm font-medium">{c.author}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-teal-600 text-sm mt-3">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar> {c.rating}
                                </div>
                                <p className="font-bold text-start my-2">{c.price}</p>
                                {/* Price + Button */}
                                <div className="flex items-center gap-2">
                                    <button className="cursor-pointer px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 transition" onClick={() => dispatch(addToWishlist(c))}>Add To Wishlist</button>

                                    <button className="cursor-pointer px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 transition" onClick={() => dispatch(addToCart(c))}>Add To Cart</button>
                                    <Link href={`explore/${c.id}`}>
                                        <button className="px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 cursor-pointer transition">
                                            View Details
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;