/* eslint-disable react/prop-types */
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./EachProject.css";
import { Image } from "../Projects";


interface Project {
  projectName: string;
  slogan: string;
  LiveLink: string;
  gitHubLink: string;
  images: Image[]; 
}

interface EachProjectProps {
  project: Project;
}

const EachProject: React.FC<EachProjectProps> = ({ project }) => {
  const { projectName, slogan, LiveLink, gitHubLink, images } = project;

  return (
    <div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div
            className="card-front"
            style={{
              backgroundImage: `url(${images[0]?.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Back Side */}
          <div className="card-back backdrop-blur-sm">
            <p>{projectName}</p>
            <p className="text-xs">{slogan}</p>
            <div className="flex gap-5">
              {/* Live Link */}
              <a
                href={LiveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
              >
                <FaExternalLinkAlt size={24} />
              </a>

              {/* GitHub Link */}
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <FaGithub size={24}  color=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
