import React from 'react';
import { RiReactjsLine } from 'react-icons/ri'; 
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiPython, SiCplusplus, SiMongodb } from 'react-icons/si'; // HTML, CSS, JS, Tailwind, Python, C++
const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Skills</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {/* HTML Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className='text-7xl text-orange-500' /> 
                </div>
                {/* CSS Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className='text-7xl text-blue-500' /> 
                </div>
                {/* Mongo DB */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-500' /> 
                </div>

                {/* JavaScript Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className='text-7xl text-yellow-500' /> 
                </div>
                {/* C++ Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className='text-7xl text-blue-700' /> 
                </div>
                {/* Python Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className='text-7xl text-green-500' /> 
                </div>
                {/* React Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' /> 
                </div>
                {/* Tailwind Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className='text-7xl text-teal-400' /> 
                </div>
            </div>
        </div>
    );
};

export default Technologies;
