"use client";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
import "react-toastify/dist/ReactToastify.min.css";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to track when the component has mounted on the client-side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true when the component has mounted
  }, []);

  // Only render the ThemeProvider after the component has mounted
  if (!mounted) return null;

  return (
    <ThemeProvider attribute='class'>
      <div className='bg-slate-100 dark:bg-gray-900 shadow-lg'>
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <ToastContainer />
        {children}
      </div>
    </ThemeProvider>
  );
}
