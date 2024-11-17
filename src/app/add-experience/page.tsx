import AddExperienceContainer from "@/pages/AddExperience/AddExperience";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Add Experience",
    description: "Add Experiences Here",
};
  
const AddExperience: React.FC = () => {
  return (
    <div>
      <AddExperienceContainer />
    </div>
  );
};

export default AddExperience;
