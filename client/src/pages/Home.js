import React, { useRef, useState } from "react";
import IntroCard from "../components/IntroCard";
// import ProjectCard from "../components/ProjectCard";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
import BlogsPagePoster from "../components/blogComponents/BlogsPagePoster";

const Home = () => {


  // const [activeSection, setActiveSection] = useState('IntroCard'); // Initialize with 'skills' as active section

  // const handleSetActive = (section) => {
  //   setActiveSection(section);
  // };
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };
  const scrollToSection = (section) => {
    if (sectionRefs[section].current) {
        sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="bg-black">
      {/* <nav className="relative">
        <ul>
          <li className={activeSection === 'IntroCard' ? 'active' : ''} onClick={() => handleSetActive('IntroCard')}>00</li>
          <li className={activeSection === 'AboutSection' ? 'active' : ''} onClick={() => handleSetActive('AboutSection')}>01</li>
          <li className={activeSection === 'TechStack' ? 'active' : ''} onClick={() => handleSetActive('TechStack')}>02</li>
        </ul>
      </nav> */}

      {/* <div className={`content ${activeSection}`}> */}
        <TopNav scrollToSection={scrollToSection}/>
        <IntroCard />
        <AboutSection ref={sectionRefs.section1}/>
        <TechStack />
        
        {/* ProjectCard */}
        <BlogsPagePoster ref={sectionRefs.section2}/>
        <ProjectSection ref={sectionRefs.section3}/>
        <Footer/>

      {/* </div> */}
    </div>
  );
};

export default Home;
