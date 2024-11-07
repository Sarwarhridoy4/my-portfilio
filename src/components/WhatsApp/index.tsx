"use client";
import React from "react";

const WhatsApp: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className='bg-transparent absolute top-12 right-1 md:top-1 md:right-1 p-4'>
      <div
        className='flex justify-center items-center w-12 h-12 bg-green-500 rounded-full cursor-pointer animate-bounce'
        onClick={openWhatsApp}
        title='Chat with us on WhatsApp'
      >
        <svg
          className='w-8 h-8 text-white'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          fill='currentColor'
        >
          <path d='M16 1C7.716 1 1 7.716 1 16c0 3.084.88 5.966 2.55 8.505L1 31l6.726-2.198A15.856 15.856 0 0 0 16 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm.005 2c7.177 0 13.005 5.828 13.005 13s-5.828 13-13.005 13a13.2 13.2 0 0 1-6.641-1.758L7.55 26.736l-2.037.666.645-2.141-.353-.545A12.912 12.912 0 0 1 3.005 16c0-7.172 5.823-13 12.996-13zm-3.797 6c-.192 0-.411.005-.645.016a2.468 2.468 0 0 0-1.7.89c-.447.5-1.153 1.288-1.249 2.497-.096 1.209.707 2.393.806 2.564.1.17 2.274 3.787 5.377 5.297.66.33 1.143.467 1.56.617.734.264 1.403.222 1.93.137.59-.095 1.81-.74 2.09-1.453.28-.712.28-1.32.195-1.453-.087-.132-.32-.212-.665-.37-.346-.157-2.034-1.005-2.347-1.11-.31-.108-.538-.162-.755.162-.22.327-.87 1.108-1.066 1.33-.196.22-.392.242-.73.086-.337-.157-1.426-.527-2.71-1.682-1.005-.898-1.68-2.003-1.875-2.33-.195-.327-.021-.504.14-.66.14-.138.31-.355.465-.532.157-.175.212-.265.317-.437.106-.175.053-.327-.025-.483-.08-.157-.7-1.733-.96-2.38-.253-.652-.51-.662-.705-.667z' />
        </svg>
      </div>
    </div>
  );
};

export default WhatsApp;
