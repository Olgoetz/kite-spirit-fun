import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  CheckCircle2,
  EuroIcon,
  PlusCircleIcon,
  WavesLadder,
} from "lucide-react";
import { MdKitesurfing } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoFitnessSharp } from "react-icons/io5";
import { randomUUID } from "crypto";
import { Booking } from "./booking/booking";
import { TbFileTypePdf } from "react-icons/tb";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { prices } from "@/lib/prices";
const standardContent =
  "Welcome Cocktail, Sunrise & Sunset Yoga, professionelle Betreuung durch erfahrene Trainer, abwechslungsreiches Fitnessprogramm, Bedouin Dinner am Strand, Sunset Boot Tour, kostenloser Shuttleservice zum Kitespot und zurück, kostenloser Shuttleservice zur Marina, kostenlose Daybeds und Liegen am Strand, Tauschule direkt am Hotel, 6 Nächte, Halbpension, unbegrenzt Trinkwasser";
// const content = [
//   {
//     title: "Early Bird",
//     description: "täglich Fitness ohne Kiten",
//     extraContent: "Doppelzimmer, 20% Rabat bei buchung bis 31.01.2025",
//     price: "923",
//   },
//   {
//     title: "Paket 2",
//     description: "täglich Fitness und Kitekurs",
//     extraContent:
//       "Kitekurs Praxis mit 5 Ausfahrten, Kitekurs Theorie, Material",

//     price: "825",
//   },
//   {
//     title: "Paket 3",
//     description: "täglich Fitness und Shuttelservice mit Material",
//     extraContent: "Shuttleservice 5 Ausfahrten, Material",
//     price: "730",
//   },
//   {
//     title: "Paket 4",
//     description: "täglich Fitness und Shuttleservice ohne Material",
//     extraContent: "Shuttleservice 5 Ausfahrten",
//     price: "550",
//   },
// ];

function renderItems(
  content: string,
  isExtra: boolean,
  isSpecial: boolean = false,
) {
  if (!content.length) {
    return null;
  }
  const contentList = content.split(",").map((item) => (
    <div key={randomUUID()} className="flex items-center py-2">
      {!isExtra && item ? (
        <CheckCircle2
          className={cn(
            "mr-5 shrink-0",
            isSpecial ? "text-white" : "text-pink-500",
          )}
        />
      ) : (
        <PlusCircleIcon className="text-white fill-pink-500 mr-5" />
      )}
      <li>{item}</li>
    </div>
  ));

  return contentList;
}
const Packages = () => {
  return (
    <div className="container mt-10 px-4 max-w-400 mx-auto">
      <div className="py-20 grid md:grid-cols-4 gap-3">
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <FaLocationDot size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Breakers, Soma Bay</h3>
          </div>

          <p>
            Unsere Unterkunft, das{" "}
            <a
              className="text-pink-500"
              href="https://www.thebreakers-somabay.com/de/"
            >
              Breakers
            </a>
            , liegt in der wunderschönen Bucht von Soma Bay. Eine tolle Anlage
            mit einem traumhaften Strand, türkisblauem Wasser, unvergleichbarem
            Riff zum Schnorcheln und herausragender Nähe zum Kitespot. Die
            Zimmer sind sehr schön und modern eingerichtet und das Essen ist
            hervorragend.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <MdKitesurfing size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">7Bft Kitehouse</h3>
          </div>
          <p>
            Die sehr beliebte Kiteschule{" "}
            <a
              className="text-pink-500"
              href="https://kitehouse-somabay.com/de/"
            >
              7Bft Kitehouse
            </a>{" "}
            ist nur 10 Fahrminuten mit dem Shuttle von unserer Unterkunft
            entfernt. Das Team besteht aus super netten, lustigen und hoch
            qualifizierten Lehrern und sehr hilfsbereiten Beachboys die immer
            auf Euch schauen. Ich komme seit vielen Jahren an diese Station und
            fühle mich immer wohl. Für alle geübten Kiter gibt es mehrmals
            täglich die Option auf einen Downwinder zu einer wunderschönen Insel
            mit karibischem Flair.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <WavesLadder size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Orca</h3>
          </div>
          <p>
            Die sehr renommierte, bestens ausgestattete{" "}
            <a
              className="text-pink-500"
              href="https://orca.de/aegypten/tauchbasen-orca-dive-club-soma-bay"
            >
              Orca Tauchbasis
            </a>{" "}
            bietet Zugang zur attraktiven Rifflandschaft vom Ras Abu Soma mit
            ihrer farbenprächtigen Vielfalt – vom Hausriff mit Riesenmuränen,
            Zackenbarschen und Barrakudas bis zu den Top-Bootstauchplätzen der
            Region Safaga. Die über 30 verschiedenen Tauchplätze begeistern mit
            Drop-Offs, Gorgoniengärten, großem Fischreichtum und herrlichen
            Korallenformationen.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <IoFitnessSharp size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Fitness</h3>
          </div>
          <p>
            Tägliche Kurse in einer traumhaften Umgebung mit Blick aufs Meer. Am
            Morgen gibt es spezielle Yoga- und Mobility-Sessions, die euch
            optimal auf den Tag vorbereiten. Erlebt dynamische Workouts und
            DAYO-Sessions (Dance & Yoga) in einer inspirierenden Atmosphäre.
          </p>
        </div>
      </div>
      <div id="pakete" className="md:pt-20 pt-10">
        <h2 className="text-center font-bold text-2xl md:text-5xl text-pink-500 uppercase border-b pb-2 ">
          Preise
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-y-8 gap-x-10 mt-30">
        <Card className="flex flex-col h-full bg-gray-200 text-gray-500 opacity-60">
          <CardHeader className="relative">
            <CardTitle className="text-3xl">Super Early Bird</CardTitle>
            <p className="absolute border-gray-400 border -top-3 -right-4 rotate-12 text-2xl bg-gray-400 m-2 p-1 rounded-lg font-extrabold text-center text-white">
              Abgelaufen
            </p>
            <CardDescription className="text-gray-600">
              bei Buchung bis 31.01.2026
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul>
              {renderItems(standardContent, false, true)}
              {renderItems("", true)}
              <li className="flex flex-col items-center gap-2 justify-center  text-center">
                <PlusCircleIcon
                  size={40}
                  className="shrink-0 text-gray-400 fill-gray-300"
                />
                <span className="text-gray-600 text-2xl font-bold">
                  15% Rabatt
                </span>{" "}
                auf Beach Use, Storage, Kurse, Leihmaterial
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center justify-center bg-gray-300 text-gray-600 p-5 gap-4">
            <div className="flex">
              <p className="text-5xl font-semibold">
                {prices.superEarlyBird.double}*
              </p>
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <div className="my-4">
                <button
                  disabled
                  className="bg-gray-400 font-bold text-white px-4 py-2 rounded opacity-50 cursor-not-allowed"
                >
                  Nicht mehr verfügbar
                </button>
              </div>
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>
                Doppelzimmer zur Einzelnutzung {prices.superEarlyBird.single}
              </p>
            </div>
          </div>
        </Card>

        {/* EARLY BIRD */}
        <Card className="flex flex-col h-full bg-pink-500 text-white md:scale-110">
          <CardHeader className="relative">
            <CardTitle className=" text-3xl">Early Bird</CardTitle>
            <p className="absolute border-pink-500 border -top-3 -right-4 rotate-12 text-2xl bg-white m-2 p-1 rounded-lg font-extrabold text-center text-pink-500">
              10% Rabatt
            </p>
            <CardDescription className="text-white">
              bei Buchung zwischen 01.02. - 31.03.2026
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul>
              {renderItems(standardContent, false, true)}
              {renderItems("", true)}
              <li className="flex flex-col items-center gap-2 justify-center  text-center">
                <PlusCircleIcon
                  size={40}
                  className="shrink-0 text-pink-500 fill-white"
                />
                <span className="text-white text-2xl font-bold">
                  15% Rabatt
                </span>{" "}
                auf Beach Use, Storage, Kurse, Leihmaterial
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center justify-center bg-white text-pink-500 p-5 gap-4">
            <div className="flex">
              <p className="text-5xl font-semibold">
                {prices.earlyBird.double}*
              </p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <Booking
                package_name={"Early Bird"}
                styles="bg-pink-500 font-bold text-white"
              />
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung {prices.earlyBird.single}</p>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col h-full border-pink-500">
          <CardHeader className="relative">
            <CardTitle className=" text-3xl">Regular</CardTitle>

            <CardDescription>bei Buchung ab 01.04.2026</CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul>
              {renderItems(standardContent, false)}
              {renderItems("", true)}
              <li className="flex flex-col items-center gap-2 justify-center  text-center">
                <PlusCircleIcon
                  size={40}
                  className="shrink-0 text-white fill-pink-500"
                />
                <span className="text-pink-500 text-2xl font-bold">
                  15% Rabatt
                </span>{" "}
                auf Beach Use, Storage, Kurse, Leihmaterial
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center justify-center bg-pink-500/70 text-white p-5 gap-4">
            <div className="flex">
              <p className="text-5xl font-semibold">{prices.regular.double}*</p>
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <Booking package_name={"Regular"} />
              {/* <Button size="lg">Buchungsanfrage</Button> */}
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung {prices.regular.single}</p>
            </div>
          </div>
        </Card>

        {/* {content.map((item) => (
          <div key={item.title}>
            <Card
              key={item.title}
              className="flex flex-col h-full md:hover:scale-110"
            >
              <CardHeader>
                <CardTitle className="relative text-3xl">
                  {item.title}
                  {item.title == "Paket 2" && (
                    <p className="absolute -top-3 -right-4 rotate-12 text-lg bg-pink-500 m-2 p-1 rounded-lg font-extrabold text-center text-white">
                      am beliebtesten
                    </p>
                  )}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul>
                  {renderItems(standardContent, false)}
                  {renderItems(item.extraContent, true)}
                </ul>
              </CardContent>
              <CardFooter className="flex-col bg-pink-500/70 text-white p-5">
                <div className="flex">
                  <p className="text-5xl font-semibold">{item.price}</p>
                  <EuroIcon size={50} color="white" />
                </div>
                <div className="text-left">
                  <p>zzgl. eigene Anreise</p>
                  <p>zzgl. Kitematerial/-kurs</p>
                </div>
                <div className="my-4">
                  <Booking package_name={item.title} price={item.price} />
                </div>
              </CardFooter>
            </Card>
          </div>
        ))} */}
      </div>

      <div className="mt-28 mb-10 max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-r from-pink-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-pink-500 text-center mb-6">
              Preisliste Wassersport
            </h3>

            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <p className="text-center text-lg mb-4">
                Die Preise für den Verleih von Kitematerial, Storage und Kurse
                findest du hier:
              </p>

              <Link
                href="/Price List KiteHouse for Kite - Spirit - Fun - May 2026.pdf"
                passHref
                target="_blank"
                className="flex items-center justify-center gap-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg p-4 transition-colors duration-200"
              >
                <TbFileTypePdf size={40} />
                <span className="font-semibold text-lg">
                  Preisliste herunterladen (PDF)
                </span>
              </Link>
            </div>

            <div className="bg-pink-100 rounded-lg p-6 text-center">
              <p className="text-xl">
                Auf die gelisteten Preise bekommst du{" "}
                <span className="font-bold text-3xl text-pink-600">
                  15% Rabatt!
                </span>
              </p>
            </div>
          </div>

          <div className="bg-linear-to-r from-pink-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-pink-500 text-center mb-6">
              Preisliste Tauchen
            </h3>

            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm space-y-4 text-left text-sm md:text-base">
              <div>
                <p>
                  Für alle Tauch-Interessierten bieten wir im Rahmen unseres
                  Events{" "}
                  <span className="font-semibold">
                    Schnupper-Tauchen im Pool kostenfrei
                  </span>{" "}
                  an, um euch die Unterwasserwelt näher zu bringen.
                </p>
                <p className="mt-2 text-pink-500 font-semibold">
                  Wer dabei &quot;Blut geleckt&quot; hat, kann das farbenfrohe
                  Hausriff erkunden: Underwater Discovery Hausriff 80,00 €
                </p>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold mb-2">
                  Für bereits zertifizierte Taucher können wir euch attraktive
                  Pakete anbieten:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1">
                  <li>
                    <span className="font-semibold">Paket 1:</span> 5 Tauchgänge
                    am wunderschönen Hausriff für nur 110,00 €
                  </li>
                  <li>
                    <span className="font-semibold">Paket 2:</span> 3 Tage
                    Bootsausfahrten mit je 2 Tauchgängen für nur 190,00 € an die
                    schönsten Außen- und Innenriffe der SomaBay
                  </li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold mb-2">
                  Auch für Aus- und Weiterbildungen haben wir attraktive
                  Angebote:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1">
                  <li>
                    <span className="font-semibold">Specialities Bundle 2</span>{" "}
                    für 42,00 € pro TG (plus Tauchgänge)
                  </li>
                  <li>
                    <span className="font-semibold">Specialities Bundle 4</span>{" "}
                    für 40,00 € pro TG (plus Tauchgänge)
                  </li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <p className="mb-2">
                  Ohne Gerät mit einem Atemzug über das bunte Riffe gleiten?
                  Probiert Apnoe / Freitauchen aus!
                </p>
                <p className="font-semibold text-pink-500">
                  Freediving Kurs Basic bei uns für nur 100,00 €
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
