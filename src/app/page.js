import Image from "next/image";
import Hero from "./hero/Hero";
import About from "./skill/Skill";
import FeatureSteps from "./explore/FeatureSteps";
import FeaturedCourses from "./explore/FeatureCourses";
import SelectCategory from "./select/selectCategory";
import Parsent from "./parsent/Parsent";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <SelectCategory></SelectCategory>
      <FeatureSteps></FeatureSteps>
      <FeaturedCourses></FeaturedCourses>
      <Parsent></Parsent>
    </div>
  );
}
