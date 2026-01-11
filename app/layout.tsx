import "./globals.css";
import Navbar from "@/components/navbar";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTopButton from "@/components/scrollToTopButton";
import { Toaster } from "@/components/ui/sonner";
import { StructuredData } from "@/components/structured-data";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Move, Spirit und Fun Event (Ocean Edition) in Soma Bay, Ägypten",
    template: "%s | Move Spirit Fun",
  },
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
    "Katja Frank",
    "Ägypten",
    "Rotes Meer",
    "Kitesurf Event",
    "Yoga Retreat",
    "Fitness Urlaub",
  ],
  authors: [{ name: "Michaela Süßbauer" }, { name: "Katja Frank" }],
  creator: "Kite Spirit Fun",
  publisher: "Kite Spirit Fun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Move, Spirit und Fun Event (Ocean Edition) in Soma Bay, Ägypten",
    description:
      "Kitesurfen, Yoga und Fitness Event in Soma Bay mit Michaela Süßbauer und Katja Frank. Erlebe unvergessliche Momente am Roten Meer!",
    url: process.env.URL,
    siteName: "Kite Spirit Fun",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Move, Spirit und Fun Event - Ocean Edition in Soma Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move, Spirit und Fun Event (Ocean Edition) in Soma Bay, Ägypten",
    description:
      "Kitesurfen, Yoga und Fitness Event in Soma Bay mit Michaela Süßbauer und Katja Frank. Erlebe unvergessliche Momente am Roten Meer!",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "S0UOqtGUvuYIkbo8hbWv47yEfZf7ef4ZapyzIMVsngM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={roboto.className}>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />

        <Toaster position="bottom-right" />
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  );
}
