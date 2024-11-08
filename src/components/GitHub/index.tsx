/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import React from "react";

const Github: React.FC = () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!username) {
    console.error(
      "GitHub username is not defined. Check environment variables."
    );
    return (
      <p className='text-center text-red-500'>
        GitHub username is not configured.
      </p>
    );
  }

  return (
    <React.Fragment>
      <motion.div className='my-10'>
        <h1
          className='text-[20px] text-left md:text-[30px] lg:text-[40px] font-semibold masked-text p-8'
        >
          GitHub Stats
        </h1>
      </motion.div>

      <div className='flex flex-col gap-7 items-center justify-center'>
        <div className='w-96'>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}`}
            alt='GitHub Streak Stats'
            width={400}
            height={200}
            className='rounded-md'
          />
        </div>

        <div className='w-96'>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`}
            alt='GitHub Top Languages'
            width={400}
            height={200}
            className='rounded-md'
          />
        </div>

        <div className='w-96'>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en`}
            alt='GitHub Profile Stats'
            width={400}
            height={200}
            className='rounded-md'
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Github;
