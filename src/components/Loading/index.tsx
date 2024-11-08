import { useEffect, useRef } from "react";
import anime from "animejs";

const LoadingAnimation: React.FC = () => {
  const textRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    anime({
      targets: textRef.current?.querySelectorAll("path"),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: (el: HTMLElement, i: number) => i * 250, // Compatible type
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className='w-full flex items-center justify-center'>
      <svg
        ref={textRef}
        viewBox='0 0 600 100'
        className='w-[60%] h-auto'
        fill='none'
        stroke='#fff'
        strokeWidth='3'
      >
        {/* L */}
        <path d='M50 30 L50 80 L80 80' />
        {/* o */}
        <path d='M110 55 Q110 80, 135 80 Q160 80, 160 55 Q160 30, 135 30 Q110 30, 110 55 Z' />
        {/* a */}
        <path d='M190 80 Q170 80, 170 55 Q170 30, 190 30 Q210 30, 210 55 L210 80 L190 80 Z' />
        {/* d */}
        <path d='M240 80 L240 30 L260 30 Q280 30, 280 55 Q280 80, 260 80 Z' />
        {/* i */}
        <path d='M310 80 L310 30' />
        {/* n */}
        <path d='M330 80 L330 30 L350 30 Q370 30, 370 55 L370 80' />
        {/* g */}
        <path d='M400 55 Q400 30, 380 30 Q360 30, 360 55 Q360 80, 380 80 Q400 80, 400 55 Z M400 80 L400 90 L380 90' />
        {/* . */}
        <path d='M430 80 L430 70' />
        <path d='M450 80 L450 70' />
        <path d='M470 80 L470 70' />
      </svg>
    </div>
  );
};

export default LoadingAnimation;
