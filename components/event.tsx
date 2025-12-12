"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import michi_und_katja from "@/public/michi_und_katja.jpeg";
const Event = () => {
  return (
    <div
      className="container px-4 max-w-350 mx-auto "
      //   style={{ ...springs }}
    >
      <h1
        id="event"
        className="text-center font-bold text-2xl md:text-5xl pt-20  uppercase border-b pb-2  text-pink-500"
      >
        Event
      </h1>

      <div className="mt-8  space-y-6">
        {/* <p className="text-center text-lg">
          Wir freuen uns riesig ein{" "}
          <span className="text-pink-500 block md:inline font-bold text-2xl">
            Move-Spirit-Fun Camp, erstmalig als Ocean Edition
          </span>{" "}
          in der traumhaften Soma Bay in Ägypten anbieten zu können.
        </p> */}

        <div className="bg-linear-to-br from-pink-50 to-blue-50 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-500 mb-4">
            Move-Spirt-Fun Soma Bay 2026 - Ocean Edition
          </h2>
          <p className="text-center text-lg font-semibold mb-6">
            Action, Lifestyle & Community am Roten Meer!
          </p>
          <p className="text-center mb-6">
            Tauche ein in eine Woche voller Energie, Bewegung und Lebensfreude –
            ein Event, das verbindet, begeistert und inspiriert. Egal ob du
            kiten, tauchen, schnorcheln, einfach die Sonne genießen oder dich
            bei Yoga, Mobility & Workouts auspowern willst: Hier ist für jede*n
            etwas dabei!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span>💦</span> Wassersport-Fans?
                  </h3>
                  <p className="text-gray-700">
                    Kite- & Wing-Sessions in einer der schönsten Lagunen
                    Ägyptens.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span>🤿</span> Unterwasserliebhaber?
                  </h3>
                  <p className="text-gray-700">
                    Tauch- und Schnorchelspots, die dich sprachlos machen.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span>🧘‍♀️</span> Mind & Body Genießer?
                  </h3>
                  <p className="text-gray-700">
                    Yoga bei Sonnenaufgang, Flow & Mobility, Faszientraining und
                    Specials, die Körper & Seele feiern.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span>☀️</span> Einfach Sonne tanken & genießen?
                  </h3>
                  <p className="text-gray-700">
                    Liegestuhl, Meeresrauschen und eine Community, die dich
                    sofort aufnimmt.
                  </p>
                </div>
              </div>

              <div className="bg-pink-100 rounded-lg p-5 mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span>💕</span> Alle willkommen:
                </h3>
                <p className="text-gray-700">
                  Paare, Alleinreisende, Freunde, Anfänger, Fortgeschrittene –
                  hier zählt nur gute Laune, offene Herzen und die Lust auf eine
                  fantastische Zeit.
                </p>
              </div>

              <div className="border-t-2 border-pink-300 pt-6">
                <h3 className="text-xl font-bold text-center mb-4">
                  Das darfst du nicht verpassen – wirklich nicht!
                </h3>
                <p className="text-center mb-4">
                  Dieses Event steckt voller Energie, Leichtigkeit, Spaß und
                  Gänsehaut-Momenten.
                </p>
                <p className="text-center mb-4">
                  Hier entstehen Freundschaften, die bleiben – Erinnerungen, die
                  tragen – und Momente, von denen du noch wochenlang strahlst.
                </p>
                <p className="text-center font-semibold text-lg">
                  Gemeinsam wachsen. Gemeinsam lachen. Gemeinsam genießen.
                </p>
                <p className="text-center text-pink-600 font-bold text-xl mt-4">
                  Dein unvergessliches Erlebnis in Soma Bay wartet auf dich!
                </p>
              </div>
            </div>

            <div>
              <Image
                src={michi_und_katja}
                alt="Michaela und Katja"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl mt-8 font-extrabold">
        Freue dich auf eine Woche mit:
      </p>

      <div className="grid mt-8 md:grid-cols-3 gap-6 items-center text-center mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
        >
          <div className="flex relative h-100 items-center justify-center">
            <Image
              src="/michi_kite.jpeg"
              alt="Kitesurfen SomaBay Ägypten"
              fill
              className="object-cover -z-10 rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <p className="text-white uppercase text-3xl bg-slate-300/50 w-50 p-8">
              Kite
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
        >
          <div className="flex relative h-100 items-center justify-center">
            <Image
              src="/workout_somabay.jpg"
              alt="Fitness SomaBay Ägypten"
              fill
              className="object-cover object-left -z-10 rounded-lg"
            />
            <p className="text-white uppercase text-3xl bg-slate-300/50 w-50 p-8">
              Fitness
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
        >
          <div className="flex relative h-100 items-center justify-center">
            <Image
              src="/community_1.jpeg"
              alt="Spaß SomaBay Ägypten"
              fill
              className="object-cover -z-10 rounded-lg"
            />
            <p className="text-white uppercase text-3xl bg-slate-300/50 w-50 p-8">
              Fun
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 mx-auto gap-8 w-full my-16 h-full md:justify-center items-center">
        <div className="md:col-span-1 w-full p-4 space-y-4 h-full flex flex-col bg-slate-50 rounded-lg text-center justify-between">
          <div className="">
            <h3 className="text-4xl text-pink-500 font-extrabold mb-3">
              Zeitraum
            </h3>
            <p className="text-2xl">10.05. - 16.05.2026</p>
          </div>
          <div className="">
            <h3 className="text-4xl text-pink-500 font-extrabold mb-3">
              Preis
            </h3>
            <p className="text-2xl">
              ab 751,20 EUR plus Anreise und Geräteverleih
            </p>
          </div>
          <div>
            <h3 className="text-4xl text-pink-500 font-extrabold mb-3">
              Kiteschule
            </h3>
            <p>7 Bft KiteHouse Soma Bay</p>
          </div>
        </div>
        <div className="md:col-span-2 w-full h-full ">
          <div className="bg-white  rounded-lg relative h-50 md:h-full ">
            <Link href="https://kitehouse-somabay.com/">
              <Image
                src="https://kitehouse-somabay.com/UP1/wp-content/uploads/A-dream-come-true.jpg"
                alt="Kitehouse Soma Bay"
                fill
                className="object-cover rounded-lg"
              />
            </Link>
          </div>
          {/* <div className="flex flex-col mt-4 md:mt-0 text-center">
            <h3 className="text-4xl font-extrabold mb-3">Ort</h3>
            <p className="text-2xl mb-4">Soma Bay, Ägypten</p>
             <GoogleMaps /> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Event;
