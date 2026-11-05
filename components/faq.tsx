import React from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/event";

const Faq = () => {
  return (
    <div id="faq" className="scroll-mt-20 container px-4 max-w-200 mx-auto">
      <h2 className="pt-20 text-center font-bold text-3xl md:text-5xl uppercase border-b pb-2 text-pink-500">
        Häufige Fragen
      </h2>
      <p className="text-center text-lg mt-6 mb-10 max-w-2xl mx-auto">
        Alles, was du vor der Buchung wissen möchtest. Noch Fragen offen?
        Schreib uns einfach.
      </p>

      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold list-none">
              <span>{item.q}</span>
              <ChevronDown
                className="text-pink-500 shrink-0 transition-transform duration-200 group-open:rotate-180"
                size={22}
              />
            </summary>
            <p className="px-5 pb-5 text-gray-700 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
