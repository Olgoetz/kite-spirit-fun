"use client";
import React, { useEffect, useState } from "react";
import { earlyBirdDeadline } from "@/lib/event";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds, expired: false };
}

const Unit = ({
  value,
  label,
  light,
}: {
  value: number;
  label: string;
  light?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <span
      className={`tabular-nums text-2xl md:text-4xl font-extrabold ${
        light ? "text-white" : "text-pink-500"
      }`}
    >
      {String(value).padStart(2, "0")}
    </span>
    <span
      className={`text-xs uppercase tracking-wide ${
        light ? "text-white/80" : "text-gray-500"
      }`}
    >
      {label}
    </span>
  </div>
);

const Countdown = ({ light = false }: { light?: boolean }) => {
  const target = new Date(earlyBirdDeadline).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Avoid hydration mismatch: render nothing until mounted on the client.
  if (!time) return null;
  if (time.expired) return null;

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Unit value={time.days} label="Tage" light={light} />
      <Unit value={time.hours} label="Std" light={light} />
      <Unit value={time.minutes} label="Min" light={light} />
      <Unit value={time.seconds} label="Sek" light={light} />
    </div>
  );
};

export default Countdown;
