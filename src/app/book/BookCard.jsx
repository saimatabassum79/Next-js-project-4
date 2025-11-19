import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="bg-gray-100 rounded-lg p-4 mb-2">
    
      <span className="text-xs bg-gray-300 text-gray-600 px-3 py-1 rounded-full">
        {book.author}
      </span>

      <div className="flex justify-center  py-5">
        <Image
          src={book.image}
          alt={book.title}
          width={140}
          height={180}
          className="rounded-md   hover:scale-105 duration-500"
        />
      </div>
</div>

      <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
        {book.title}
      </h3>

      <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
        ★★★★★
        <span className="text-gray-500 text-xs ml-1">
          ({book.reviews} Reviews)
        </span>
      </div>

      <div className="mt-3">
        <p className="text-gray-400 line-through text-sm">${book.oldPrice}</p>
        <p className="text-[#00A95C] text-lg font-semibold">${book.newPrice}</p>
      </div>

    </div>
  );
}