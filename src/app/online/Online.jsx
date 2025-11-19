import Image from "next/image";

export default function FeatureSteps() {
  const steps = [
    {
      title: "Interactive Learning Tools",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/about-feature-1.png"
    },
    {
      title: "Easy Flexible Access",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/about-feature-1.png"
    },
    {
      title: "Personalized Learning",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/about-feature-1.png"
    },
  ];

  return (
    <section className="bg-[#F2F4F7] py-16">
      <div className="text-center my-7">
        <button className="bg-white border border-gray-300 text-sm text-gray-500 px-4 py-2 rounded-full mb-6">
          Our Features
        </button>
        <h1 className="font-bold text-3xl">Online Education That Improves You</h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        {steps.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center bg-white shadow-md rounded-lg p-12 pb-10 cursor-pointer hover:scale-105 duration-500"
          >
            {/* Center top circular image */}
            <div className="absolute -top-8 bg-white shadow-lg border border-gray-100 rounded-full p-4">
              <Image
                src={item.img}
                width={40}
                height={40}
                alt="feature icon"
                className="hover:scale-110 duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mt-8">{item.title}</h3>
            <p className="text-sm opacity-70 mt-3 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
