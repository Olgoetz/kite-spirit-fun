import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import hero_1 from "@/public/hero_1.jpeg";
import { dancingScript } from "@/lib/fonts";

const Hero = () => {
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="relative min-h-screen -z-10">
          <Image
            fill={true}
            priority={true}
            quality={85}
            sizes="100vw"
            fetchPriority="high"
            src={hero_1}
            alt="Breakers"
            className="object-cover"
            placeholder="blur"
          />
        </div>
        <div className="absolute bg-slate-400/50 rounded-lg  max-w-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-20  text-white  space-y-3 text-center">
          <div className="p-8 space-y-8">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-14 md:leading-20">
              <span className="text-white">Move-Spirit-Fun</span>{" "}
              <p className={`${dancingScript.className}`}>Ocean Edition</p>
              <p>in der traumhaften SomaBay in Ägypten</p>
            </h1>
            <p
              className="text-2xl md:text-6xl font-black"
              style={{
                fontWeight: 2000,
              }}
            >
              10.05. - 16.05.2026
            </p>
            <Button className="text-xl md:text-3xl bg-pink-500  p-10 h-20">
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
