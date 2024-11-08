import Experiences from "@/components/Experiences";
import Github from "@/components/GitHub";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className='min-h-[80dvh] w-full flex-col items-center justify-center'>
      <HeroSection />
      <Skills />
      <Github />
      <Experiences />
    </div>
  );
};

export default Home;
