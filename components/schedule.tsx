import React from "react";
import { schedule } from "@/lib/event";

const Schedule = () => {
  return (
    <div className="container px-4 max-w-300 mx-auto">
      <h2 className="scroll-mt-20 pt-20 text-center font-bold text-3xl md:text-5xl uppercase border-b pb-2 text-pink-500">
        So sieht dein Tag aus
      </h2>
      <p className="text-center text-lg mt-6 mb-10 max-w-2xl mx-auto">
        Ein typischer Tag im Camp – flexibel genug, dass du so viel oder so
        wenig mitmachst, wie du magst.
      </p>

      <ol className="relative border-l-2 border-pink-200 ml-4 md:ml-6 space-y-8">
        {schedule.map((item) => (
          <li key={item.time} className="ml-6 md:ml-8">
            <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 ring-4 ring-white" />
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
              <span className="text-pink-500 font-bold text-lg tabular-nums">
                {item.time}
              </span>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Schedule;
