import AddProjectPage from "@/pages/AddProjectPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Project - Sarwar Hossain",
  description: "Let's add a project to Show Up",
};

const AddProject: React.FC = () => {
  return (
    <React.Fragment>
      <AddProjectPage />
    </React.Fragment>
  );
};

export default AddProject;
