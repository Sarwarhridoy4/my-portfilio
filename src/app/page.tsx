import Home from "@/pages/Home/Home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sarwar Hossain - A Passionate Full Stack Developer",
  description: "Learn more about Sarwar Hossain",
};

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
};

export default HomePage;
