import React from 'react';
import ProjectPage from './ProjectPage';
import SlideShow from './SlideShow';
import ChatterHub from './ChatterHub';
import Weathosopher from './Weathosopher';
import StarbucksLP from './StarbucksLP';

const ProjectSection = ((props, ref) => {
    const slides = [
        <div className='h-screen flex items-center justify-center' key={1}><ProjectPage /></div>,
        <div className='h-screen flex items-center justify-center' key={2}><ChatterHub /></div>,
        <div className='h-screen flex items-center justify-center' key={3}><Weathosopher /></div>,
        <div className='h-screen flex items-center justify-center' key={4}><StarbucksLP /></div>,
    ];

    return (
        <div ref={ref} className="bg-black p-6 md:p-8">
            <div className="flex items-center justify-center text-white">
                <SlideShow slides={slides} />
            </div>
        </div>
    );
});

export default React.forwardRef(ProjectSection);
