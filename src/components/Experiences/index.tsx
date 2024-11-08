"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// Define the component
const Experiences: React.FC = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col my-10'>
      <h1 className='text-[20px] text-left md:text-[30px] lg:text-[40px] font-semibold masked-text'>
        Experiences
      </h1>
      <div className='w-4/5 mx-auto'>
        <Carousel
          showArrows={true}
          emulateTouch={true}
          autoPlay={true}
          centerMode={false}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {/* Item One */}
          <div className='max-w-md mx-auto py-4 px-8 bg-violet-800 shadow-lg rounded-lg my-20'>
            <div className='w-20 h-20 bg-violet-700 rounded-full flex items-center justify-center align-middle'>
              <Image
                src='/assets/3w.png'
                alt='company_logo_3w'
                width={80}
                height={80}
                className='rounded-full'
              />
            </div>
            <div>
              <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'>
                Full-Stack Developer (MERN)
              </h2>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Company: 3W Private Ltd
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Span: Aug 2023 - Aug 2024 · 1 year
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Location: Greater Noida · Remote
              </p>
            </div>
            <div className='flex justify-end mt-4'>
              <a
                href='https://triplewsols.org/'
                target='_blank'
                className='text-md md:text-xl font-medium text-indigo-300'
                rel='noreferrer'
              >
                Details
              </a>
            </div>
          </div>
          {/* Item Two */}
          <div className='max-w-md mx-auto py-4 px-8 bg-violet-800 shadow-lg rounded-lg my-20'>
            <div className='w-20 h-20 bg-violet-700 rounded-full flex items-center justify-center align-middle'>
              <Image
                src='/assets/gog.png'
                alt='company_logo_geeks_of_gurukul'
                width={80}
                height={80}
                className='rounded-full'
              />
            </div>
            <div>
              <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'>
                Full-Stack Developer (MERN)
              </h2>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Company: Geeks Of Gurukul
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Span: Apr 2023 - Jun 2023 · 3 months
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Location: Bengaluru · Remote
              </p>
            </div>
            <div className='flex justify-end mt-4'>
              <a
                href='https://www.geeksofgurukul.com/'
                target='_blank'
                className='text-md md:text-xl font-medium text-indigo-300'
                rel='noreferrer'
              >
                Details
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Experiences;
