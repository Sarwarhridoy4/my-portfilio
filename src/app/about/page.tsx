import AboutPage from "@/pages/About/About";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Sarwar Hossain",
  description: "Learn more about Sarwar Hossain",
};

const About: React.FC = () => {
  return (
    <React.Fragment>
      <AboutPage />
    </React.Fragment>
  );
};

export default About;
