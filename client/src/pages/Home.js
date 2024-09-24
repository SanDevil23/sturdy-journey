import React, { useState } from "react";
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
        <TopNav/>
        <IntroCard />
        <AboutSection />
        <TechStack />
        
        {/* ProjectCard */}
        <BlogsPagePoster/>
        <ProjectSection/>
        <Footer/>

      {/* </div> */}
    </div>
  );
};

export default Home;
