import React from 'react';
import CoursePageBanner from '../coursePageBanner/CoursePageBanner';
import BooksSection from '../book/BookSEction';

const page = () => {
    return (
        <div >
            <CoursePageBanner title="Product Page" subtitle="Product Page"></CoursePageBanner>
            <div className='container mx-auto lg:px-20 px-4'>
                <BooksSection></BooksSection>
            </div>
        </div>
    );
};

export default page;