import Image from "next/image";

import About from "./skill/Skill";
import FeatureSteps from "./explore/FeatureSteps";
import FeaturedCourses from "./explore/FeatureCourses";
import SelectCategory from "./select/selectCategory";
import Parsent from "./parsent/Parsent";
import FaqDashboard from "./dashboard/Dashboard";
import Instructors from "./instruction/Instruction";
import NewsletterBanner from "./newsLetterBanner/NewsletterBanner";
import LatestNewsSection from "./latestNews/latestNews";
import Hero from "./hero/Hero";



export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <SelectCategory></SelectCategory>
      <FeatureSteps></FeatureSteps>
      <FeaturedCourses></FeaturedCourses>
      <Parsent></Parsent>
      <FaqDashboard></FaqDashboard>
      <Instructors></Instructors>
      <NewsletterBanner></NewsletterBanner>
      <LatestNewsSection></LatestNewsSection>
    </div>
  );
}
