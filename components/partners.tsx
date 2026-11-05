import React from "react";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/event";

const Partners = () => {
  return (
    <div className="my-16 bg-pink-500/40 py-12">
      <div className="container px-4 max-w-300 mx-auto">
        <p className="text-center text-sm uppercase tracking-widest text-gray-600 mb-8">
          In Zusammenarbeit mit
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((p) => (
            <Link
              key={p.name}
              href={p.url}
              target="_blank"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-lg font-semibold">{p.name}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
