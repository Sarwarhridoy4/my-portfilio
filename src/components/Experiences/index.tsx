"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface Experience {
  _id: string;
  title: string;
  company: string;
  span: string;
  location: string;
  imageUrl: string;
}

const Experiences: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_ENDPOINT_PORTFOLIO}/experiences`
      );
      setExperiences(response.data);
    } catch (err) {
      // Type the error as AxiosError to access Axios-specific properties
      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || "Error fetching experiences");
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className='w-full flex items-center justify-center my-10'>
        <p className='text-lg text-gray-500'>Loading experiences...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full flex items-center justify-center my-10'>
        <p className='text-lg text-red-500'>{error}</p>
      </div>
    );
  }

  return (
    <div className='w-full flex items-center justify-center flex-col my-10'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 dark:text-white'>
        Experiences
      </h1>
      <div className='w-4/5 mx-auto'>
        <Carousel
          showArrows
          emulateTouch
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className='max-w-md mx-auto py-4 px-8 bg-violet-800 shadow-lg rounded-lg my-10'
            >
              <div className='w-20 h-20 bg-violet-700 rounded-full flex items-center justify-center'>
                <Image
                  src={experience.imageUrl}
                  alt={`company_logo_${experience.company}`}
                  width={80}
                  height={80}
                  className='rounded-full'
                />
              </div>
              <div className='mt-4'>
                <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'>
                  {experience.title}
                </h2>
                <p className='mt-2 text-slate-50 text-sm md:text-md'>
                  Company: {experience.company}
                </p>
                <p className='mt-2 text-slate-50 text-sm md:text-md'>
                  Span: {experience.span}
                </p>
                <p className='mt-2 text-slate-50 text-sm md:text-md'>
                  Location: {experience.location}
                </p>
              </div>
              <div className='flex justify-end mt-4'>
                <a
                  href='#'
                  className='text-md md:text-xl font-medium text-indigo-300'
                >
                  Details
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Experiences;
