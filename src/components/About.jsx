import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                About
                <span className='ml-2 text-neutral-500'> {/* Adding margin-left for space */}
                    Me
                </span>
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center">
                    <img className='rounded-2xl' src={aboutImg} alt="aboutImage" />
                </div>
                {/* Text Section */}
                <div className="w-full lg:w-1/2 p-4 flex items-center">
                    <p className='my-2 max-w-xl py-6'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
