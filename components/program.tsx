import { Card, CardHeader, CardContent } from "./ui/card";

import Image from "next/image";
import { IconType } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { TbYoga } from "react-icons/tb";
import { IoBoat, IoFitnessSharp } from "react-icons/io5";
import {
  MdBreakfastDining,
  MdDinnerDining,
  MdKitesurfing,
} from "react-icons/md";
import {
  LucideIcon,
  Sailboat,
  Sun,
  SunsetIcon,
  WavesLadder,
} from "lucide-react";
import { GiBoatPropeller } from "react-icons/gi";

type ProgramPoint = {
  text: string;
  icon: LucideIcon | IconType;
};

const program: ProgramPoint[] = [
  {
    text: `Täglich Kite- und Wingkurse für Anfänger und Fortgeschrittene*\n
    Wir rechnen nicht damit, aber falls es passieren sollte - wir haben für No Wind Solutions gesorgt`,
    icon: MdKitesurfing,
  },
  {
    text: `Yoga, Mobility und Faszientraining zur Regeneration sowie zur optimalen Vorbereitung auf´s Wasser\n
     Highlights: DAYO, Dance & Workout Specials`,
    icon: AiFillHeart,
  },
  {
    text: "Tauchschule direkt am Hotel - entdecke die faszinierende Unterwasserwelt des Roten Meeres",
    icon: WavesLadder,
  },
  {
    text: "Sunrise Yoga am Strand sowie Sundowner Yoga auf der Dachterasse",
    icon: TbYoga,
  },
  {
    text: "Atemberaubende Sunsettour mit DJ, kühlen Drinks und jeder Menge Spaß",
    icon: IoBoat,
  },
  {
    text: "Bedouin Dinner direkt am Strand - geniesse bestes traditionelles Essen in einer wundervollen Atmosphäre wie in 1001 Nacht",
    icon: MdDinnerDining,
  },
];

const Program = () => {
  return (
    <div className="bg-black text-white p-4">
      <div id="programm" className="container max-w-350 mx-auto py-20">
        <h2 className="text-2xl md:text-5xl uppercase font-bold text-pink-500 mb-10 border-b pb-2 text-center">
          Programm
        </h2>
        <p className="p-4 text-center text-lg">
          Wir haben für euch ein tolles Programm zusammen gestellt, welches viel
          Abwechslung bietet und Spaß garantiert
        </p>
        <div className="grid md:grid-cols-3 gap-4 items-center justify-between">
          {program.map((el) => (
            <Card
              key={el.text}
              className="text-center h-full bg-black text-white  border-white items-center"
            >
              <CardHeader className="items-center">
                <el.icon size={48} color="white" />
                {/* <CardTitle> </CardTitle> */}
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent className="">
                <p className="whitespace-pre-line">{el.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
