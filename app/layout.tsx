import "./globals.css";
import Navbar from "@/components/navbar";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/footer";

import ScrollToTopButton from "@/components/scrollToTopButton";
import { Toaster } from "@/components/ui/sonner";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Move, Spirit und Fun Event (Ocean Edition) in Soma Bay, Ägypten",
  description:
    "Kitesurfen, Yoga und Fitness Event in Soma Bay mit Michaela Süßbauer und Katja Frank. Erlebe unvergessliche Momente am Roten Meer!",
  metadataBase: new URL(process.env.URL!),
  keywords: [
    "Kitesurfen",
    "Fitness",
    "Gardasee",
    "Yoga",
    "Kitecamp",
    "The Breakers",
    "Soma Bay",
    "Michaela Süßbauer",
  ],

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Toaster position="bottom-right" />
        <Footer />

        <ScrollToTopButton />
      </body>
    </html>
  );
}
