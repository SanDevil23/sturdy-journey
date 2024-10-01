import React, { useRef, useState } from "react";
import IntroCard from "../components/IntroCard";
// import ProjectCard from "../components/ProjectCard";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
import BlogsPagePoster from "../components/blogComponents/BlogsPagePoster";
import Blogs from "./Blogs";

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
          <AboutSection ref={sectionRefs.section1} />
          <TechStack />

          <BlogsPagePoster
            toggleBlogs={toggleBlogs}
            ref={sectionRefs.section2}
          />
          <ProjectSection ref={sectionRefs.section3} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
