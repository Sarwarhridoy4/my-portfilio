"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 shadow-lg text-slate-900 dark:text-white py-4 relative my-0'>
      <div className='container mx-auto flex flex-col items-center justify-center space-y-4'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Sarwar Hossain. All rights reserved.
        </p>
      </div>
      <div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-pulse'></div>
    </footer>
  );
};

export default Footer;
