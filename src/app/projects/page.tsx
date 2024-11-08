import ProjectsPage from "@/pages/Projects/ProjectsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Sarwar Hossain",
  description: "Explore My Projects🚀",
};

const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <ProjectsPage />
    </React.Fragment>
  );
};

export default Projects;
