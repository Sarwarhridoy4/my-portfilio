"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import LoadingAnimation from "../Loading";
import EachProject from "../EachProject";

export interface Image {
  public_id: string;
  url: string;
  _id: string;
}

type Project = {
  id: string;
  projectName: string;
  slogan: string;
  LiveLink: string;
  gitHubLink: string;
  images: Image[];
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const radarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getProjectsUrl = `${process.env.NEXT_PUBLIC_ENDPOINT_PORTFOLIO}/projects`;

    // Making a GET request using Axios
    axios
      .get(getProjectsUrl)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });

    // Radar-like loading animation using anime.js
    const radarAnimation = anime({
      targets: radarRef.current,
      rotate: "360deg",
      easing: "linear",
      duration: 2000,
      loop: true,
    });

    return () => radarAnimation.pause(); // Cleanup the animation when component unmounts
  }, []);

  return (
    <div className='w-5/6 mx-auto m-8'>
      <h2 className='text-center my-4 text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        Projects
      </h2>
      <div className='my-8'>
        <div className='flex flex-col md:flex-row gap-1'>
          {projects?.length === 0 ? (
            <LoadingAnimation />
          ) : (
            <div className='w-11/12 mx-auto flex items-center justify-center flex-col md:flex-row gap-5 flex-wrap'>
              {projects?.map((project, i) => (
                <EachProject key={i} project={project as Project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
