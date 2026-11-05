import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/event";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  return (
    <div className="container px-4 max-w-350 mx-auto">
      <h2 className="scroll-mt-20 pt-20 text-center font-bold text-3xl md:text-5xl uppercase border-b pb-2 text-pink-500">
        Das sagen Teilnehmer
      </h2>
      <p className="text-center text-lg mt-6 mb-10 max-w-2xl mx-auto">
        Viele kommen Jahr für Jahr wieder. Das sagen sie über ihre Woche in Soma
        Bay.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col bg-white rounded-xl p-6 shadow-sm"
          >
            <Quote className="text-pink-500 mb-4" size={32} />
            <blockquote className="text-gray-700 grow italic">
              &bdquo;{t.quote}&ldquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              {t.image ? (
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-500">
                  {initials(t.name)}
                </span>
              )}
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.detail}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
