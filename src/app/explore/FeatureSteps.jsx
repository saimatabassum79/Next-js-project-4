import Image from "next/image";

export default function FeatureSteps() {
  const steps = [
    {
      title: "Book Free Consultation",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/promo-img-1.png"
    },
    {
      title: "Make Easy Payment",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/promo-img-2.png"
    },
    {
      title: "Schedule First Lesson",
      desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
      img: "/asset/promo-img-3.png"
    },
  ];

  return (
    <section className="bg-[#191B20] py-16">
       <div className="container mx-auto px-5 lg:px-20">
         <div className="text-center my-7">
             <button className="bg-white text-sm text-gray-500  px-4 py-2 rounded-full mb-6 ">
                       Why Choose Us
                    </button>
                    <h1 className="text-white font-bold text-3xl ">Explore Yourself All Over The World</h1>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {steps.map((item, i) => (
          <div key={i} className="flex flex-col items-center  text-white px-6">
             <Image
                        src={item.img}
                        width={200}
                        height={200}
                        className="rounded-[35px] my-4 "
                        alt="feature steps"
                      />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm opacity-70 mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
       </div>
    </section>
  );
}
