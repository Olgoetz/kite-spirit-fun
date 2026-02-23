"use client";

import React, { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramReel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-20 w-full px-4">
      <h2 className="text-center font-bold text-2xl md:text-5xl uppercase md:border-b pb-2 text-pink-500 mb-8">
        Get the Vibe
      </h2>
      <p className="text-center text-2xl mb-6 font-extrabold">
        Das war unser Event letztes Jahr in Soma Bay, dieses Jahr wird noch
        größer und Du bist dabei 🤗🫶🏼
      </p>
      <div className="flex justify-center w-full max-w-[400px]">
        {isMounted ? (
          <InstagramEmbed
            url="https://www.instagram.com/reel/DKM9F0UI9NC/?hl=de"
            width="100%"
          />
        ) : (
          <div className="w-full h-[600px] bg-slate-50 animate-pulse rounded-xl border border-gray-100" />
        )}
      </div>
    </div>
  );
};

export default InstagramReel;
