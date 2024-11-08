import React, { ReactNode } from "react";

type ScreenSize =
  | "small"
  | "medium"
  | "large"
  | { width: number; height: number };

interface IPhoneMockupProps {
  screenContent: ReactNode;
  screenSize?: ScreenSize;
}

const screenSizeMap = {
  small: { width: 320, height: 640 },
  medium: { width: 375, height: 812 },
  large: { width: 414, height: 896 },
};

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({
  screenContent,
  screenSize = "small",
}) => {
  const { width, height } =
    typeof screenSize === "string" ? screenSizeMap[screenSize] : screenSize;

  return (
    <div className='flex justify-center items-center'>
      {/* iPhone frame */}
      <div
        className='relative bg-black rounded-[50px] border-4 border-gray-700 shadow-lg overflow-hidden'
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {/* Notch */}
        <div className='absolute top-0 left-0 right-0 h-6 bg-black rounded-b-[12px] mx-auto w-[210px]'></div>
        {/* Speaker */}
        <div className='absolute top-2 left-[50%] transform -translate-x-1/2 h-1 w-12 bg-gray-700 rounded-full'></div>
        {/* Camera */}
        <div className='absolute top-2 right-10 h-2 w-2 bg-gray-700 rounded-full'></div>
        {/* Screen */}
        <div className='absolute top-6 bottom-6 left-4 right-4 bg-white rounded-xl overflow-hidden'>
          {screenContent}
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
