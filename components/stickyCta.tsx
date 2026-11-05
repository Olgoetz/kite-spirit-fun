"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { spotsLeft } from "@/lib/event";

const StickyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after the user scrolls past the hero (~one viewport).
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[900] border-t border-pink-200 bg-white/95 backdrop-blur px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="font-bold text-pink-500">Platz sichern</p>
          <p className="text-xs text-gray-500">
            noch {spotsLeft} Plätze · 20% Frühbucher
          </p>
        </div>
        <Link
          href="#pakete"
          className="rounded-lg bg-pink-500 px-5 py-2.5 font-bold text-white"
        >
          Jetzt buchen
        </Link>
      </div>
    </div>
  );
};

export default StickyCta;
