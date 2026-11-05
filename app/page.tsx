import Aboutme from "@/components/aboutme";
import Contact from "@/components/contact/contact";
import Event from "@/components/event";

import Hero from "@/components/hero";

import Packages from "@/components/packages";

import Speparator from "@/components/separator";
import Inclusions from "@/components/inclusions";
import Schedule from "@/components/schedule";
import Testimonials from "@/components/testimonials";
import Partners from "@/components/partners";
import Faq from "@/components/faq";
import StickyCta from "@/components/stickyCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Event />

      <Speparator imageSrc="/background.JPG" alt="SomaBay Ägypten" />

      <Inclusions />
      <Schedule />
      <Packages />
      <Testimonials />
      <Partners />
      <Aboutme />
      <Faq />
      <Contact />

      <StickyCta />
    </main>
  );
}
