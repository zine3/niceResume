
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Resume
      </h1>
      <div className="flex flex-col md:flex-row gap-10 px-50 max-w-screen-xl mx-auto">
        <ProjectCard
          src="/cv.png"
          title="cv Zine ADJEMI"
          description="Complete"
        />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-50">
         <ProjectCard
          src="/cv2.png"
          title="technical support"
          description="Detailed description for technical support"
        />
        <ProjectCard
          src="/cv3.png"
          title="Full stack"
          description="Full stack web & web mobile developer"
        />
      </div>
    </div>
  );
};

export default Projects;
