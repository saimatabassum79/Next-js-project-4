import Image from "next/image";

export default function NewsletterBanner() {
  return (
    <div className="bg-gray-900 py-20 text-white mt-20">
      <div className="container mx-auto grid md:grid-cols-2 lg:px-20 px-5 gap-12 items-center">
        <Image src="/asset/about-img-2.jpg" width={500} height={200} className=" w-[500px] h-[450px] rounded-xl" alt="" />

        <div>
          <span className="bg-teal-500 px-3 py-1 rounded-full text-sm">
            Subscribe Newsletter
          </span>
          <h2 className="text-3xl font-bold mt-4">Find Your Best Course With Us</h2>
          <p className="text-gray-300 mt-3">
            Quality technologies via fully tested methods of empowerment.
          </p>

          <div className="flex gap-4 mt-6">
            <input
              className="bg-gray-800 px-4 py-3 rounded-lg w-full"
              placeholder="Course Name"
            />
            <input
              className="bg-gray-800 px-4 py-3 rounded-lg w-full"
              placeholder="Email Address"
            />
          </div>

          <button className="mt-5 bg-teal-500 px-6 py-3 rounded-lg hover:bg-teal-600">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
