"use client";
import IPhoneMockup from "@/components/IPhoneMockup/IPhoneMockup";
import TerminalCard from "@/components/Terminal card";
import React, { useEffect, useState } from "react";

const AboutPage: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Update the time every minute
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const icons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/sarwarhridoy4",
      bg: "bg-blue-600",
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-8 w-8'
        >
          <path d='M22.675 0h-21.35C.598 0 0 .598 0 1.325v21.351C0 23.403.598 24 1.325 24h11.495V14.708H9.692v-3.622h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.795.143v3.24h-1.917c-1.505 0-1.797.716-1.797 1.766v2.313h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.324V1.325C24 .598 23.403 0 22.675 0z' />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sarwar-hridoy4",
      bg: "bg-blue-500",
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-8 w-8'
        >
          <path d='M22.23 0H1.77C.791 0 0 .774 0 1.727v20.545C0 23.226.791 24 1.77 24h20.46C23.208 24 24 23.226 24 22.273V1.727C24 .774 23.208 0 22.23 0zM7.12 20.452H3.63V9h3.49v11.452zM5.376 7.46a2.033 2.033 0 11-.001-4.066 2.033 2.033 0 010 4.066zm15.077 12.992h-3.49v-5.916c0-1.41-.03-3.221-1.962-3.221-1.963 0-2.264 1.534-2.264 3.118v6.019H9.192V9h3.351v1.561h.046c.466-.882 1.606-1.811 3.304-1.811 3.532 0 4.184 2.325 4.184 5.348v6.354z' />
        </svg>
      ),
    },
    {
      name: "GitHub",
      link: "https://github.com/Sarwarhridoy4",
      bg: "bg-gray-800",
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-8 w-8'
        >
          <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.838 1.232 1.91 1.232 3.22 0 4.61-2.807 5.624-5.479 5.92.431.372.815 1.103.815 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
        </svg>
      ),
    },
    {
      name: "StackOverflow",
      link: "https://stackoverflow.com/users/19937858/sarwar-hossain",
      bg: "bg-orange-500",
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-8 w-8'
        >
          <path d='M17.95 21.22H3.005V14.193h2.96v3.065h8.964v-3.065h2.96v7.027zM8.516 12.597l-.615-2.87 8.842-1.792.616 2.872-8.843 1.79zm1.34 3.938l8.382-2.16.783 2.965-8.382 2.16-.783-2.965zM6.55 9.542l1.798-8.807L19.7 6.72l-1.8 8.81-11.35-5.988zM11.472 21.22v-2.755h2.96V21.22h-2.96z' />
        </svg>
      ),
    },
  ];
  return (
    <div className='min-h-[80dvh]'>
      <div className='w-4/5 mx-auto my-4'>
        <TerminalCard
          name='Srawar Hossain'
          description='A MERN Stack Developer'
        />
      </div>
      <div className='w-4/5 mx-auto my-4'>
        <IPhoneMockup
          screenSize='small'
          screenContent={
            <div className='h-full flex flex-col'>
              {/* Status Bar */}
              <div className='h-10 flex items-center justify-between px-4 bg-gray-200 text-gray-700 text-sm'>
                <span className='font-bold'>{time}</span>
                <div className='flex space-x-1 items-center'>
                  <span className='h-2 w-2 bg-green-500 rounded-full'></span>
                  <span className='h-2 w-2 bg-gray-400 rounded-full'></span>
                  <span className='h-2 w-2 bg-gray-600 rounded-full'></span>
                </div>
              </div>

              {/* Home Screen */}
              <div className='flex-0 grid grid-cols-2 gap-4 p-4 bg-white'>
                {icons.map((icon) => (
                  <a
                    key={icon.name}
                    href={icon.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col items-center justify-center space-y-2'
                  >
                    <div
                      className={`h-16 w-16 ${icon.bg} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className='text-white text-lg font-bold'>
                        {icon.svg}
                      </span>
                    </div>
                    <span className='text-sm text-gray-700'>{icon.name}</span>
                  </a>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AboutPage;
