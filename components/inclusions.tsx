import React from "react";
import { inclusions } from "@/lib/event";
import {
  Martini,
  Dumbbell,
  Users,
  UtensilsCrossed,
  Ship,
  Bus,
  Umbrella,
  Waves,
  BedDouble,
} from "lucide-react";
import { TbYoga } from "react-icons/tb";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon | IconType> = {
  cocktail: Martini,
  yoga: TbYoga,
  fitness: Dumbbell,
  trainer: Users,
  dinner: UtensilsCrossed,
  boat: Ship,
  shuttle: Bus,
  beach: Umbrella,
  dive: Waves,
  halfboard: BedDouble,
};

const Inclusions = () => {
  return (
    <div className="container px-4 max-w-350 mx-auto">
      <h2 className="scroll-mt-20 pt-20 text-center font-bold text-3xl md:text-5xl uppercase border-b pb-2 text-pink-500">
        Das ist alles dabei
      </h2>
      <p className="text-center text-lg mt-6 mb-10 max-w-2xl mx-auto">
        In jedem Paket enthalten – damit du dich nur noch um eines kümmern
        musst: eine unvergessliche Woche zu genießen.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {inclusions.map((item) => {
          const Icon = iconMap[item.icon] ?? Waves;
          return (
            <div
              key={item.text}
              className="flex flex-col items-center text-center gap-3 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                <Icon className="text-pink-500" size={24} />
              </span>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inclusions;
