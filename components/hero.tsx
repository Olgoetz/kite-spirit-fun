import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import hero_1 from "@/public/hero_1.jpeg";
const Hero = () => {
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="relative min-h-screen -z-10">
          <Image
            fill={true}
            priority={true}
            quality={75}
            src={hero_1}
            alt="Breakers"
            className="object-cover"
          />
        </div>
        <div className="absolute bg-slate-400/50 rounded-lg  max-w-250 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-20  text-white  space-y-3 text-center">
          <div className="p-8 space-y-8">
            <h1 className="text-3xl md:text-5xl font-extrabold">
              <span className="text-white">
                Move-Spirit-Fun (Ocean Edition)
              </span>{" "}
              in der traumhaften SomaBay in Ägypten
            </h1>
            <p className="text-xl md:text-4xl font-[1000]">
              10.05. - 16.05.2025
            </p>
            <Button className="text-xl md:text-2xl bg-pink-500  p-10 h-20">
              <Link href="#pakete" className="cursor-pointer">
                Buche jetzt deinen Platz
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
