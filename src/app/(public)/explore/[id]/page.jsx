import Image from "next/image";
import courses from "../../../data/courses.json";

export default async function Page({ params }) {
  const {id} = await params
  const c = courses.find((item) => item.id === parseInt(id));

  if (!c) {
    return <h1 className="text-center mt-10">Course Not Found!</h1>;
  }

  return (
    <div className="container mx-auto px-5 lg:px-20 py-14">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 border border-gray-200 p-5 rounded-lg">

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow">
            <Image
              src={c.img}
              width={1000}
              height={500}
              className="rounded-xl w-full object-cover"
              alt={c.title}
            />
          </div>

          {/* Badges */}
          <div className="flex gap-3 mt-5">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-teal-100 text-teal-700">
              Best Seller
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
              Latest
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold mt-4 leading-snug">{c.title}</h1>

          {/* META INFO */}
          <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-600 text-sm">
            <span>👨‍🏫 Instructor: {c.author}</span>
            <span>🌐 {c.category}</span>
            <span>📅 April 04, 2022</span>
            <span>⭐ {c.rating} (88)</span>
          </div>

          {/* TABS */}
          <div className="border-b mt-10 flex">
            {["Overview", "Curriculum", "Instructor", "Reviews"].map((t) => (
              <button
                key={t}
                className={`px-6 py-3 font-semibold text-sm border-b-2 
                  ${t === "Overview"
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-teal-600"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* CONTENT AREA */}
          <div className="mt-8 text-gray-600 leading-relaxed space-y-7">

            {/* Static Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>

              <p>
                Rapidiously develop parallel e-markets via worldwide paradigms. 
                Quickly synergize cutting-edge scenarios and professional results. 
                Assertively deliver cross-media results before client-centric outcomes.
              </p>

              <p className="mt-3">
                Energetically reinvent distinctive value via parallel services extensive paradigms. 
                Rapidiously administrate 2.0 total linkage for cross-platform channels.
              </p>
            </div>

            {/* Static Learning Section */}
            <div>
              <h2 className="text-xl font-semibold mb-3">What Will You Learn?</h2>
              <p>
                Quickly synergize cutting-edge scenarios and professional results. 
                Assertively deliver cross-media results before client-centric outcomes. 
                Initiate intuitive communities via distinctive services.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">

          {/* PRICE CARD */}
          <div className="border rounded-xl shadow p-6 border-gray-200 top-24">
            <h2 className="text-3xl font-bold">{c.price}</h2>
            <p className="text-green-600 font-semibold text-sm mt-1">25% Off</p>

            <button className="w-full bg-teal-600 text-white py-3 rounded-lg mt-6 hover:bg-teal-700 transition">
              Add to Cart
            </button>

            <button className="w-full border  border-teal-600 text-teal-600 py-3 rounded-lg mt-3 hover:bg-teal-50 transition">
              Buy Now
            </button>
          </div>

          {/* COURSE INFO (Dynamic + Static Mix) */}
          <div className="border border-gray-200 rounded-xl shadow p-6 space-y-4 text-gray-700 text-sm">

            <div className="flex justify-between bg-gray-100 rounded-md p-3 ">
              <span>Instructor:</span>
              <span className="font-medium">{c.author}</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Lessons:</span>
              <span className="font-medium">{c.lessons}</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Students:</span>
              <span className="font-medium">{c.students}</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Views:</span>
              <span className="font-medium">{c.views}</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Duration:</span>
              <span className="font-medium">15h 30m</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Level:</span>
              <span className="font-medium">Beginner</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Language:</span>
              <span className="font-medium">English</span>
            </div>

            <div className="flex justify-between bg-gray-100 rounded-md p-3">
              <span>Quizzes:</span>
              <span className="font-medium">04</span>
            </div>

            <button className="w-full bg-teal-100 text-teal-700 py-2 rounded-lg mt-4 hover:bg-teal-200 transition">
              Share This Course
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
