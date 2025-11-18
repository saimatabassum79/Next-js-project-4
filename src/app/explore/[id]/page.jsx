import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";



const Page = async({params}) => {
    const {id} = await params;
    console.log(id);
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/courses.json`);
  const courses = await res.json();
  const c = courses.find(c => (c.id) === parseInt(id));
  
  
  
console.log(courses);

    return (
        <div className="container mx-auto px-20 py-10">
             <div  className="bg-white shadow rounded-xl p-4 flex items-center gap-2 overflow-hidden">
            
            {/* Course image */}
             <Image
                                    src={c.img}
                                    width={450}
                                    height={350}
                                    className="rounded-xl  "
                                    alt="feature steps"
                                  />

            <div className="p-2">
              {/* Free Badge */}
              <span className="text-teal-600 my-3 bg-[#E6F6F4] rounded-full px-3 py-1 text-md font-semibold">Free</span>

              {/* Title */}
              <h3 className="mt-3 text-2xl  font-semibold leading-tight">
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

              {/* Price + Button */}
              <div className="flex justify-between mt-5 items-center">
                <span className="font-bold">{c.price}</span>
                <Link href={`explore/${c.id}`}><button className="px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 transition">
                  View Details
                </button></Link>
              </div>

            </div>
          </div>
           
        </div>
    );
};

export default Page;