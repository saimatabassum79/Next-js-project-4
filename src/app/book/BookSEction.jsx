"use client"
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";


export default function BooksSection() {
  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    fetch("/shop.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">

      {/* 🔼 TOP HEADER — ekhanei kore dilam */}
      <div className="flex  justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing 1–12 of {books.length} results
        </p>

        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
          <option>Default Sorting</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* 🔽 CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* 🔽 PAGINATION (optional - jodi chai) */}
      <div className="flex justify-center gap-3 mt-10">
        <button className="w-10 h-10 border rounded-full">01</button>
        <button className="w-10 h-10 border rounded-full bg-[#00A95C] text-white">02</button>
        <button className="w-10 h-10 border rounded-full">03</button>
        <button className="w-10 h-10 border rounded-full">→</button>
      </div>

    </div>
  );
}