import React from 'react';
import CoursePageBanner from '../coursePageBanner/CoursePageBanner';
import About from '../skill/Skill';
import FeatureSteps from '../../online/Online';
import Parsent from '../parsent/Parsent';
import Instructors from '../instruction/Instructor2';
import OurFeaturesSection from '../../features/Features';

const page = () => {
    return (
        <div>
            <CoursePageBanner title="About Page" subtitle="About Page"></CoursePageBanner>
           <About></About>
           <FeatureSteps></FeatureSteps>
           <Parsent></Parsent>
           <Instructors></Instructors>
           <OurFeaturesSection></OurFeaturesSection>
        </div>
    );
};

export default page;