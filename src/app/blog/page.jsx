import React from 'react';
import CoursePageBanner from '../coursePageBanner/CoursePageBanner';
import BlogCard from '../blogCard/BlogCard';

const page = () => {
    return (
        <div>
            <CoursePageBanner title="Blog Grid" subtitle="Blog Grid"></CoursePageBanner>
            <BlogCard></BlogCard>
        </div>
    );
};

export default page;