import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import hero_1 from "@/public/hero_1.jpeg";
import { dancingScript } from "@/lib/fonts";
import Countdown from "./countdown";
import { spotsLeft } from "@/lib/event";

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
            alt="Kitesurfen und Yoga Camp in Soma Bay, Ägypten"
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>
        <div className="absolute max-w-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20 text-white text-center px-4">
          <div className="p-8 space-y-6">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-14 md:leading-20">
              <span className={`${dancingScript.className}`}>
                Move-Spirit-Fun
              </span>{" "}
              <p className={`${dancingScript.className}`}>Ocean Edition</p>
              <p>in der traumhaften SomaBay in Ägypten</p>
            </h1>
            <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto">
              Eine Woche Kiten, Yoga, Fitness & Community am Roten Meer – für
              Anfänger und Profis.
            </p>
            <p className="text-2xl md:text-6xl font-black">
              09.05. - 15.05.2027
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-pink-200">
                Frühbucher-Rabatt sichern – endet in:
              </p>
              <Countdown light />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="text-lg md:text-2xl bg-pink-500 px-8 h-16">
                <Link href="#pakete" className="cursor-pointer">
                  Sichere dir deinen Platz
                </Link>
              </Button>
              <Link
                href="#event"
                className="text-lg md:text-xl underline underline-offset-4 hover:text-pink-200"
              >
                Mehr erfahren
              </Link>
            </div>
            <p className="text-sm text-pink-100">
              20% Frühbucher-Rabatt bis 31.01.2027 · nur noch {spotsLeft} Plätze
              verfügbar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
