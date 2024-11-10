// import QRGenerator from "../components/interactiveComponents/QRGenerator";
// import ProjectCard from "../components/ProjectCard";
// import Footer from "../components/Footer";
import React, { useRef, useState } from "react";
import IntroCard from "../components/IntroCard";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import TopNav from "../components/TopNav";
import ProjectSection from "../components/ProjectSection";
import BlogsPagePoster from "../components/blogComponents/BlogsPagePoster";
import Blogs from "./Blogs";
import NewFooter from "../components/NewFooter";
import DiwaliBash from "../components/festiveComponents/DiwaliBash";
import WorkExp from "../components/WorkExp";

const Home = () => {
  const [blog, setBlog] = useState(false);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };
  const scrollToSection = (section) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleBlogs = () => {
    setBlog(true);
    return;
  };

  return (
    <div className="bg-black">
      <TopNav scrollToSection={scrollToSection} />
      {blog ? (
        <div>
          <Blogs />
        </div>
      ) : (
        <div>
          <IntroCard />
          <DiwaliBash/>
          <AboutSection ref={sectionRefs.section1} />
          <BlogsPagePoster
            toggleBlogs={toggleBlogs}
            ref={sectionRefs.section2}
          />
          <TechStack />
          <WorkExp/>
          <ProjectSection ref={sectionRefs.section3} />
          {/* <QRGenerator/> */}
          {/* <Footer /> */}
          <NewFooter/>
        </div>
      )}
    </div>
  );
};

export default Home;
