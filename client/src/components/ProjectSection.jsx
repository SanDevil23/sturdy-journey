import React from 'react';
import ProjectPage from './ProjectPage';
import SlideShow from './SlideShow';
import ChatterHub from './ChatterHub';
import Weathosopher from './Weathosopher';
import StarbucksLP from './StarbucksLP';
import InventoryManager from './projects/InventoryManager';
import ProjectCard from './projects/ProjectCard';
import projectData from './projects/ProjectData';

const ProjectSection = ((props, ref) => {
    const slides = [
        <div className='h-screen flex items-center justify-center' key={1}><ProjectPage /></div>,
        <div className='h-screen flex items-center justify-center' key={2}><ChatterHub /></div>,
        <div className='h-screen flex items-center justify-center' key={3}><Weathosopher /></div>,
        <div className='h-screen flex items-center justify-center' key={4}><StarbucksLP /></div>,
        <div className='h-screen flex items-center justify-center' key={5}><InventoryManager/></div>,

    ];


    const projectArray = projectData;

    return (
        <div ref={ref} className="grid grid-cols-4 gap-5 gap-y-10 bg-white p-6 md:p-8">
            {/* <div className="flex items-center justify-center text-white">
                <SlideShow slides={slides} />
            </div> */}

            <div className='col-span-4'>
                <div className='text-center text-7xl leading-loose text-sky-800 p-10 font-semibold '>
                    Proj<i className='text-purple-500'><u>ects</u></i>
                </div>
            </div>

            {
                projectArray.map((project, index) =>{
                    const currProject = project;    

                    return (
                        <ProjectCard key={index} title={project.title} desc={project.description} tech={project.technology}/>
                    )
                }
            )
            }

{/* 
            <ProjectCard title='Web Chat Application' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>

            
            <ProjectCard title='Inventory-Manager' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>

            
            <ProjectCard title='OTT Platform' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>

            
            <ProjectCard title='Reporting App' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>

            
            <ProjectCard title='Task Manager' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/> */}



        </div>
    );
});

export default React.forwardRef(ProjectSection);
