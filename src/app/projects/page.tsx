import ProjectsPage from "@/pages/Projects/ProjectsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Sarwar Hossain",
  description: "Learn more about Sarwar Hossain",
};

const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <ProjectsPage />
    </React.Fragment>
  );
};

export default Projects;
